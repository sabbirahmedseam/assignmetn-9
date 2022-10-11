import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tcss from "../Tcss/Tcss";
import "./Ggit.css";

const Ggit = ({ item, handleClick }) => {
  const { correctAnswer, options, question } = item;

  // console.log(correctAnswer);
  // console.log(item);

  const btnClick = (value) => {
    console.log(value);
    if(value===correctAnswer){
      toast('your answer is correct');
    }
    else{
     toast('wrong answer');
    }
  };

  return (
    <div className="qPaper">
    
      <h3>
       
        <li>Quiz:{question}</li>
      

        <FontAwesomeIcon
          onClick={() => handleClick(correctAnswer)}
          icon={faEye}
        ></FontAwesomeIcon>
      </h3>
      <div className="gitt">
        {options.map((item, idx) => (
          <Tcss key={idx} item={item} btnClick={btnClick}></Tcss>
        ))}
      </div>
    </div>
  );
};

export default Ggit;
