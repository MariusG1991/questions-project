import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button
          type="button"
          className="question-btn"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
};
export default SingleQuestion;
