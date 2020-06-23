import React from "react";

function Note(props) {
    return <div className="noteContainer">
                <h1 className="noteTitle">{ props.title }</h1>
                <p className="noteContent">{ props.content }</p>
           </div>
}

export { Note };