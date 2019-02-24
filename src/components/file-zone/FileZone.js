import React from "react";
import "./FileZone.css";

const FileZone = (props) => (
  <div id="file-zone">
    <div id="file">{props.content}</div>
  </div>
);

export default FileZone;
