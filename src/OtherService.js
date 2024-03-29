import React, { Component } from "react";
import {Loading} from "./Loading";
import './NewsItem.css'

export class OtherService extends Component{
    static displayName = OtherService.name
    constructor(props) {
        super(props);
        this.state = {data:[], loading: true};
    }

    componentDidMount() {
        this.refresh();
    }

    async refresh() {
        this.setState({ loading: false });
    }

    static renderResult(data) {
        return (
            <>
                {
                    data
                }
            </>
        )
    }
    
    render() {
        return (
            <div className="glass p-2">"'A': [1, 2, 3], 'B': [4, 5, 6], 'C': [7, 8, 9]"</div>
        )
    }
}