import React, { Component } from 'react';
import './TrendingTopicItem.css';

export default class TrendingTopicItem extends Component {
    
    render() {

        const {hasImage, url} = this.props;

        return (
            <div className="TrendingTopicItem">
                <div className="Topic">
                    <p className="Title">{this.props.title}</p>
                    <p className="Description">{this.props.description}</p>
                </div>
                {
                    hasImage ?
                    <div className="ImageDetail">
                        <img src={this.props.url} alt=""/>
                    </div>
                    : ''
                }
            </div>
        );
    }
}
