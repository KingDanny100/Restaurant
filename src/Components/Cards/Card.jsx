import React, { useEffect, useRef, useState } from "react";
import "./Card.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RoomServiceIcon from "@mui/icons-material/RoomService";


const Card = () => {
  const [isVisible, setIsVisible] = useState(false)
  const targetRef = useRef(null)

  useEffect(()=> {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting){
        setIsVisible(true)
        observer.unobserve(entry.target)
      }
    }, {threshold: 0.05})

    if(targetRef.current){
      observer.observe(targetRef.current)
    }

    return () => {
      if(targetRef.current){
        observer.unobserve(targetRef.current)
      }
    }

  }, )
  
  return (
    <div className={`card_container ${isVisible ? 'visible' : ''}`} ref={targetRef}>
      <h2>How To Order</h2>
      <div className="card-house">
        <div className="card_details">
          <RestaurantMenuIcon sx={{ fontSize: 150 }} />
          <div className="card_info">
            <span>1</span>Choose A Meal
          </div>
        </div>
        <div className="card_details">
          <LocationOnIcon sx={{ fontSize: 150 }} />
          <div className="card_info">
            <span>2</span>Choose A Location
          </div>
        </div>
        <div className="card_details">
          <RoomServiceIcon sx={{ fontSize: 150 }} />
          <div className="card_info">
            {" "}
            <span>3</span>Get Your Meal Delivered
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
