import React, { Component } from 'react';
import './AccountHeader.css';

export default class AccountHeader extends Component {
    render() {

        let name = this.props.name;
        let user = this.props.user;

        if(name.length > 20) {

            name = name.substring(0, 16) + ' ...';
        }

        if(user.length > 20) {

            user = user.substring(0, 16) + ' ...';
        }

        return (
            <div className="AccountHeader">
                <div className="ImageDetail">
                    <img src={this.props.url} alt=""/>
                </div>
                <div className="Description">
                    <p className="Name"><b>{name}</b></p>
                    <p className="User">{user}</p>
                </div>
                <div className="Options">
                    <a href="#" className="LinkOptions">
                        <i class="material-icons">expand_more</i>
                    </a>
                </div>
            </div>
        );
    }
}
