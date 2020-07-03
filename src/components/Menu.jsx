import React, { Component } from 'react';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import TwitterButton from './TwitterButton';
import AccountHeader from './AccountHeader';
import './Menu.css';

export default class Menu extends Component {
    render() {
        return (
            <div className="Menu">
                <MenuHeader />
                <MenuItem 
                    selected
                    label="Página Inicial"
                    icon="home"
                    iconType="fa" />
                <MenuItem 
                    label="Explorar"
                    icon="hashtag"
                    iconType="fa" />
                <MenuItem 
                    label="Notificações"
                    icon="bell-o"
                    iconType="fa" />
                <MenuItem 
                    label="Mensagens"
                    icon="mail_outline"
                    iconType="mat" />
                <MenuItem 
                    label="Itens salvos"
                    icon="bookmark-o"
                    iconType="fa" />
                <MenuItem 
                    label="Listas"
                    icon="notes"
                    iconType="mat" />
                <MenuItem 
                    label="Perfil"
                    icon="user-o"
                    iconType="fa" />
                <MenuItem 
                    label="Mais"
                    icon="more_horiz"
                    iconType="mat" />
                <TwitterButton 
                    label="Tweetar" />
                <AccountHeader 
                    url={'https://pbs.twimg.com/profile_images/1046533705509015553/hXQG0xcC_400x400.jpg'}
                    name="Vinícius Moreira da Silva Braga"
                    user="@vini_developer" />
            </div>
        );
    }
}
