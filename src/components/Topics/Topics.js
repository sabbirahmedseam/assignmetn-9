import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Sjs from "../Sjs/Sjs";
import './Topics.css'

const Topics = () => {
  const topics = useLoaderData();
  const { data } = topics;
    //  console.log(data);

  return (
    <div >
     <Sjs></Sjs>
      <div className="topic">
      {data.map((data) => (
        <Cart data={data} key={data.id}></Cart>
      ))}
      </div>
    </div>
  );
};

export default Topics;
