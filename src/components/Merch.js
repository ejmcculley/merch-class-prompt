import React from "react";
import PropTypes from "prop-types";
import bootstrap from "react-bootstrap"


function Merch(props){
  return (  
    <React.Fragment>
      <div className="container" onClick = {() => props.whenMerchClicked(props.id)}>
         <div className="row">
          <div className="col">
           <h3>Merch </h3>
           <h3>Name: {props.name}</h3>
           <h3>Description: {props.description}</h3>
           <h3>Quantity: {props.quantity}</h3>
           <h3>Price: ${props.price}</h3>
           <h3>Number in Cart {props.numberInCart}</h3>
          </div>
          <div className="col">
           <h3> something here</h3>
        </div>
      </div>
    
      </div>
    </React.Fragment>

  );
}

Merch.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  description: PropTypes.string,
  numberInCart: PropTypes.number,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func
};
 
export default Merch;