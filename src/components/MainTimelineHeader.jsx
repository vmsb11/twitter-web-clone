import React, { Component } from 'react';
import './MainTimelineHeader.css';

export default class MainTimelineHeader extends Component {
    render() {
        return (
            <div className="MainTimelineHeader">
                <div className="Title">
                    <span>Página Inicial</span>
                </div>
                <div className="Moment">
                    <img src={require('../images/moment.png')} alt="" />
                </div>                
            </div>
        );
    }
}
