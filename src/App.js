import classes from "./App.module.css";
import titulo from "./img/titulo.png";

import CharacterPreview from "./CharacterPreview";
import CharacterDetails from "./CharacterDetails";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className={classes.topBar}>
          <img src={titulo} className="App-logo" alt="logo" />
        </nav>
      </header>
      <div className={classes.MainContainer}>
        <div className={classes.CharacterPreview}>
          <CharacterPreview />
        </div>
        <div className={classes.CharacterData}>
          <CharacterDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
