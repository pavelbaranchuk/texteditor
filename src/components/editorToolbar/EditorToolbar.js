import React, { Component } from "react";
import "./EditorToolbar.css";
import { connect } from "react-redux";
import { loadSynonyms } from "../../store/actionCreators/synonyms";

import { addSynonyms, getSelectedText } from "../../helpers/helpers";

class EditorToolbar extends Component {
  render() {
    return (
      <div className="control">
        <div className="control__wrapper">
          <button
            onClick={this.handleBoldClick}
            className="control__button"
            type="button"
          >
            <b>B</b>
          </button>
          <button
            onClick={this.handleItalicClick}
            className="control__button"
            type="button"
          >
            <i>I</i>
          </button>
          <button
            onClick={this.handleUnderLineClick}
            className="control__button"
            type="button"
          >
            <u>U</u>
          </button>
          <button
            onClick={this.handleIndentClick}
            className="control__button"
            type="button"
          >
            Indent
          </button>
          <button
            onClick={this.handleColorClick}
            className="control__button"
            type="button"
          >
            Color
          </button>
          <button
            onClick={this.handleSynonymClick}
            className="control__button"
            type="button"
          >
            Synonym
          </button>
        </div>
      </div>
    );
  }

  handleBoldClick = () => {
    document.execCommand("bold");
  };

  handleItalicClick = () => {
    document.execCommand("italic");
  };

  handleUnderLineClick = () => {
    document.execCommand("underline");
  };

  handleColorClick = () => {
    let color = prompt(
      "Please, enter the color as a hexadecimal number, e.g. #F00",
      "#"
    );
    document.execCommand("foreColor", false, color);
  };

  handleIndentClick = () => {
    document.execCommand("indent");
  };

  handleSynonymClick = () => {
    let word = getSelectedText();

    addSynonyms([]);

    if (word) {
      this.props.loadSynonyms(word);
    } else {
      addSynonyms([{ word: "Please, highlight the text" }]);
    }
  };
}

const mapDispatchToProps = {
  loadSynonyms
};

export default connect(
  null,
  mapDispatchToProps
)(EditorToolbar);
