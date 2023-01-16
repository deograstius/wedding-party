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

const WEDDING_PARTY_TYPES = {
  GROOM: 0,
  BRIDE: 1,
};

const WEDDING_PARTY = WEDDING_PARTY_TYPES.GROOM;

function getClassNames() {
  switch (WEDDING_PARTY) {
    case WEDDING_PARTY_TYPES.BRIDE:
      return {
        background: "brides-party-bg",
        title: "brides-party-title",
      };
    default:
      return {
        background: "grooms-party-bg",
        title: "grooms-party-title",
      };
  }
}

function App() {
  const classNames = getClassNames();
  return (
    <div className={classNames.background}>
      <h1 className={classNames.title}>Wedding Party</h1>
      <div className="App-list">
        {events.map((item, index) => (
          <p key={index} item={item}>
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
