import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

function Task(props) {
    // console.log(props)
    return (
        <li className="tasks-item">{props.taskName}</li>

    );
}
function TasksList() {

    const taskItemList = [
        "Follow Edukasyon.ph on Facebook",
        "Follow AWS Siklab Pilipinas on Facebook",
        "Follow Zuitt Coding Bootcamp on Facebook",
        "Follow Edukasyon.ph on Instagram",
        "Follow AWS Siklab Pilipinas on Instagram"  
        
    ];

    return (

        <div>
            <input className="task-input"/>
            <ul>
                {taskItemList.map((task, index) => {
                    console.log(task, index);
                    return <Task key={index} taskName={task} />;
                })}
            </ul>
        </div>
    );
}

function App(){
    
    const paraStyle = {
        "marginBottom":"15px",
    };

    return (
        <div className="app">
            <header className="app-header">
                <h1>My Amazing ToDo-List App</h1>
                <p style={paraStyle}>The most simple and amazing Todo-List React App.</p>
                <TasksList/>
            </header>
        </div>
    );

}

ReactDOM.render(<App/>, document.getElementById("root"))