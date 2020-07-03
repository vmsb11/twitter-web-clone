import React, { Component } from 'react';
import TrendingTopicItem from './TrendingTopicItem';
import './TrendingTopics.css';

export default class TrendingTopics extends Component {
    render() {
        return (
            <div className="TrendingTopics">
                <div className="Header">
                    <span>O que está acontecendo</span>
                </div>
                <hr />
                <TrendingTopicItem 
                    title="Assunto do Momento em Brasil"
                    description="Coronavírus" />
                <hr />
                <TrendingTopicItem 
                    title="Assunto do Momento em Brasil"
                    description="Aricia" />
                <hr />
                <TrendingTopicItem
                    hasImage
                    url={'https://pbs.twimg.com/semantic_core_img/1278883071119384576/hzvGdt44?format=jpg&name=240x240'}
                    title="Covid-19 . há 3 horas"
                    description="Covid-19: Rio de Janeiro tem bares lotados em primeiro dia de flexibilização" />
                <hr />
                <TrendingTopicItem
                    title="Tecnologia . Assunto do Momento"
                    description="Thiago Ventura" />
                <hr />
                <TrendingTopicItem
                    hasImage
                    url={'https://pbs.twimg.com/media/Eb3K3s4WsAEBKNL?format=jpg&name=240x240'}
                    title="Ontem"
                    description="Por que sobrenome pode determinar seu salário?" />
                <hr />
                <div className="More">
                    <a className="LinkMore" href='/'>Mostrar mais</a>
                </div>
            </div>
        );
    }
}
