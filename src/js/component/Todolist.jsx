import React, {useState} from "react";

const Todolist = () => {

    const [ inputValue, setInputValue ] = useState("")
    const [ todos, setTodos ] = useState([])

    return (
        <div className="container">
            <h1> To Do List </h1>
            <ul>
                <li>
                    <input 
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKey={(e) => {
                        if (e.key === "Enter") {
                            setTodos(todos.concat(inputValue));
                            setInputValue("");
                        }
                    }}
                    placeholder="What do you need to remember to do?"/>
                </li>
                {todos.map ((t) => (
                <li>
                    {t} <i class="bi bi-trash3-fill"></i>
                </li>
                ))}
                <li>Make a cake</li>
            </ul>
            <div>
            1 tarea
            </div>
        </div>
    )
};



export default Todolist;