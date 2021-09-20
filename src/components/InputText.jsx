import React from 'react';

const TakeInput = ({addItem,setText,inputText}) => {
    

    function changeInput(event) {
        setText(event.target.value);
    }

    return (
        <div className="input-helper helper">
        <form>
          <input
            onChange={changeInput}
            type="text"
            name="taskItem"
            placeholder="Create a new todo..."
            value={inputText}
          />
        </form>
        <button onClick={(event)=>addItem(event,inputText)} className="btn">+</button>
      </div>
    );
}

export default TakeInput;