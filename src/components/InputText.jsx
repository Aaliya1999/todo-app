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

  function addText() {
    add(text);
    setText({
      item: "",
      isCompleted: ""
    });
  }

  return (
    <div className="input-helper helper">
      <form>
        <input
          onChange={handleText}
          type="text"
          name="taskItem"
          placeholder="Create a new todo..."
          value={text.item}
        />
      </form>
      <button onClick={addText} className="btn">
        +
      </button>
    </div>
  );
};

export default TakeInput;
