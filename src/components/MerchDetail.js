import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props) {
  const { merch, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{merch.name}</h1>
      <h3>Price: ${merch.price}</h3>
      <h3>{merch.quantity} in stock.</h3>
      <p>{merch.description}</p>
      {/* For vendors */}
      <button onClick={ props.onClickingEdit }>Update Item</button>
      <button onClick={()=> onClickingDelete(merch.id) }>Remove Item</button>
      {/* For customers */}
      {/* <button onClick={()=>onClickAddItem (merch.id)}>Add Item to Cart</button> */}
      {/* <button onClick={()=>onClickDeleteItem (merch.id)}>Delete Item to Cart</button> */}
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  // onClickAddItem: PropTypes.func,
  // onClickDeleteItem: PropTypes.func
};

export default MerchDetail;