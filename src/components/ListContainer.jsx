import React from "react";
import ListItem from "./ListItem";

const ListContainer = ({filterTodos, setItemList, itemList }) => {
  return (
    <div>
      <ul>
        {filterTodos.map((item, index) => {
          return (
            <ListItem
              key={index}
              setItemList={setItemList}
              itemList={itemList}
              id={index}
              item={item}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ListContainer;
