import React from "react";
import "./Button.css"

export function Button({text, onClick}) {
  return (
      <button className="btn" onClick = {onClick}>{text}</button>
  );
}
