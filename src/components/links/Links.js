import React from 'react';
import './Links.css';

export default function Links(props) {
    return(
        <div className="d-flex flex-row justify-content-center pt-4">
            <div className="pr-2">
                <span className="title">{props.type}</span>
                <span>:</span>
            </div>
            <span className="subtitle">{props.link}</span>
        </div>
    )
}