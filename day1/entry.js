import React from 'react';
import ReactDOM from 'react-dom';

import HeadLz from './components/headLz'
import Cc from './components/cc'
import "./style/main.css"
import './style/sty.css'
class App extends React.Component {


    render() {
        return ( < div className = "app" >
            <
            HeadLz / >
             <Cc/>
            <
           
            /div>
        )
    }
}

ReactDOM.render( < App / > , document.getElementById('box'))