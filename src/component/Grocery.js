import React, { useState } from "react";
import image from "./image.png";

export const Grocery = () => {
  const [inputData, setInputData] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [items, setItems] = useState([]);
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [IsEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === IsEditItem) {
            return {
              ...elem,
              name: inputData,
              unit: unit,
              price: price * unit,
            };
          }
          return elem;
        })
      );

      setToggleSubmit(true);
      setInputData("");
      setPrice("");
      setUnit("");
      setIsEditItem(null);
    } else {
      const allItems = {
        id: new Date().getTime().toString(),
        name: inputData,
        unit: unit,
        price: price * unit,
      };
      setItems([...items, allItems]);
      setInputData("");
      setPrice("");
      setUnit("");
    }
  };

  // delete item

  const TOTAL = items.reduce((count, item) => {
    count += item.price * 1;
    return count;
  }, 0);

  const deleteItem = (index) => {
    const updateItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updateItems);
  };

  //edit item
  const editItem = (id) => {
    let newEditItem = items.find((elem) => {
      return elem.id === id;
    });

    setToggleSubmit(false);
    setInputData(newEditItem.name);
    setUnit(newEditItem.unit);
    setPrice(newEditItem.price);
    setIsEditItem(id);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={image} alt="shopping images" />
            <figcaption> Grocery Shopping </figcaption>
          </figure>
          <form className="addItems">
            <input
              className="kk1"
              type="text"
              placeholder="enter item name"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <input
              className="kk1"
              type="text"
              placeholder="enter units"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
            <input
              className="kk1"
              type="text"
              placeholder="enter unit price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {toggleSubmit ? (
              <i
                className="fa fa-plus add-btn"
                title="Add Item"
                onClick={addItem}
              ></i>
            ) : (
              <i
                className="fa fa-edit add-btn"
                title="Update Item"
                onClick={addItem}
              ></i>
            )}
          </form>

          <div className="showItems">
            <div className="eachItem1">
              <h3> Item name</h3>
              <h3> Units</h3>
              <h3>Price</h3>
              <h3>Edit</h3>
            </div>
          </div>


          <div className="showItems">
            {items.map((elem) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3> {elem.name}</h3>
                  <h3> {elem.unit}</h3>
                  <h3>{elem.price} </h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(elem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grandTotal">
            <h2>Grand Total:{TOTAL}</h2>
          </div>
        </div>
      </div>
    </>
  );
};
