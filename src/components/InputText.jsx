import React, { useState } from "react";

const TakeInput = ({ add }) => {
  const [text, setText] = useState({
    item: "",
    isCompleted: "",
  });

  function handleText(event) {
    const txt = event.target.value;
    setText({
      item: txt,
      isCompleted: false
    });
  }

  function addText(event) {
    add(text);
    setText({
      item: "",
      isCompleted: ""
    });
    event.preventDefault();
  }

  function keyHandler(e) {
    if (e.key === "Enter") {
      addText(e)
    }
  }

  return (
    <div className="input-helper helper">
      <form>
        <input
          onChange={handleText}
          onKeyPress={keyHandler}
          type="text"
          name="taskItem"
          placeholder="Create a new todo..."
          value={text.item}
        />
      </form>
      <button onClick={(event)=>addText(event)} className="btn">
        +
      </button>
    </div>
  );
};

export default TakeInput;
