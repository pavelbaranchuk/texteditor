import * as actionTypes from "../actionTypes";

export const INITIAL_STATE = {};

export default function synonymsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.FETCH_SYNONYMS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
