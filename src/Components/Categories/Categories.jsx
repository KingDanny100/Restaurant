import React, { useContext, useState } from "react";
import "./Categories.css";
import { FoodContext } from "../../DataFolder/Context/FoodContext";

const Categories = () => {
  const [showCat, setShowCat] = useState(false);
  const { handleCategoryClick } = useContext(FoodContext);

  const handleShowCat = () => {
    setShowCat((prev) => !prev);
  };

  return (
    <section className="category_container">
      <div className="food_menu">
        <h3>Our Menu</h3>
      </div>
      <ul className="large_screenCate">
        
        <li onClick={() => handleCategoryClick("Drinks")}>Drinks</li>
        <li onClick={() => handleCategoryClick("Soups")}>Soups</li>
        <li onClick={() => handleCategoryClick("Food")}>Food</li>
        <li onClick={() => handleCategoryClick("Fries")}>Fries</li>
        <li onClick={() => handleCategoryClick("Meat")}>Meat</li>
        <li onClick={() => handleCategoryClick("Pepper Soup")}>Pepper Soup</li>
        <li onClick={() => handleCategoryClick("Rice")}>Rice</li>
        <li onClick={() => handleCategoryClick("Stew")}>Stew</li>
        <li onClick={() => handleCategoryClick("Sauce")}>Sauce</li>
        <li onClick={() => handleCategoryClick("Others")}>Others</li>
      </ul>
      
    </section>
  );
};

export default Categories;
