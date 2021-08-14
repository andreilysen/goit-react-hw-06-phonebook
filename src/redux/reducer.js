const contactsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "addContact":
      const inContact = state.find(
        (elem) => elem.name.toLowerCase() === payload.name.toLowerCase()
      );
      if (inContact) {
        alert(`${inContact.name}  is already in contacts!`);
        return;
      }
      return [...state, payload];

    default:
      return state;
  }
};

export { contactsReducer };
