import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";

const Cart = ({ data }) => {
  const { name, logo, total } = data;

  return (
    <div className="cart">
      <img src={logo} alt="" />
     <div className="button">
     <b>{name}</b>
        <button>
          <span> Start Practice
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
        </button>
     </div>
    </div>
  );
};

export default Cart;
