import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from "./components/Header";
import { Note } from "./components/Note";
import { Footer } from "./components/Footer";


ReactDOM.render(
  <div className="container">
    <Header />

    <Note 
      title="Hey" 
      content="George is Cool"
    />
    
    <Footer />
</div>,
  document.querySelector("#root")
);
