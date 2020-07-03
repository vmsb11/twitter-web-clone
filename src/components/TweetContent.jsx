import React, { Component } from 'react';
import TweetImage from './TweetImage';
import TweetOptions from './TweetOptions';
import './TweetContent.css';

export default class TweetContent extends Component {
    render() {

        const {hasImage} = this.props || null;
        const {comments} = this.props || '';
        const {retweets} = this.props || '';
        const {likes} = this.props || '';

        return (
            <div className="TweetContent">
                <div className="AccountDetail">
                    <p className="Name">{this.props.name}</p>
                    <p className="User">{this.props.user}</p>
                    <p className="Date">{this.props.datetime}</p>
                </div>
                <div className="Content">
                    <p>
                        {this.props.content}
                    </p>
                    { 
                        hasImage ?
                        <TweetImage 
                            url='https://pbs.twimg.com/media/EaVRlCEX0AAMzZn?format=jpg&name=4096x4096' />
                        : ''
                    }
                    <TweetOptions
                        comments={comments}
                        retweets={retweets}
                        likes={likes} />
                </div>
            </div>
        );
    }
}
