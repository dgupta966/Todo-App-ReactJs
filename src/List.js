import React from "react";
import "./List.css";
const List = (props) => {
  console.log(props);
  const deleteHandler = (key) => {
    console.log(key);
    const newList = props.itemList.filter((k) => {
      return k.key !== key;
      //k.key !== key -> it checks all items except
      //- the item which we want to delete
    });
    console.log("New List ", newList);
    props.updateItemList(newList);
  };
  return (
    <div className="list-wrapper">
      {props.itemList.map((itemObj) => {
        return (
          <div className="list-item">
            <div className="items">{itemObj.item}</div>
            <div>
              <button onClick={() => deleteHandler(itemObj.key)}>x</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
