import logo from "./logo.svg";
import groom_background from "./backgrounds/tall_scotch_bottle.jpg";
import bride_background from "./backgrounds/champagne.jpg";
import "./App.css";

const WEDDING_PARTY_TYPES = {
  GROOM: 0,
  BRIDE: 1,
};

const WEDDING_PARTY = WEDDING_PARTY_TYPES.BRIDE;

function getBackground() {
  switch (WEDDING_PARTY) {
    case WEDDING_PARTY_TYPES.BRIDE:
      return bride_background;
    default:
      return groom_background;
  }
}

function getBackgroundClassName() {
  switch (WEDDING_PARTY) {
    case WEDDING_PARTY_TYPES.BRIDE:
      return "poppy-App-bg";
    default:
      return "App-bg";
  }
}

function App() {
  return (
    <div className="App" className="App-Bg-Div">
      <img src={getBackground()} className={getBackgroundClassName()} />
      <h1 className="App-title">Wedding Party</h1>
    </div>
  );
}

export default App;
