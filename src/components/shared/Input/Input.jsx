import React from "react";
import "./Input.css"

export function Input({fieldName, onChange, value, type}) {
  return (
      <div className="inputWrapper">
          <p>{fieldName}</p>
          <input onChange={onChange} value={value} type={type}/>
      </div>
  );
}
