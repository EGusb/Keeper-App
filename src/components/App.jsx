import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import React, { useState } from "react";

function App() {
  const [notes, setNotes] = useState([
    { title: "Note title", content: "Note content" },
  ]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((noteItem, index) => {
        return <Note key={index} title={noteItem.title} content={noteItem.content} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
