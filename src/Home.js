import React, { Component }  from 'react';
import {NewsItem} from "./NewsItem";
import Button from '@mui/material/Button';
import {Loading} from "./Loading";

export class Home  extends Component {
    static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = {data:[], loading: true, page: 0, scrollY: 0};
    }
    componentDidUpdate (prevProps , prevState , snapshot) {
        if (prevState.page !== this.state.page) {
            this.refresh();
        }
    }

    componentDidMount(prevProps, prevState) {
        this.refresh();
    }
    refresh = async() => {
        const { page } = this.state;
        this.setState({loading : true});
        
        const maxNews = 20;
         const responce = await fetch ( 'https://local.aioki.ru/news?' + new URLSearchParams ( {
             count_news : maxNews ,
             skip_news : maxNews * page
         } ) , {
             method : 'get' ,
             headers : new Headers ( {
                 'Accept' : 'application/json' ,
             } ) ,
         } )
             .then ( res => {
                 if (!res.ok) {
                     return res.text ().then ( errCode => Promise.reject ( new Error ( errCode ) ) )
                 }
                 return res;
             } ).finally ( () => this.setState ( { loading : false } ) );
         const result = await responce.json ();
         this.setState((prevState) => ({data: [...prevState.data, ...result]}))
         console.log (this.state.scrollY)
         //window.scrollTo(0, this.state.scrollY);
    }
    
     loadMore = () => {
        this.setState({ scrollY: window.scrollY });
        this.setState((prevState) => ({
            page : prevState.page + 1
        }));
    };
    
    renderNews(data) {
        
        return (
            <>
                { data.map ( newsItem => <NewsItem model={newsItem} key={Math.random()}/> )                }
                <Button variant="contained" onClick={this.loadMore}>Загрузить еще</Button>
            </>
        )
    }

    render () {
        let contents = this.state.loading && this.state.data.length === 0
            ? <Loading/> : this.renderNews(this.state.data)
        return ( <>{contents}</> )
    };

}