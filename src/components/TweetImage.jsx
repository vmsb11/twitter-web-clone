import React, { Component } from 'react';
import './TweetImage.css';

export default class TweetImage extends Component {
    render() {
        return (
            <div className="TweetImage">
                <img src={this.props.url} alt=""/>
            </div>
        );
    }
}
