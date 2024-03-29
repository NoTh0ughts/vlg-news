import React, { Component }  from 'react';
import './Tonality.css'
import { TonalityItem } from './TonalityItem';
import Button from '@mui/material/Button';
import {Loading} from "./Loading";
import {NewsItem} from "./NewsItem";

export class Tonality extends Component {
    static displayName = Tonality.name;

    constructor(props) {
        super(props);
        this.state = {data:[], loading: true};
    }

    componentDidMount() {
        this.refresh();
    }

    async refresh() {
        const response = await fetch('https://local.aioki.ru/tonality')
            .then(res => {
                if (!res.ok) {
                    return res.text().then(errCode => Promise.reject(new Error(errCode)))
                }

                return res;
            });

        const responceData = await response.json();
        this.setState({ data: responceData, loading: false });
    }

    static renderTonality(data) {
        return (
            <>
                {
                    data.map ( ton =>
                        <TonalityItem model={ton} key={Math.random()}/>
                    )
                }
            </>
        )
    }

    render() {
        let contents = this.state.loading
            ? <Loading/>
            : Tonality.renderTonality(this.state.data)
        return (
            <>{contents}</>
        )
    }
}