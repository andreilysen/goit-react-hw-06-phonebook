import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import * as actions from "../../redux/contacts/contactsAction";

import ContactListItem from "./ContactListItem";

import styles from "./Contact.module.css";
import { getContactOperation } from "../../redux/contacts/contactsOperations";

const ContactsList = () => {
  const { contactList, filter } = useSelector((state) => state.contacts);
  // console.log(`state`, contactList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactOperation());
  }, [dispatch]);

  const filterContact = contactList.items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    contactList.items.length > 0 && (
      <ul className={styles.list}>
        {filterContact.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            // onClickRemove={() => dispatch(   actions.deleteContact(id))}
          />
        ))}
      </ul>
    )
  );
};

export default ContactsList;
