import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import { ToastContainer, toast } from "react-toastify";
import Tcss from "../Tcss/Tcss";
import "./Ggit.css";

import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Ggit = ({ item }) => {
  const { correctAnswer, options, question } = item;
  // console.log(correctAnswer);
  // console.log(item);
  const handleClick = (correctAnswer) => {
    toast(correctAnswer);
    // alert("okay");
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <h3>
     
        Quiz:{question}
       
          <FontAwesomeIcon
            onClick={()=>handleClick(correctAnswer)}
            icon={faEye}
          ></FontAwesomeIcon>
       
      </h3>
      <div className="gitt">
        {options.map((item, idx) => (
          <Tcss key={idx} item={item}></Tcss>
        ))}
      </div>
    </div>
  );
};

export default Ggit;
