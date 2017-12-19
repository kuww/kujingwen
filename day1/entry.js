import React from 'react';
import ReactDOM from 'react-dom';

import HeadLz from './components/headLz'
import Head from './components/head'
import Cc from './components/cc'
import "./style/main.css"
import './style/sty.css'
import './style/sty1.css'
class App extends React.Component {


    render() {
        return ( < div className = "app" >
            <Head/>
            <
            HeadLz / >
             <Cc/>
            <
           
            /div>
        )
    }
}

ReactDOM.render( < App / > , document.getElementById('box'))