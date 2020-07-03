import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import './SearchTool.css';

export default class SearchTool extends Component {
    
    constructor(props) {

        super(props);

        this.state = {

            searching: false,
            text: ''
        }
    }

    handleEnterInput() {

        this.setState({searching: true});
    }

    handleLeaveInput() {

        this.setState({searching: false});
    }

    handleInput(e) {

        const text = e.target.value;

        if(text !== '') {

            this.setState({searching: true, text: text});
        }
        else {

            this.setState({searching: false});
        }
    }

    render() {
        return (
            <div className="SearchTool">
                <div className="SearchArea">
                    
                    {
                        !this.state.searching ? <i className="material-icons">search</i> : <i className="fa fa-arrow-left"></i>                  
                    }
                    <input type="text" 
                        placeholder="Buscar no Twitter"
                        onMouseEnter={() => this.handleEnterInput()}
                        onMouseLeave={() => this.handleLeaveInput()}
                        onChange={(e) => this.handleInput(e)} />
                    {
                        this.state.searching ? <ReactLoading type='spin' width={32} height={32} color='#39F9F2' /> : null                  
                    }
                </div>
            </div>
        );
    }
}
