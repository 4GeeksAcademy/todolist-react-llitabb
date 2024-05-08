import React, {useState} from "react";

const Todolist = () => {


    return (
        <div className="container">
            <h1> To Do List</h1>
            <ul>
                <li><input type="text" placeholder="What do you need to remember to do"></input>
                </li>
                <li>Make the bed <i class="fa-solid fa-x"></i></li>
            </ul>
            <div>
            1 tarea
            </div>
        </div>
    )
};



export default Todolist;