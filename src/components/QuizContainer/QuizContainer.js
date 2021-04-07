import React from "react";
import Result from "../Result/Result";
import Progress from "../Progress/Progress";
import Question from "../Question/Question";
import "./QuizContainer.scss";

function QuizContainer() {
  return (
    <div className="quiz-container">
      <Progress></Progress>
      <Question></Question>
      {/* <Result></Result> */}
    </div>
  );
}

export default QuizContainer;
