import { handleActions } from "redux-actions";
import AsyncStorage from '@react-native-async-storage/async-storage';
import produce from "immer";

const initialState = {
  items: [],
};

const STORAGE_KEY = '@reactodo/todo';

const INIT = 'todo/INIT';
const ADD = 'todo/ADD';
const REMOVE = 'todo/REMOVE';

export const addItem = (items) => {
  return {
    type: ADD,
    payload: items,
  };
};

export const removeItemByIndex = (index) => {
  return {
    type: REMOVE,
    payload: index,
  };
};

export const initItems = (items) => {
  return {
    type: INIT,
    payload: items,
  };
}

export const asyncInitItems = () => async (dispatch) => {
  const result = await AsyncStorage.getItem(STORAGE_KEY);
  const state = JSON.parse(result);
  dispatch(initItems(state.todo.items));
};

export const asyncAddItem = (item) => async (dispatch, getState) => {
  dispatch(addItem(item));
  const state = getState();
  const jsonState = JSON.stringify(state);
  await AsyncStorage.setItem(STORAGE_KEY, jsonState);
};

export const asyncRemoveItemByIndex = (index) => async (dispatch, getState) => {
  dispatch(removeItemByIndex(index));
  const state = getState();
  const jsonState = JSON.stringify(state);
  await AsyncStorage.setItem(STORAGE_KEY, jsonState);
};

export default handleActions(
  {
    [INIT]: (state, { payload }) => {
      const result = produce(state, (draft) => {
        draft.items = payload ? [...payload] : [];
      });
      return result;
    },
    [ADD]: (state, { payload }) => {
      const result = produce(state, (draft) => {
        draft.items.push(payload);
      });
      return result;
    },
    [REMOVE]: (state, { payload: index }) => {
      const result = produce(state, (draft) => {
        const items = draft.items || [];
        console.log(items);
        items.splice(index, 1);
      });
      return result;
    },
  }, initialState
);
