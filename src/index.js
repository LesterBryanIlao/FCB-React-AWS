import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

// function HelloWorld(){
//     return <h1> Hello, World!</h1>
// }

function App(){
    return (
        <div className="app">
            <header className="app-header">
                <h1>My Amazing ToDo-List App</h1>
                <p>The most simple and amazing Todo-List React App.</p>
            </header>
        </div>
    );

}

ReactDOM.render(<App/>, document.getElementById("root"))