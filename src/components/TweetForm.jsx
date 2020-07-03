import React, { Component } from 'react';
import TwitterButtonSM from './TwitterButtonSM';
import './TweetForm.css';

export default class TweetForm extends Component {

    constructor(props) {

        super(props);

        this.observe = '';

        if (window.attachEvent) {
            this.observe = function (element, event, handler) {
                element.attachEvent('on'+event, handler);
            };
        }
        else {
            this.observe = function (element, event, handler) {
                element.addEventListener(event, handler, false);
            };
        }
    }

    componentDidMount() {

        this.init();
    }

    init () {
        var text = document.getElementById('text');
        function resize () {
            text.style.height = 'auto';
            text.style.height = text.scrollHeight+'px';
        }
        function delayedResize () {
            window.setTimeout(resize, 0);
        }
        this.observe(text, 'change',  resize);
        this.observe(text, 'cut',     delayedResize);
        this.observe(text, 'paste',   delayedResize);
        this.observe(text, 'drop',    delayedResize);
        this.observe(text, 'keydown', delayedResize);

        text.focus();
        text.select();
        resize();
    }
    
    render() {
        return (
            <div className="TweetForm">
                <div className="ImageDetail">
                    <img src={'https://pbs.twimg.com/profile_images/1046533705509015553/hXQG0xcC_400x400.jpg'} alt="" />                
                </div>
                <div className="Form">
                    <textarea id="text" placeholder="O que está acontecendo ?"></textarea>
                    <div className="FormOptions">
                        <div className="TweetOptions">
                            <a href='/' className="LinkImage">
                                <i className="material-icons">image</i>
                            </a>
                            <a href='/' className="LinkGif">
                                <i className="material-icons">gif</i>
                            </a>
                            <a href='/' className="LinkVote">
                                <i className="material-icons">ballot</i>
                            </a>
                            <a href='/' className="LinkSmile">
                                <i className="fa fa-smile-o"></i>
                            </a>
                            <a href='/' className="LinkProgramer">
                                <i className="fa fa-calendar-o"></i>
                            </a>
                        </div>
                        <div className="TweetSend">
                            <TwitterButtonSM label="Tweetar" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
