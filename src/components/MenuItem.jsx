import React, { Component } from 'react';
import './MenuItem.css';

export default class MenuItem extends Component {
    render() {

        const {selected} = this.props || null;
        const {iconType} = this.props;
        let linkClass = 'Link';
        let labelClass = 'Label';

        if(selected) {
            
            linkClass = 'LinkSelected';
            labelClass = 'LabelSelected';
        }

        return (
            <div className="MenuItem">
                <a className={linkClass} href='/'>
                    {
                        iconType === 'fa' ? <i className={`fa fa-${this.props.icon} ${labelClass}`}></i> : <i className={`material-icons ${labelClass}`}>{this.props.icon}</i>                        
                    }
                    <span className={labelClass}>{this.props.label}</span>
                </a>
            </div>
        );
    }
}
