import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CArtContext";
import { ThemeContext } from "../context/ThemeContext";
import Wishlist from "./Wishlist";

const Navbar = () => {
  const { isAuthorized, login, logout } = useContext(AuthContext);
  const { buy } = useContext(CartContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthorized) logout();
          else login("R", "Z");
        }}
      >
        {isAuthorized ? "Logout" : "Login"}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}>
        {`make ${isLight ? "Dark" : "Light" }`}
      </button>
      {isAuthorized && <Wishlist />}
    </div>
  );
};

export default Navbar;
