import React, { Component } from "react";
import Home from './Home';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h1>My React App!</h1>
                <Home />  
            </div>
        );
    }
}

export default App;