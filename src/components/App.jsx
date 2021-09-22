/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import TakeInput from "./InputText";
import ListContainer from "./ListContainer";
import Footer from "./Footer";

function App() {
  const [itemList, setItemList] = useState([]);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("All");
  const [filterTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []);

  useEffect(() => {
    changeStatus();
    countItem();
    saveTodos();
  }, [itemList, status]);

  function add(item) {
    setItemList((prevItems) => {
      return [...prevItems, item];
    });
  }

  function saveTodos() {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }

  function getTodos() {
    if (localStorage.getItem("itemList") === null) {
      localStorage.setItem("itemList", JSON.stringify([]));
    } else {
      let get = localStorage.getItem("itemList", JSON.stringify(itemList));
      setItemList(JSON.parse(get));
    }
  }

  function changeStatus() {
    switch (status) {
      case "Active":
        setFilterTodos(itemList.filter((item) => item.isCompleted === false));
        break;
      case "Completed":
        setFilterTodos(itemList.filter((item) => item.isCompleted === true));
        break;
      case "All":
        setFilterTodos(itemList);
        setCount(count + 1);
        break;
      default:
        setFilterTodos(itemList);
        break;
    }
  }

  function countItem() {
    setCount(itemList.filter((item) => item.isCompleted === false).length);
  }

  return (
    <>
      <div className="header helper">
        <h1>TODO</h1>
        <img src="/images/icon-sun.svg" alt="moon" />
      </div>
      <TakeInput add={add} />
      <div className="container">
        <ListContainer
          filterTodos={filterTodos}
          setItemList={setItemList}
          itemList={itemList}
        />
        <Footer
          status={status}
          setItemList={setItemList}
          setStatus={setStatus}
          itemList={itemList}
          count={count}
        />
      </div>
    </>
  );
}

export default App;
