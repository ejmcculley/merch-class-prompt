import React from "react";
import Merch from "./Merch";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import bootstrap from "react-bootstrap"


function MerchList(props){
  return (
    <React.Fragment>
      <hr />
      {props.merchList.map((merch) =>
        <Merch
        whenMerchClicked = { props.onMerchSelection }
        name ={merch.name}
        price ={merch.price}
        quantity={merch.quantity}
        description={merch.description}
        numberInCart={merch.numberInCart}
        id ={merch.id}
        key ={merch.id}/>
 
      )}
    </React.Fragment>
  )
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onMerchSelection: PropTypes.func
};

export default MerchList;
