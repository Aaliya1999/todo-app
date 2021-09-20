import React from "react";
import ListItem from "./ListItem";

const ListContainer = ({listItem}) => {
    return (
        <div>
          <ul>
          {
            listItem.map((item,index)=> {
              return (
                <ListItem key={index} item={item} />
              );
            })
          }
          </ul>
        </div>
    );
}

export default ListContainer;