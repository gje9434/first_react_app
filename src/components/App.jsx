import React, { Fragment, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Input from "./Input";
import uuid from "uuid-random";
import Note from "./Note";


var App = () => {

    const [notes, setNotes] = useState([]);

    var addNote = (title, content) => {
        setNotes(prevItems => {
            let uniqueId = uuid();
            let newNote = {
                key: uniqueId,
                id: uniqueId,
                title: title,
                content: content
            }
            console.log(notes)
            return[...prevItems, newNote]
        })
    }

    var deleteNote = (id) => {
        setNotes(prevItems => {
            return prevItems.filter(item => {
                return item.id !== id;
            })
        })
    }

    const notesList = notes.map(note => {
        return <Note 
            key={note.key}
            id={note.id}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
            />
        })

    return(    
        <Fragment>
            <Header />
            <Input addItem={addNote}/>
            <div className="content">
                {notesList}
            </div>
            <Footer />
        </Fragment>
    );
}

export default App;