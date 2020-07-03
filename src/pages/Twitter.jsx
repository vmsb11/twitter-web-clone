import React, { Component } from 'react';
import Menu from '../components/Menu';
import MainTimeline from '../components/MainTimeline';
import Tools from '../components/Tools';
import './Twitter.css';

export default class Twitter extends Component {
    render() {
        return (
            <div className="Twitter">
                <Menu />
                <MainTimeline />
                <Tools />
            </div>
        );
    }
}