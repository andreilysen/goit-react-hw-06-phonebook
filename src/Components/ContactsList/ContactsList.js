import React from "react";
import { connect } from "react-redux";
import actions from "../../redux/action";

import ContactListItem from "./ContactListItem";

import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const ContactsList = ({ contacts, filter, onRemoveContact }) => {
  const filterContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    contacts.length > 0 && (
      <ul className={styles.list}>
        {filterContact.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClickRemove={() => onRemoveContact(id)}
          />
        ))}
      </ul>
    )
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state.contacts;
  return {
    contacts: contacts,
    filter: filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveContact: (id) => dispatch(actions.deleteContact(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
