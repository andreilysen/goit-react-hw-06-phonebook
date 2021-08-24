import React from "react";
import { connect } from "react-redux";
import actions from "../../redux/action";

import PropTypes from "prop-types";
import styles from "../Form/Form.module.css";

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
      />
    </>
  );
};

Filter.propTypes = {
  // value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeFilter: (query) => dispatch(actions.addFilter(query.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);