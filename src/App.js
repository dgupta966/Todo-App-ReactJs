import React, { useState } from "react";
import List from "./List";
import "./styles.css";

export default function App() {
  const [currentitem, setCurrentItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const inputChangeHandler = (e) => {
    // console.log(e.target.value);
    setCurrentItem(e.target.value);
  };
  const updateItemList = () => {
    if (currentitem !== "") {
      setItemList([...itemList, { item: currentitem, key: Date.now() }]);
      setCurrentItem("");
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
  };
  // console.log("Items in list" + itemList);
  return (
    <div className="App">
      <div className="heading">Todo App @deepakgupta</div>
      <div className="wrapper">
        <div className="input-wrapper">
          <input
            type="text"
            value={currentitem}
            onChange={inputChangeHandler}
          />
          <button onClick={updateItemList}>+</button>
        </div>
        {isSubmit && currentitem === "" && (
          <div className="err">* Please enter item</div>
        )}
        <List itemList={itemList} updateItemList={setItemList} />
      </div>
    </div>
  );
}
