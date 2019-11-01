import React from "react";
import logo from "./react.svg";
import "./Hero.css";

export default () => {
  return (
    <div className="Hero">
      <div className="Hero-header">
        <img src={logo} className="Hero-logo" alt="logo" />
        <h2>SSR-React</h2>
        <h3>My Todos</h3>
      </div>
    </div>
  );
};
