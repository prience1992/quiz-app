import React from "react";
import "./Question.scss";

function Question() {
  return (
    <div className="question-container">
      <div className="question">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed
          placeat explicabo molestiae veniam nihil magni praesentium quisquam
          enim rem.
        </p>
      </div>
      <hr />
      <div className="option">
        <div className="btn">option1</div>
        <div className="btn">option2</div>
        <div className="btn">option3</div>
        <div className="btn">option4</div>
      </div>
    </div>
  );
}

export default Question;
