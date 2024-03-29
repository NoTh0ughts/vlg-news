import React  from 'react';
import './NewsItem.css'
export function TonalityItem(props) {
    return (
        <>        
            <div className='tonality-item glass'>
                <p className="h5 fw-light mt-1">{props.model['sentence']}</p>
                <div>
                    {
                        Object.keys(props.model['result'])
                            .map(key => 
                                <p className="" key={Math.random()}>{key + ":" + props.model['result'][key]}</p>
                            )
                    }
                </div>
            </div>
        </>
    );
}
TonalityItem.displayName = TonalityItem.name