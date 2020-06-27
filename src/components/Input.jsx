import React, { useState } from "react";

var Input = (props) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleInput(event) {
        let {name, value} = event.target;
        name === "title" ? setTitle(value) : setContent(value);
    }

    return (
    <div className="form">
        <input  className="add-title" 
            onChange={ handleInput } 
            value={title} type="text" 
            name="title" 
            placeholder="Add title...">
        </input>
        <input  className="add-content" 
            onChange={ handleInput }  
            value={content} type="text" 
            name="content" 
            placeholder="Add content...">
        </input>
        <button className="add-note" onClick= {() => {
            props.addItem(title, content);
            setTitle("");
            setContent("")
        }}
        >Add</button>
    </div>
    )
}

export default Input;