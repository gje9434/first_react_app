import React from "react";

function Note(props) {
    return <div className="noteContainer">
                <h1 className="noteTitle">{ props.title }</h1>
                <p className="noteContent">{ props.content }</p>
                <button onClick={() => {
                    return props.deleteNote(props.id)
                }} className="delete-note">DELETE</button>
           </div>
}

export default Note;