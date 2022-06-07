import React from "react";

import classes from "./CharacterPreview.css";

import maggie from "./img/maggie.png";
const CharacterPreview = (props) => {
  return (
    <div className={classes.CharacterPreview}>
      <img src={maggie} alt="character" />
      <div>{/* <p>{`${new Date().getEffect()} `}</p> */}</div>
      <div>
        <i class="fa-solid fa-heart"></i>
      </div>
    </div>
  );
};

export default CharacterPreview;
