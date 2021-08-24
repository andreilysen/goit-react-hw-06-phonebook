import { useState } from "react";
import { connect } from "react-redux";

import actions from "../../redux/action";

import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import styles from "./Form.module.css";

const Form = ({ contacts, filter, onAddContacts }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetInput = () => {
    setName("");
    setNumber("");
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const newContact = { name, number, id };
    const inContact = contacts.find(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (inContact) {
      alert(`${inContact.name}  is already in contacts!`);
      return;
    }
    onAddContacts(newContact);
    resetInput();
  };

  return (
    <form className={styles.form} onSubmit={handleAddContact}>
      <label className={styles.item}>
        <p>Name</p>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChangeInput}
        />
        <p>Number</p>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChangeInput}
        />
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </label>
    </form>
  );
};

Form.propTypes = {
  onAddContacts: PropTypes.func.isRequired,
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
    onAddContacts: (contact) => dispatch(actions.addContacts(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
