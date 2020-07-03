import React, { Component } from 'react';
import './TwitterButtonSM.css';

export default class TwitterButtonSM extends Component {
    render() {
        return (
            <button className="TwitterButtonSM">
                {this.props.label}
            </button>
        );
    }
}
