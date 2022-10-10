import React from 'react';
import './Tcss.css'

const Tcss = ({item}) => {
// console.log(item);
    return (
        <div className='radio'>
          
           <input type="radio" name="opt" id={item} value={item} /> 
           <label htmlFor={item}><b>{item}</b></label>
        </div>
    );
};

export default Tcss;