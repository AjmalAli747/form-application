import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }
  return (
   <>
     <header>
      <div className="logo">
        <img
          src="https://trimitiy.com/assets/images/services/logo-design/Best-Logo-Designing-agency-in-Pune-1.jpg"
          alt=""
        />
      </div>
      <nav className={click ? "navbar active" : "navbar"}>
        <ul>
          <li>
            <a href="home" onClick={handleClick}>Home</a>
          </li>
          <li>
            <a href="menu" onClick={handleClick}>menu</a>
          </li>
          <li>
            <a href="about" onClick={handleClick}>about</a>
          </li>
          <li>
            <a href="contact" onClick={handleClick}>contact</a>
          </li>
          <li>
            <a href="informaction" onClick={handleClick}>informaction</a>
          </li>
        </ul>
      </nav>
      <div className="bars">
        <i class="fa-solid fa-bars" onClick={handleClick}></i>
      </div>
    </header>
   </>
  );
};

export default App;
