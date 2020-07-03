import React, { Component } from 'react';
import './MenuHeader.css';

export default class MenuHeader extends Component {
    render() {
        return (
            <div className="MenuHeader">
                <a href='/'>
                    <img src={require('../images/logo.png')} alt=""/>
                </a>
            </div>
        );
    }
}
