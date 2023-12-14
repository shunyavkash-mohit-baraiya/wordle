import React from "react";

export default function Tile({ children, status }) {
  let statusClass = "";
  switch (status) {
    case "correct":
      statusClass = "correct";
      break;
    case "wrong-place":
      statusClass = "wrong-place";
      break;
    case "incorrect":
      statusClass = "incorrect";
      break;
  }
  return <div className={"tile " + statusClass}>{children}</div>;
}
