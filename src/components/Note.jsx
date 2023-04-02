import React from "react";

function Note() {
  let result = [];

  for (let i = 1; i <= 4; i++) {
    result.push(
      <div className="note">
        <h1>Title for Note #{i}</h1>
        <p>Content for Note#{i}</p>
      </div>
    );
  }

  return <div>{result}</div>;
}

export default Note;
