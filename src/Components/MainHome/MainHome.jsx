import React from "react";
import Header from "../Header/Header";
import FoodShow from "../FoodShow/FoodShow";
import Footer from "../Footer/Footer";
import Home from "../Location/LocationSection";
import Card from "../Cards/Card";

const MainHome = () => {
  return (
    <>
      <Header />
      
      <FoodShow />
      <Card />
      <Home />
      <Footer />
    </>
  );
};

export default MainHome;
