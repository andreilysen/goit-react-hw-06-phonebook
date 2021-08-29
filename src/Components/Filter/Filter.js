import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/contacts/contactsAction";

// import PropTypes from "prop-types";
import styles from "../Form/Form.module.css";

const Filter = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={(query) => dispatch(actions.addFilter(query.target.value))}
      />
    </>
  );
};

// Filter.propTypes = {
//   // value: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => {
//   return {
//     filter: state.filter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeFilter: (query) => dispatch(actions.addFilter(query.target.value)),
//   };
// };

export default Filter;
