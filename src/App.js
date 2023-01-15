import React, { useState } from "react";
import background from "./backgrounds/tall_scotch_bottle.jpg";
import "./App.css";

const events = [
  {
    title: "Lorem ipsum 1",
    desc: "Lorem ipsum dolor sit amet",
    time: "02-05-2023",
  },
  {
    title: "Lorem ipsum 2",
    desc: "Lorem ipsum dolor sit amet",
    time: "02-05-2023",
  },
  {
    title: "Lorem ipsum 3",
    desc: "Lorem ipsum dolor sit amet",
    time: "02-05-2023",
  },
  {
    title: "Lorem ipsum 4",
    desc: "Lorem ipsum dolor sit amet",
    time: "02-05-2023",
  },
];

function Cell(item) {
  return <h1>{item.title}</h1>;
}

function App() {
  return (
    <div className="App-Bg-Div">
      <img src={background} className="App-bg" alt="bg" />
      <h1 className="App-title">Wedding Party</h1>
      <h1 className="App-list">
        {events.map((item, index) => (
          <h1 key={index} item={item}>
            {item.title}
          </h1>
        ))}
      </h1>
    </div>
  );
}

export default App;
