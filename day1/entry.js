import React from 'react';
import ReactDOM from 'react-dom';

import HeadLz from './components/headLz'
import "./style/main.css"
class App extends React.Component {


    render() {
        return ( < div className = "app" >
            <
            HeadLz / >
            <
            /div>
        )
    }
}

ReactDOM.render( < App / > , document.getElementById('box'))