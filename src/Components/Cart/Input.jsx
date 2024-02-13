import React, { useContext, useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FoodContext } from "../../DataFolder/Context/FoodContext";
import DeleteIcon from '@mui/icons-material/Delete';


const Input = ({ item }) => {
  const [itemNumber, setItemNumber] = useState(1);
  const { cart, removeFromCart, cartTotal, setCartTotal } = useContext(FoodContext);


  const removeCartFunc = (id) => {
    removeFromCart(id, itemNumber);
  };

  const handleDecrease = () => {
    setItemNumber((prev) => (prev === 1 ? 1 : prev - 1));
    setCartTotal((prev) => {
      if (itemNumber > 1) {
        return prev - item.price;
      } else {
        return prev;
      }
    });
  };

  const handleIncrease = () => {
    setItemNumber((prev) => (prev === 10 ? 10 : prev + 1));
    setCartTotal((prev) => {
      if (itemNumber < 10) {
        return prev + item.price;
      } else {
        return prev;
      }
    });
  };

  return (
    <>
      <div className="price_input">
        <span className="arrow_icons left">
          <aside
            className={itemNumber === 1 ? "gray" : "coloured"}
            onClick={handleDecrease}
          >
            <RemoveIcon sx={{ fontSize: 30 }} />
          </aside>
        </span>
        <span className="item_number">{itemNumber}</span>
        <span className="arrow_icons right">
          <aside
            onClick={handleIncrease}
            className={itemNumber === 10 ? "gray" : "coloured"}
          >
            <AddIcon sx={{ fontSize: 30 }} />
          </aside>
        </span>
      </div>
      <button
      type="button"
      className="cart_button"
      onClick={() => removeCartFunc(item.id)}
    >
      <aside>Remove</aside>
      <aside>
        <DeleteIcon />
      </aside>
    </button>
    </>
  );
};

export default Input;
