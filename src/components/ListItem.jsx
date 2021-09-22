import React from "react";

const ListItem = ({ item, id, setItemList, itemList }) => {
  function handleClicked(id) {
    // eslint-disable-next-line array-callback-return
    setItemList(
      itemList.map((i, index) => {
        if (index === id) {
          return {
            ...i,
            isCompleted: !i.isCompleted,
          };
        }
        return i;
      })
    );
    
  }

  return (
    <li
      onClick={() => handleClicked(id)}
      className={item.isCompleted ? "cancel-text" : ""}
    >
      {item.item}
    </li>
  );
};

export default ListItem;
