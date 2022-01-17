import React from "react";
import  ReactDOM  from "react-dom";
import "./styles.css";
import App from './App';

const App = () => {

    return (
        <div className="App">
            HELLO WORLD
        </div>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)