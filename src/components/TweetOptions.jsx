import React, { Component } from 'react';
import './TweetOptions.css';

export default class TweetOptions extends Component {
    
    render() {

        const {comments} = this.props || '';
        const {retweets} = this.props || '';
        const {likes} = this.props || '';

        return (
            <div className="TweetOptions">
                <a href="#" className="LinkComment">
                    <i class="fa fa-comment-o"></i>
                    <span style={{
                        fontSize: 14,
                        marginLeft: 10
                    }}>{comments}</span>
                </a>
                <a href="#" className="LinkRT">
                    <i class="fa fa-retweet"></i>
                    <span style={{
                        fontSize: 14,
                        marginLeft: 10
                    }}>{retweets}</span>
                </a>
                <a href="#" className="LinkLike">
                    <i class="fa fa-heart-o"></i>
                    <span style={{
                        fontSize: 14,
                        marginLeft: 10
                    }}>{likes}</span>
                </a>
                <a href="#" className="LinkSave">
                    <i class="fa fa-upload"></i>
                </a>
            </div>
        );
    }
}
