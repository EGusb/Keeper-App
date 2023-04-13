import React, { useState } from "react";
import AddTaskIcon from "@mui/icons-material/AddTask";
import Fab from "@mui/material/Fab";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  function expand() {
    setExpanded(true);
  }
  
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
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
          />
        )}
        <textarea
          name="content"
          placeholder="Write a note..."
          rows={isExpanded ? 3 : 1}
          onChange={handleChange}
          value={note.content}
          onClick={expand}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={addNote}>
            <AddTaskIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
