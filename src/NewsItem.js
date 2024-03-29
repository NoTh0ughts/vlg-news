import React , {Component} from 'react';
import './NewsItem.css'
export class NewsItem extends Component{
    constructor(props) {
        super(props);
        this.model = props.model;
    }
    render() {
        return (
            <div className='m-3 news-item glass'>
                <div className='d-block'>
                    <p className='fw-bold h4 m-3'>{this.model['title']}</p>
                    <p className='m-3'>{ this.model['text'] }</p>
                    <a className='m-3 d-block' href={ this.model['url'] }> Оригинальная новость</a>
                    <img src={this.model['url_image'][0]} className='img-fluid'/>

                    <div>
                        <p className='position-absolute end-0 me-3' style={{color: 'gray'}}>{ this.model[ 'date' ] }</p>
                        <img></img>
                    </div>
                </div>
            </div>
        );
    };
}
NewsItem.displayName = NewsItem.name