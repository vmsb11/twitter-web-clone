import React, { Component } from 'react';
import FollowButton from './FollowButton';
import './WhoFollowItem.css';

export default class WhoFollowItem extends Component {
    
    render() {

        return (
            <div className="WhoFollowItem">
                <div className="ImageDetail">
                    <img src={this.props.url} alt=""/>
                </div>
                <div className="Account">
                    <p className="Name">{this.props.name}</p>
                    <p className="User">{this.props.user}</p>
                </div>
                <div className="Follow">
                    <FollowButton 
                        label="Seguir" />
                </div>
            </div>
        );
    }
}
