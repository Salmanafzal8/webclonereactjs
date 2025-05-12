import React from "react";
import { FaSuperpowers } from "react-icons/fa6";
import ChatButton from "../ChatButton";
import "./index.css";
import ContainedButton from "../ContainedButton";
import logoimage from "../../assets/logoimage.png"
const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="nav-list">
          <ul className="nav-links">
            <li>
            <a href="/products">
    <img src={logoimage} alt="Blog Logo" style={{ height: "25px" }} />
  </a>
            </li>
            <li>
              <a href="/about">WHY SOLAR</a>
            </li>
            <li>
              <a href="/contact">FAQ</a>
            </li>
            <li>
              <a href="/contact">MAKE A REFERAL</a>
            </li>
            <ChatButton />
          </ul>
        </div>

        <div className="nav-button">
        <button
          style={{
            fontSize : "10pX",
            opacity : "70%",
            backgroundColor: " rgb(36, 36, 36)",
            color: "white",
            padding: "00px 40px",
            border: "1px solid red",
          }}
        >
          ENTER ZIP CODE
        </button>
        <ContainedButton text={"GET QUOTE"} />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
