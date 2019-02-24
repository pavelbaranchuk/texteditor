import React, { Component } from "react";
import "./App.css";
import EditorToolbar from "./components/editorToolbar/EditorToolbar";
import TextEditor from "./components/textEditor/TextEditor";
import getMockText from "./services/text.service";

class App extends Component {
  state = {
    content: ""
  };

  componentDidMount() {
    getMockText().then(result => this.setState({ content: result }));
  }

  render() {
    let editor = document.getElementsByClassName("textEditor__content")[0];
    if (editor) {
      editor.contentEditable = "true";
    }
    
    return (
      <div className="App">
        <header>
          <span>Advanced Text Editor by Pavel Baranchuk</span>
        </header>
        <main>
          <EditorToolbar />
          <span className="app__synonym" />
          <TextEditor content={this.state.content} />
        </main>
        <footer>AgileEngine, 2018</footer>
      </div>
    );
  }
}

export default App;
