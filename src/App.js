import React, { useState } from "react";
import "./App.css";
import * as XLSX from "xlsx";
import * as grooms_data from "./data/grooms_data.xlsx";
import * as brides_data from "./data/brides_data.xlsx";

const TITLE = "What Now?";

const WEDDING_PARTY_TYPES = {
  GROOM: 0,
  BRIDE: 1,
};

const WEDDING_PARTY = WEDDING_PARTY_TYPES.GROOM;

function getData() {
  switch (WEDDING_PARTY) {
    case WEDDING_PARTY_TYPES.BRIDE:
      return brides_data;
    default:
      return grooms_data;
  }
}

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
        cellLink: "brides-link",
      };
    default:
      return {
        background: "grooms-party-bg",
        title: "grooms-party-title",
        cell: "grooms-cell",
        cellTitle: "grooms-cell-title",
        cellDesc: "grooms-cell-desc",
        cellDateTime: "grooms-cell-datetime",
        cellLink: "grooms-link",
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
      <img
        src={event.item.Image}
        className="cell-image"
        alt={event.item.Event}
      />
      <div className="cell-content">
        <h3 className={dcn.cellTitle + " " + scn.cellTitle}>
          {event.item.Event}
        </h3>
        <p className={dcn.cellDesc + " " + scn.cellDesc}>
          {event.item.Description}
        </p>
        <div className="cell-footer">
          {event.item.DateTime !== undefined && (
            <p className={dcn.cellDateTime + " " + scn.cellDateTime}>
              {event.item.DateTime}
            </p>
          )}
          {event.item.Link !== undefined && (
            <a href={event.item.Link} className={dcn.cellLink}>
              Link
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

async function getLocalData(data) {
  return new Promise((resolve, reject) => {
    fetch(data)
      .then((resp) => resp.arrayBuffer())
      .then((buff) => {
        const workbook = XLSX.read(buff);
        const wsname = workbook.SheetNames[0];
        const ws = workbook.Sheets[wsname];
        const jsonData = XLSX.utils.sheet_to_json(ws);
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

  getLocalData(getData()).then((jsonData) => {
    if (events.length === 0) {
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
        <div className="bottom-spacer"></div>
      </div>
    </div>
  );
}

export default App;
