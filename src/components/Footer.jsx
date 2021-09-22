/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";

const Footer = ({ status, count, setStatus, setItemList, itemList }) => {
  const [all, setall] = useState(true);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  function clearCompleted() {
    setItemList(itemList.filter((item) => item.isCompleted === false));
  }

  function selected(value) {
    switch (value) {
      case "Active":
        setActive(true);
        setCompleted(false);
        setall(false);
        break;
      case "Completed":
        setActive(false);
        setCompleted(true);
        setall(false);
        break;
      default:
        setActive(false);
        setCompleted(false);
        setall(true);
        break;
    }
  }
  function clicked(event) {
    const value = event.target.value;
    setStatus(value);
    selected(value);
  }

  return (
    <div className="helper footer">
      <p>{count} items left</p>
      <div>
        <button
          onClick={clicked}
          className={ all ? "footerdiv selected" : "footerdiv"}
          // style={all && styleBtn()}
          value="All"
        >
          All
        </button>
        <button
          onClick={clicked}
          // style={active && styleBtn()}
          className={ active ? "footerdiv selected" : "footerdiv"}
          value="Active"
        >
          Active
        </button>
        <button
          onClick={clicked}
          // style={completed && styleBtn()}
          className={ completed ? "footerdiv selected" : "footerdiv"}
          value="Completed"
        >
          Completed
        </button>
      </div>
      <button
        onClick={clearCompleted}
        className="footerdiv"
        value="Clear Completed"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
