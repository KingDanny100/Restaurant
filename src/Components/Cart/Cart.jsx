import React, { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../DataFolder/Context/FoodContext";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import "./Cart.css";
import Footer from "../Footer/Footer";
import RemoveButton from "./RemoveButton";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { ShoppingCart } from "@mui/icons-material";

const Cart = () => {
  const { cart, cartTotal } = useContext(FoodContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="cart_container">
        {cart.length === 0 ? (
          <aside className="newPara">
            <span>
              <ShoppingCart sx={{ fontSize: 60 }} />
            </span>
            <span className="cart_span">Your Cart Is Empty</span>
          </aside>
        ) : (
          <section className="cart_body_section">
            <h2>
              Your Cart
              <ShoppingCart sx={{ fontSize: 30 }} />
            </h2>
            <section className="cart_section">
              {cart.map((item) => {
                return (
                  <div className="cart_box" key={item.id}>
                    <aside className="cart_image">
                      <img src={item.image} alt="Image of item" />
                    </aside>
                    <aside className="cart_info">
                      <h3>{item.meal}</h3>
                      <p>Price: {item.price}</p>
                      <div className="other_data">
                        <Input item={item} />
                        {/* <RemoveButton item={item} /> */}
                      </div>
                    </aside>
                    {/* <aside>{cartTotal}</aside> */}
                  </div>
                );
              })}
            </section>
          </section>
        )}
        {cart.length > 0 && (
          <div className="total_price">
            <h3>CART SUMMARY</h3>
            <aside className="sub_total">
              <p>Subtotal</p>
              <p>NGN{cartTotal}</p>
            </aside>
            <button>CHECKOUT({`NGN${cartTotal}.00`})</button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
