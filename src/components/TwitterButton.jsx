import React, { Component } from 'react';
import './TwitterButton.css';

export default class TwitterButton extends Component {
    render() {
        return (
            <button className="TwitterButton">
                {this.props.label}
            </button>
        );
    }
}
