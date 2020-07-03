import React, { Component } from 'react';
import './TweetHeader.css';

export default class TweetHeader extends Component {
    render() {
        return (
            <div className="TweetHeader">
                <div className="ImageDetail">
                    <img src={this.props.url} alt=""/>
                </div>
                
            </div>
        );
    }
}
