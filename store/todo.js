const initialState = {
  items: [],
};

const ADD = 'todo/ADD';

export const addItem = (items) => {
  return {
    type: ADD,
    items,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, items: action.items };
      break;
    default:
      return state;
  }
};

export default reducer;
