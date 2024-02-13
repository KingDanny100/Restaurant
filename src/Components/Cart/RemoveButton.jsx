import React, { useContext } from "react";
import { FoodContext } from "../../DataFolder/Context/FoodContext"
import DeleteIcon from '@mui/icons-material/Delete';


const RemoveButton = ({item}) => {

    const { cart, removeFromCart } = useContext(FoodContext);


  const removeCartFunc = (id) => {
    console.log(id);
    removeFromCart(id);
  };

  return (
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
  );
};

export default RemoveButton;
