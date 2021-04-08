import React from "react";
import "./Question.scss";

function Question() {
  return (
    <div className="question-container">
      <div className="question">
        <h4>Question : NO.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed
          placeat explicabo molestiae veniam nihil magni praesentium quisquam
          enim rem.
        </p>
      </div>
      <hr />
      <div className="option-container">
        <div className="btn active">
          <div className="option-number">
            <h1>A</h1>
          </div>
          <div className="option-text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
       
        <div className="btn">
          <div className="option-number">
            <h1>B</h1>
          </div>
          <div className="option-text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        
        <div className="btn">
          <div className="option-number">
            <h1>C</h1>
          </div>
          <div className="option-text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        
        <div className="btn">
          <div className="option-number">
            <h1>D</h1>
          </div>
          <div className="option-text">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
