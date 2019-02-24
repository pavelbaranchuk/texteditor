import * as actionTypes from "../actionTypes";

import { addSynonyms } from "../../helpers/helpers"

export function loadSynonyms(word) {
  return dispatch => {
    dispatch({
      type: actionTypes.FETCH_SYNONYMS_START
    });
    fetch(`https://api.datamuse.com/words?ml=${word}&max=5`)
      .then(res => {
        if (res.status >= 400) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(res => addSynonyms(res))
      .then(response =>
        dispatch({
          type: actionTypes.FETCH_SYNONYMS_SUCCESS,
          payload: response
        })
      )
      .catch(error => {
        dispatch({
          type: actionTypes.FETCH_SYNONYMS_FAIL,
          payload: { error }
        });
      });
  };
}

