import {  faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tcss from "../Tcss/Tcss";
import './Ggit.css'

const Ggit = ({ item }) => {
  const { correctAnswer, options, question } = item;
  // console.log(correctAnswer);
  // console.log(item);

  return (
    <div >
      <h3> Quiz:{question} <FontAwesomeIcon icon={faEye}></FontAwesomeIcon></h3>
     <div className="gitt">
     {
        options.map((item,idx)=><Tcss key={idx} item={item}></Tcss>)
      }
     </div>
    </div>
  );
};

export default Ggit;
