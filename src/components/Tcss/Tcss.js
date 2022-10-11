import React from "react";
import "./Tcss.css";

const Tcss = ({ item, btnClick }) => {
  //   console.log(item);
  return (
    <div className="radio">
      <input
        onClick={() => btnClick(item)}
        type="radio"
        name="opt"
        id={item}
        value={item}
      />

      <label htmlFor={item}>
        <b>{item}</b>
      </label>
    </div>
  );
};

export default Tcss;
