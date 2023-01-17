import React, { useState } from "react";
import "./App.css";
import * as XLSX from "xlsx";
import * as eventData from "./data/EventData.xlsx";

const TITLE = "Wedding Party";

// const events = [
//   {
//     key: 0,
//     title: "Lorem ipsum 1",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 1,
//     title: "Lorem ipsum 2",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 2,
//     title: "Lorem ipsum 3",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 3,
//     title: "Lorem ipsum 4",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 0,
//     title: "Lorem ipsum 1",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 1,
//     title: "Lorem ipsum 2",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 2,
//     title: "Lorem ipsum 3",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 3,
//     title: "Lorem ipsum 4",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 0,
//     title: "Lorem ipsum 1",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 1,
//     title: "Lorem ipsum 2",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 2,
//     title: "Lorem ipsum 3",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
//   {
//     key: 3,
//     title: "Lorem ipsum 4",
//     desc: "Lorem ipsum dolor sit amet",
//     time: "02-05-2023",
//   },
// ];

const WEDDING_PARTY_TYPES = {
  GROOM: 0,
  BRIDE: 1,
};

const WEDDING_PARTY = WEDDING_PARTY_TYPES.GROOM;

function getDynamicClassNames() {
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

function getClassNames() {
  return {
    backgrounddiv: "app-backgroundg-div",
    listView: "App-list",
  };
}

function Cell(event) {
  console.log(event.item);
  return (
    <div className="App-cell">
      <h3 className="App-cell-title">{event.item.Event}</h3>
      <p className="App-cell-desc">{event.item.Description}</p>
      <p className="App-cell-datetime">{event.item.DateTilme}</p>
    </div>
  );
}

async function getLocalData() {
  return new Promise((resolve, reject) => {
    fetch(eventData)
      .then((resp) => resp.arrayBuffer())
      .then((buff) => {
        var workbook = XLSX.read(buff);
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        var jsonData = XLSX.utils.sheet_to_json(ws);
        resolve(jsonData);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
}

function App() {
  const [events, setEvents] = useState([]);
  const dynamicclassNames = getDynamicClassNames();
  const staticclassnames = getClassNames();

  getLocalData().then((jsonData) => {
    if (events.length === 0) {
      console.log(jsonData);
      setEvents(jsonData);
    }
  });

  return (
    <div className={dynamicclassNames.background}>
      <h1 className={dynamicclassNames.title}>{TITLE}</h1>
      <div className={staticclassnames.listView}>
        {events.map((event, index) => (
          <Cell key={index} item={event}></Cell>
        ))}
      </div>
    </div>
  );
}

export default App;
