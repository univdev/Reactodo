import { handleActions } from "redux-actions";

const initialState = {
  items: [],
};

const ADD = 'todo/ADD';

export const addItem = (items) => {
  return {
    type: ADD,
    payload: items,
  };
};

export default handleActions(
  {
    [ADD]: (state, {payload: result}) => {
      let newItems = state.items;
      newItems.push(result);
      let newState = {
        ...state,
        items: [...newItems]
      }
      return newState;
    }
  }, initialState
);
