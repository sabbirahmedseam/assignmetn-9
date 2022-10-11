import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = ({ data }) => {
  const { id,name, logo, total } = data;

  return (
    <div className="cart">
      <img src={logo} alt="" />
     <h3>Total Questions:{total}</h3>
     <div className="button">
     <b>{name}</b>
        <Link to={`/cart/${id}`}><button>
          <span> Start Practice
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span>
        </button></Link>
     </div>
    </div>
  );
};

export default Cart;
