import React from "react";
import Form from "../Form";
import Filter from "../Filter";
import ContactsList from "../ContactsList";

const App = () => {
  // useEffect(() => {
  //   const storage = JSON.parse(localStorage.getItem("data"));
  //   setContacts(storage);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("data", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <>
      <h2>Phonebook</h2>
      <Form />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
};

export default App;
