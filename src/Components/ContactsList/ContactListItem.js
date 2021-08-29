import React from "react";
import { useDispatch } from "react-redux";
// import * as actions from "../../redux/contacts/contactsAction";
import * as actions from "../../redux/contacts/contactsOperations";
// import PropTypes from "prop-types";

import styles from "./Contact.module.css";
// console.log(`actions`, actions.deleteContactOperation());
const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  // console.log(`id`, id);

  const onClickRemove = (id) => {
    // console.log(`id`, id);
    dispatch(actions.deleteContactOperation(id));
  };

  return (
    <li className={styles.items}>
      <p className={styles.item}>{name}:</p>
      <p className={styles.item}>{number}</p>
      <button className={styles.button} onClick={() => onClickRemove(id)}>
        X
      </button>
    </li>
  );
};

// ContactListItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onClickRemove: PropTypes.func.isRequired,
// };

export default ContactListItem;
