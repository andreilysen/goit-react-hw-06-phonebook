import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as action from "./contactsAction";

const initialState = {
  items: [],
  loading: false,
  error: "",
};

const contactList = createReducer(initialState, {
  [action.addContacts]: (state, { payload }) => ({
    ...state,
    items: [payload, ...state.items],
  }),
  [action.setContacts]: (state, { payload }) => ({
    ...state,
    items: [...payload],
  }),
  [action.deleteContact]: (state, { payload }) => ({
    ...state,
    items: [...state.items.filter((contact) => contact.id !== payload)],
  }),
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
  contactList,
  filter,
});
