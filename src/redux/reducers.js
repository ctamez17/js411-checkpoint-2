import { combineReducers } from "redux";

const biz = (state = [], action) => {
  switch (action.type) {
    case "ADD_BIZ":
      return [...state, action.value];
    case "REMOVE_BIZ":
      const newState = [...state];
      newState.splice(action.value, 1);
      return newState;
    default:
      return state;
  }
};

const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.value;
    case "LOGOUT":
      return action.value;
    default:
      return state;
  }
};

export default combineReducers({ biz, user });
