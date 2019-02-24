import React from "react";
import "./TextEditor.css";

const TextEditor = (props) => (
  <div className="textEditor">
    <div className="textEditor__content">{props.content}</div>
  </div>
);

export default TextEditor;
