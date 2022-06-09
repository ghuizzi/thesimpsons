import React, { Component } from "react";
import classes from "./App.module.css";
import CharacterPreview from "./CharacterPreview";
import CharacterDetails from "./CharacterDetails";
import Character from "./Character";
import TopBar from "./TopBar";

class App extends Component {
  state = {
    character: Character,
    currentPreviewImage: "./img/gorgon.png",
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopBar />
        </header>
        <div className={classes.MainContainer}>
          <div className={classes.CharacterPreview}>
            <CharacterPreview
              currentPreviewImage={this.state.currentPreviewImage}
            />
          </div>
          <div className={classes.CharacterData}>
            <CharacterDetails data={this.state.character} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
