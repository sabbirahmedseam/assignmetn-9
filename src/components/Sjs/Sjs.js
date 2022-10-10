import React from "react";
import img from "../../images/edtech.jpg";
import pic from "../../images/education.jpg";
import "./sjs.css";
const Sjs = () => {
  return (
    <div className="sjs">
      <img src={img} alt="" />
      <h3>
        You can teach a student a lesson for a day; but if you can teach him to
        learn by creating curiosity, he will continue the learning process as
        long as he lives. A teacher affects eternity; he can never tell where
        his influence stops. Education is the most powerful weapon which you can
        use to change the world. Tell me and I’ll forget; show me and I may
        remember; involve me and I’ll understand. Intelligence plus
        character-that is the goal of true education. The beautiful thing about
        learning is that no one can take it away from you. What sculpture is to
        a block of marble, education is to the human soul. Education makes a
        people easy to lead but difficult to drive: easy to govern, but
        impossible to enslave.
      </h3>
      <img src={pic} alt="" />
    </div>
  );
};

export default Sjs;
