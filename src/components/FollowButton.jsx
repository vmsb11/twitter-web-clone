import React, { Component } from 'react';
import './FollowButton.css';

export default class FollowButton extends Component {
    render() {
        return (
            <button className="FollowButton">
                {this.props.label}
            </button>
        );
    }
}
