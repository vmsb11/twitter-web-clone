import React, { Component } from 'react';
import WhoFollowItem from './WhoFollowItem';
import './WhoFollow.css';

export default class WhoFollow extends Component {
    render() {
        return (
            <div className="WhoFollow">
                <div className="Header">
                    <span>Quem seguir</span>
                </div>
                <hr />
                <WhoFollowItem
                    url={'https://pbs.twimg.com/profile_images/1278268488478408704/Eg0F-px1_400x400.png'}
                    name="zensar"
                    user="@Zensar" />
                <hr />
                <WhoFollowItem
                    url={'https://pbs.twimg.com/profile_images/1201694733376118786/d96e39ad_400x400.jpg'}
                    name="Santos FC"
                    user="@SantosFC" />
                <hr />
                <WhoFollowItem
                    url={'https://pbs.twimg.com/profile_images/1267157303989583876/oxX05hJt_400x400.jpg'}
                    name="Fred Guedes"
                    user="@fredgol9" />
                <hr />
                <div className="More">
                    <a className="LinkMore" href='/'>Mostrar mais</a>
                </div>
            </div>
        );
    }
}
