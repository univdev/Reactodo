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
    [ADD]: (state, { payload }) => {
      const items = [...state.items, { ...payload }];
      const result = {
        ...state,
        items,
      };
      return result;
    }
  }, initialState
);
