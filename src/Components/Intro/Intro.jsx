import React, { useEffect, useState } from "react";
// import "./Intro.css";
import back1 from "../../Rest_images/Main/back2.jpg";
import back2 from "../../Rest_images/Main/back5.jpg";
import back3 from "../../Rest_images/Main/back3.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import logo from "../../Rest_images/Logos/logo.png"

const Intro = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const imageArr = [back1, back2, back3];

  useEffect(() => {
    const handleInterval = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % imageArr.length);
    }, 7000);

    return () => clearInterval(handleInterval);
  }, [imageIndex]);

  const containerStyle = {
    backgroundImage: `linear-gradient(rgb(0,0,0), rgb(0,0,0), black), url(${imageArr[imageIndex]})`,
  };

  return (
    <main className="intro_container" style={containerStyle}>
        <h1>Hello</h1>
        <img className="logo" src={logo} alt="" />
        <h3>Tasty & Delicious Foods At Your Doorstep</h3>
        <button type="button" className="introBtn"><span>Continue</span> <span><ArrowForwardIcon /></span></button>
      {/* <div className="overlay">
        
        <h3>Tasty & Delicious Foods At Your Doorstep</h3>
        <button type="button" className="introBtn"><span>Continue</span> <span><ArrowForwardIcon /></span></button>
      </div> */}
    </main>
  );
};

export default Intro;
