import React, { Component } from 'react';
import './TweetDetail.css';

export default class TweetDetail extends Component {
    
    render() {

        return (
            <div className="TweetDetail">
                {this.props.children}
            </div>
        )
    }
}
