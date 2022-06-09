import React from "react";
import titulo from "./img/titulo.png";
import classes from "./App.module.css";

const TopBar = () => {
  return (
    <div>
      <nav className={classes.topBar}>
        <img src={titulo} className="App-logo" alt="logo" />
      </nav>
    </div>
  );
};

export default TopBar;
