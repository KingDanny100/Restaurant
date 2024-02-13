import React, { useContext, useEffect, useState } from "react";
import "./FoodShow.css";
import { FoodContext } from "../../DataFolder/Context/FoodContext";
import Categories from "../Categories/Categories";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "./Button";

const FoodShow = () => {
  const { foodArray } = useContext(FoodContext);

  //  console.log(foodArray);
 

  

  return (
    <main className="food_section">
      <Categories />
      <div className="food_container">
        {foodArray.map((food) => {
          return (
            <div className="food_box" key={food.id}>
              {/* <div className="food_overlay" onClick={() => addToCartFunc(food.id)}>
                    {showMessage ? "Added" : "Add"}<ShoppingCartIcon />
                </div> */}
              <img src={food.image} alt="" />
              <p className="food_name">{food.meal}</p>
              <aside className="food_info">
                <p className="food_price">N{food.price}</p>
                <Button id={food.id}/>
              </aside>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default FoodShow;
