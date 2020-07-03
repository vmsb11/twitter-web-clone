import React, { Component } from 'react';
import SearchTool from './SearchTool';
import TrendingTopics from './TrendingTopics';
import WhoFollow from './WhoFollow';
import './Tools.css';

export default class Tools extends Component {
    render() {
        return (
            <div className="Tools">
                <SearchTool />
                <TrendingTopics />
                <WhoFollow />
            </div>
        );
    }
}
