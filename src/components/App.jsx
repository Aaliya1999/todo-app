/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import TakeInput from "./InputText";
import ListContainer from "./ListHolder";
import Footer from "./ListFooter";

function App() {
  const [inputText, setText] = useState("");
  const [listItem, setListItem] = useState([
    {
      id: "",
      item: "",
      completed: false
    }
  ]);

  function addItem(event, text) {
    event.preventDefault();
    const txt = text;
    setText("");
    return (
      setListItem(
        [
          ...listItem,
          listItem.item=txt
        ]
      )
    );
  }

  return (
    <>
      <div className="header helper">
        <h1>TODO</h1>
        <img src="/images/icon-moon.svg" alt="moon" />
      </div>
      <TakeInput setText={setText} inputText={inputText} addItem={addItem} />
      <div className="container">
        <ListContainer listItem={listItem} />
        <Footer />
      </div>
    </>
  );
}

export default App;
