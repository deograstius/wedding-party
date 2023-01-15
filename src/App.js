import React, { useState } from "react";
import background from "./backgrounds/tall_scotch_bottle.jpg";
import groom_background from "./backgrounds/tall_scotch_bottle.jpg";
import bride_background from "./backgrounds/champagne.jpg";
import "./App.css";

const TITLE = "Wedding Party";

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

function Cell(event) {
  console.log(event.item.title);
  return (
    <div className="App-cell">
      <h3 className="App-cell-title">{event.item.title}</h3>
      <p className="App-cell-desc">{event.item.desc}</p>
      <p className="App-cell-datetime">{event.item.time}</p>
    </div>
  );
}

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
    <div className="App-Bg-Div">
      <img
        src={getBackground()}
        className={getBackgroundClassName()}
        alt="bg"
      />
      <h1 className="App-title">{TITLE}</h1>
      <h1 className="App-list">
        {events.map((event, index) => (
          <Cell Key={index} item={event}></Cell>
        ))}
      </h1>
    </div>
  );
}

export default App;
