import React, { Component } from 'react';
import MainTimelineHeader from './MainTimelineHeader';
import TweetHeader from './TweetHeader';
import TweetContent from './TweetContent';
import TweetDetail from './TweetDetail';
import TweetForm from './TweetForm';
import './MainTimeline.css';

export default class MainTimeline extends Component {
    render() {
        return (
            <div className="MainTimeline">
                <MainTimelineHeader />
                <hr />
                <TweetForm />
                <hr />
                <TweetDetail>
                    <TweetHeader 
                        url={'https://pbs.twimg.com/profile_images/1243527857684582407/Zz0FZFfZ_400x400.jpg'} />
                    <TweetContent
                        name="Corinthians" 
                        user="@Corinthians"
                        datetime="7:10 PM · 28 de jun de 2020"
                        content="Nas finais, o Coringão enfrentou o Botafogo em Ribeirão Preto e goleou por 3 a 0, gols de João Carlos e Marcelinho duas vezes! No Morumbi dia 27 de Maio de 2001, o empate em 0 x 0 deu o título de Campeão ao Alvinegro de Parque São Jorge!"
                        location="Twitter for iPhone"
                        comments={2}
                        retweets={9}
                        likes={135} />
                </TweetDetail>
                <hr />
                <TweetDetail>
                    <TweetHeader 
                        url={'https://pbs.twimg.com/profile_images/1243527857684582407/Zz0FZFfZ_400x400.jpg'} />
                    <TweetContent
                        name="Corinthians" 
                        user="@Corinthians"
                        datetime="1:00 PM · 13 de jun de 2020"
                        hasImage
                        content="Fiel, o Limpa Nome é um serviço da Serasa que oferece até 90% de desconto e condições especiais para você quitar suas dívidas. Consulte grátis seu CPF e confira suas ofertas. Acesse: http://serasa.news/LNOeFiel_tt"
                        location="TweetDeck"
                        comments={10}
                        retweets={17}
                        likes={223} />
                </TweetDetail>
                <hr />
            </div>
        );
    }
}
