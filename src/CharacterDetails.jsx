import React from "react";
import gorgon from "./img/gordon.png";
import berns from "./img/berns.png";
import gatos from "./img/gatos.png";
import classes from "./App.module.css";
const CharacterDetails = (props) => {
  const Options = props.data.characterOptions.map((item, pos) => {
    const classArr = [classes.CharacterImage];
    if (pos === 0) {
      classArr.push(classes.SelectedCharacterImage);
    }
    return (
      <img
        key={pos}
        className={classes.CharacterImage}
        src={item.pic}
        alt={item.styleName}
      />
    );
  });
  console.log(props.data);
  return (
    <div>
      <h1 className={classes.CharacterTittle}>{props.data.tittle}</h1>
      <p className={classes.CharacterDescription}>{props.data.description}</p>
      <h3 className={classes.SectionHeading}>Select Character</h3>
      <div>
        <img
          className={[
            classes.CharacterImage,
            classes.SelectedCharacterImage,
          ].join(" ")}
          src={gorgon}
          alt=""
        />
        <img className={classes.CharacterImage} src={berns} alt="" />
        <img className={classes.CharacterImage} src={gatos} alt="" />
        <img className={classes.CharacterImage} src={gorgon} alt="" />
      </div>
      <h3 className={classes.SectionHeading}>Features</h3>
      <div>
        <button
          className={[classes.FeatureItem, classes.SelectedFeatureItem].join(
            " "
          )}
        >
          Effect
        </button>
        <button className={classes.FeatureItem}>Favorite</button>
      </div>
    </div>
  );
};

export default CharacterDetails;
