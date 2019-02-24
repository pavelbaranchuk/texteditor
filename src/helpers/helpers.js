export function addSynonyms(text) {
  let wholeText = "";
  let synonym = document.getElementById("synonym");
  text.map((value, i) => {
    if (i === text.length - 1) {
      wholeText += `${value.word}`;
    } else {
      wholeText += `${value.word}, `;
    }
    return wholeText;
  });

  if (wholeText !== "undefined") {
    synonym.innerHTML = wholeText;
  }
};

export function getSelectionText() {
  let text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  } else if (document.selection && document.selection.type !== "Control") {
    text = document.selection.createRange().text;
  }
  return text;
};