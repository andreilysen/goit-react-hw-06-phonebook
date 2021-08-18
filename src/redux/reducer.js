import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import action from "./action";

const contacts = createReducer([], {
  [action.addContacts]: (state, { payload }) => [payload, ...state],
  [action.deleteContact]: (state, { payload }) => [
    ...state.filter((contact) => contact.id !== payload),
  ],
});

const filter = createReducer("", {
  [action.addFilter]: (_, { payload }) => payload,
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case "addContacts":
//       return [payload, ...state];
//     case "deleteContact":
//       return [...state.filter((contact) => contact.id !== payload)];

//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case "addFilter":
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts,
  filter,
});
