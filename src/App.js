import React, { useState } from "react";
import "./App.css";
import * as XLSX from "xlsx";
import * as eventData from "./data/EventData.xlsx";

const TITLE = "Wedding Party";

const WEDDING_PARTY_TYPES = {
  GROOM: 0,
  BRIDE: 1,
};

const WEDDING_PARTY = WEDDING_PARTY_TYPES.BRIDE;

function getDynamicClassNames() {
  switch (WEDDING_PARTY) {
    case WEDDING_PARTY_TYPES.BRIDE:
      return {
        background: "brides-party-bg",
        title: "brides-party-title",
        cell: "brides-cell",
        cellTitle: "brides-cell-title",
        cellDesc: "brides-cell-desc",
        cellDateTime: "brides-cell-datetime",
      };
    default:
      return {
        background: "grooms-party-bg",
        title: "grooms-party-title",
        cell: "grooms-cell",
        cellTitle: "grooms-cell-title",
        cellDesc: "grooms-cell-desc",
        cellDateTime: "grooms-cell-datetime",
      };
  }
}

function getClassNames() {
  return {
    backgrounddiv: "app-backgroundg-div",
    listView: "App-list",
    cellTitle: "App-cell-title",
    cellDesc: "App-cell-desc",
    cellDateTime: "App-cell-datetime",
  };
}

function Cell(event) {
  const dcn = getDynamicClassNames();
  const scn = getClassNames();
  return (
    <div className={dcn.cell + " " + "App-cell"}>
      <h3 className={dcn.cellTitle + " " + scn.cellTitle}>
        {event.item.Event}
      </h3>
      <p className={dcn.cellDesc + " " + scn.cellDesc}>
        {event.item.Description}
      </p>
      <p className={dcn.cellDateTime + " " + scn.cellDateTime}>
        {event.item.DateTilme}
      </p>
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
      // console.log(jsonData);
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
