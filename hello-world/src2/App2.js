import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App2 extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="App">
                {
                    this.props.id+" "+this.props.des
                }
            </div>
        );
    }
}

export default App2;
/**
 * Created by Administrator on 2017/3/16 0016.
 */
