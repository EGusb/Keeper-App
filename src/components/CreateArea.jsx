import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function addNote(event) {
    if (note.title !== "" || note.content !== "") {
      props.onAdd(note);

      setNote({
        title: "",
        content: "",
      });
    }

    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Write a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
        />
        <button onClick={addNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
