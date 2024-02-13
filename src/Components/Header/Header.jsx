import React, { useEffect, useState } from "react";
import "./Header.css";

const headInfo = [
  {
    heading: "Tasty And Delicious Meals",
    text: "Experience our chef's artistry in every dish",
  },
  {
    heading: "Taste The Elegance",
    text: "Culinary journey where every dish is a masterpiece",
  },
  {
    heading: "Indulge Your Senses",
    text: "Elevate your dining experience with our exquisite menu",
  },
];

const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headInfo.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [headInfo.length]);

  return (
    <header className="header_container">
      <div className="info_text">
        {headInfo.map((data, index) => {
          return (
            <div
              className={`slide-text ${index === currentIndex ? "active" : ""}`}
              key={index}
            >
              <aside className="style_head">
                <h3>{data.heading}</h3>
              </aside>
              <p>{data.text}</p>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
