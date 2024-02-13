import React, { createContext, useEffect, useReducer, useState } from "react";
import { MealsData, loadData } from "../MealsData";

export const FoodContext = createContext();

const initialState = {
  selectedCategory: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return { selectedCategory: action.payload };
    default:
      return state;
  }
};

export const FoodProvider = ({ children }) => {
  const [foodArray, setFoodArray] = useState(loadData);
  const [cart, setCart] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart)
      
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // let cartAmount = 0
    // if(cart.length > 0){
    //   for (let i = 0; i < cart.length; i++) {
    //     setCartTotal(cartAmount = cartAmount + cart[i].price)
    //   }
    // }
  }, [cart]);


  const handleCategoryClick = (category) => {
    dispatch({ type: "SELECT_CATEGORY", payload: category });
  };

  // useEffect(()=> {
  //   setFoodArray(initialMealData)
  // }, [])

  useEffect(() => {
    if (state.selectedCategory === "Drinks") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Drinks"));
      return;
    }
    if (state.selectedCategory === "Soups") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Soups"));
      return;
    }
    if (state.selectedCategory === "Rice") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Rice"));
      return;
    }
    if (state.selectedCategory === "Rice") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Rice"));
      return;
    }
    if (state.selectedCategory === "Stew") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Stew"));
      return;
    }
    if (state.selectedCategory === "Pepper Soup") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Pepper Soup"));
      return;
    }
    if (state.selectedCategory === "Sauce") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Sauce"));
      return;
    }
    if (state.selectedCategory === "Fries") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Fries"));
      return;
    }
    if (state.selectedCategory === "Meat") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Meat"));
      return;
    }
    if (state.selectedCategory === "Food") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Food"));
      return;
    }
    if (state.selectedCategory === "Others") {
      setFoodArray(MealsData.filter((meal) => meal.category === "Others"));
      return;
    } else {
      setFoodArray(MealsData.filter((meal) => meal.category === "Rice"));
      return;
    }
  }, [state]);

  const addToCart = (id) => {
    setCart((prevCart) => {
      for (let i = 0; i < prevCart.length; i++) {
        if (prevCart[i].id === id) {
          
          return [...prevCart];
        }
      }

      for (let i = 0; i < MealsData.length; i++) {
        if (MealsData[i].id === id) {
          // setCartTotal(prev => prev + MealsData[i].price)
          return [...prevCart, MealsData[i]];
        }
      }
    });
  };

  const removeFromCart = (foodId, itemNumber) => {
    // console.log(cart);
    setCartTotal( prev => {
      const newAmount = prev - (itemNumber * MealsData[foodId].price)
      return newAmount
    })
    setCart((prevCart) => prevCart.filter((item) => item.id !== foodId));
  };

  useEffect(() => {
    // localStorage.setItem("cart", JSON.stringify(cart));
    let cartAmount = 0
    if(cart.length > 0){
      for (let i = 0; i < cart.length; i++) {
        setCartTotal(cartAmount = cartAmount + cart[i].price)
      }
    }
  }, [addToCart, removeFromCart]);

 
  return (
    <FoodContext.Provider
      value={{
        foodArray,
        cart,
        cartTotal,
        setCartTotal,
        addToCart,
        removeFromCart,
        handleCategoryClick,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
