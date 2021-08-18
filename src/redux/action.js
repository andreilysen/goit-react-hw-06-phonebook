import { createAction } from "@reduxjs/toolkit";

const addContacts = createAction("addContacts");
const addFilter = createAction("addFilter");
const deleteContact = createAction("deleteContact");

export default { addContacts, addFilter, deleteContact };

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
