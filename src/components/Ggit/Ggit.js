import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import Tcss from "../Tcss/Tcss";
import "./Ggit.css";

const Ggit = ({ item }) => {
  const { correctAnswer, options, question } = item;

  // console.log(options);
  // console.log(item);
  const [ans, setAns] = useState([]);

  const handleClick = (correctAnswer) => {
    setAns(correctAnswer);
    // alert("okay");
    console.log(correctAnswer);
  };
  console.log(ans);
  return (
    <div className="qPaper">
      <h3>
        Quiz:{question}
        <FontAwesomeIcon
          onClick={() => handleClick(correctAnswer)}
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
