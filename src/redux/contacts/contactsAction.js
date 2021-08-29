import { createAction } from "@reduxjs/toolkit";

export const addContacts = createAction("addContacts");
export const setContacts = createAction("setContacts");
export const fetchRequest = createAction("fetchRequest");
export const fetchSuccess = createAction("fetchSuccess");
export const fetchError = createAction("fetchError");
export const addFilter = createAction("addFilter");
export const deleteContact = createAction("deleteContact");

// export const addContacts = (contact) => {
//   return {
//     type: "addContacts",
//     payload: contact,
//   };
// };

// export const addFilter = (query) => {
//   return {
//     type: "addFilter",
//     payload: query,
//   };
// };

// export const deleteContact = (id) => {
//   return {
//     type: "deleteContact",
//     payload: id,
//   };
// };
