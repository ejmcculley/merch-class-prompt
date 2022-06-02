import React from "react";
import Merch from "./Merch";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

const Merch = {};
Merch.id = v4()

function MerchList(props) {
  return (
    <React.Fragment>
      <hr/>
      {props.MerchList.map((Merch) =>
        <Merch 
                whenMerchClicked = { props.onMerchSelection }
                name={Merch.name}
                price={Merch.price}
                description={Merch.description}
                numberInCart={Merch.numberInCart}
                id={Merch.id}
                key={Merch.id}/>
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  MerchList: PropTypes.array,
  onMerchSelection: PropTypes.func
};

export default MerchList;