import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import './Topics.css'

const Topics = () => {
  const topics = useLoaderData();
  const { data } = topics;
  //    console.log(data);

  return (
    <div className="topic">
      {data.map((data) => (
        <Cart data={data} key={data.id}></Cart>
      ))}
    </div>
  );
};

export default Topics;
