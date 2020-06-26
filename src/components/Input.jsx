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
        <input onChange={ handleInput } value={title} type="text" name="title" placeholder="TITLE"></input>
        <input onChange={ handleInput }  value={content} type="text" name="content" placeholder="CONTENT"></input>
        <button onClick= {() => {
            props.addItem(title, content);
            setTitle("");
            setContent("")
        }}
        >Add</button>
    </div>
    )
}

export default Input;