import logo from "./logo.svg";
import background from "./backgrounds/tall_scotch_bottle.jpg";
import "./App.css";

function App() {
  return (
    <div className="App" className="App-Bg-Div">
      <img src={background} className="App-bg" />
      <h1 className="App-title">Wedding Party</h1>
    </div>
  );
}

export default App;
