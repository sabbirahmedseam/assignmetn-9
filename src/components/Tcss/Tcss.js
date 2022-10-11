import React from "react";
import "./Tcss.css";

const Tcss = ({ item,btnClick }) => {
//   console.log(item);
  return (
    // <div className='radio'>
    //   <button>

    //    <input type="radio" name="opt" id={item} value={item} />
    //    <label htmlFor={item}><b>{item}</b></label>
    //   </button>
    // </div>
    <button onClick={()=>btnClick(item)} className="radio">
      <input type="radio" name="opt" id={item} value={item} />
     
      <label htmlFor={item}>
        <b>{item}</b>
      </label>
    </button>
  );
};

export default Tcss;
