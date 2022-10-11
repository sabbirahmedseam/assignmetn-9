import React from "react";
import './FReact.css'
import { useLoaderData } from "react-router-dom";
import Ggit from "../Ggit/Ggit";

const FReact = () => {
  const test = useLoaderData();
  const { name, questions } = test.data;
  // console.log(name, questions);
  //   console.log(test);

  return (
    <div className="quizz">
     
      <h2> Quiz of {name}</h2>
      {questions.map((item) => (
        <Ggit key={item.id} item={item}></Ggit>
      ))}
    </div>
  );
};

export default FReact;
