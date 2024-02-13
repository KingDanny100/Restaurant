import React, { useContext, useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";
import { FoodContext } from "../../DataFolder/Context/FoodContext";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(FoodContext);
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const cartNavigate = () => {
    setShowMenu(false);
    navigate("/cart");
  };

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <nav className="nav_container">
        <div className="logo">
          <span className="top">De'LEGEND</span>
          <span className="bottom">RESTAURANT</span>
        </div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>

          <li>Categories</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <aside className="menu_bar" onClick={handleShowMenu}>
          <MenuIcon sx={{ fontSize: 40 }} />
        </aside>
        <button type="button" onClick={cartNavigate}>
          <span>
            <ShoppingCartIcon />
          </span>{" "}
          <span className="noShow">Cart</span>
          <span>{cart.length}</span>
        </button>
      </nav>
      {showMenu && (
        <div className="menu_div">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>

            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="div_button" type="button" onClick={cartNavigate}>
            <span>
              <ShoppingCartIcon />
            </span>{" "}
            <span>Cart</span>
            <span>({cart.length})</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
