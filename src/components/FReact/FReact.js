import React, { useState } from "react";
import "./FReact.css";
import { useLoaderData } from "react-router-dom";
import Ggit from "../Ggit/Ggit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FReact = () => {
  const [ans, setAns] = useState([]);
  const test = useLoaderData();
  const { name, questions } = test.data;

  const handleClick = (correctAnswer) => {
    toast("correct ans:" + correctAnswer);
    const newAns = [...ans, correctAnswer];

    setAns(newAns);
  };
  return (
    <div className="quizz">
      
      <ToastContainer></ToastContainer>
      <h2> Quiz of {name}</h2>
      {questions.map((item) => (
        <Ggit key={item.id} item={item} handleClick={handleClick}></Ggit>
      ))}
    </div>
  );
};

export default FReact;
