import React from "react";
import "./LocationSection.css";
import image1 from "../../Rest_images/Main/back2.jpg";
import LocationOnIcon from '@mui/icons-material/LocationOn';

const LocationSection = () => {
  return (
    <main className="home_container">
      <div className="text">
        <h3>Visit Us @</h3>
        <p><span><LocationOnIcon /></span>No 16/17 Saidu Abbas Avenue Guzape, Abuja</p>
      </div>
      <img src={image1} alt="" />
    </main>
  );
};

export default LocationSection;
