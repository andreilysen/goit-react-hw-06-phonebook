const addContact = (newContact) => ({
  type: "addContact",
  payload: { newContact },
});

export { addContact };
