import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type="text"
          name="name"
          placeholder="Item Name" />
        <input
          type="number"
          name="price"
          placeholder="Item Price" />
          <input
          type="number"
          name="quantity"
          placeholder="Item Quantity" />
          <input
          type="number"
          name="number in cart"
          placeholder="Amount in cart" />
        <textarea
          type="text"
          placeholder="Item description." />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;