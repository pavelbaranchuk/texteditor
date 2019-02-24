import React, { Component } from "react";
import "./App.css";
import ControlPanel from "./components/control-panel/ControlPanel";
import FileZone from "./components/file-zone/FileZone";
import getMockText from "./services/text.service";

class App extends Component {
  state = {
    content: ""
  };

  componentDidMount() {
    getMockText().then(result => this.setState({ content: result }));
  }

  render() {
    let file = document.getElementById("file");
    if (file) {
      file.contentEditable = "true";
    }
    
    return (
      <div className="App">
        <header>
          <span>Advanced Text Editor by Pavel Baranchuk</span>
        </header>
        <main>
          <ControlPanel />
          <span id="synonym" />
          <FileZone content={this.state.content} />
        </main>
        <footer>AgileEngine, 2018</footer>
      </div>
    );
  }
}

export default App;
