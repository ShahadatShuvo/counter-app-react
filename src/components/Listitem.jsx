import React from "react";

function ListItem() {
  const [itemArray, setItemArray] = React.useState([]);
  function clickHandler() {
    setItemArray((prevSate) => [...itemArray, `item ${prevSate.length + 1}`]);
  }
  const Answer = itemArray.map((item) => <p key={item}>{item}</p>);

  return (
    <div className="list--item">
      <div className="btn--area">
        <button onClick={clickHandler} className="btn">
          ADD ITEM
        </button>
      </div>
      {Answer}
    </div>
  );
}

export default ListItem;
