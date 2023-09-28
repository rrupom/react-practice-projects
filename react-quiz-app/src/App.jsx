import questions from "./data";
import { useState } from "react";
import "./style.css";

export default function App() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const hasNextQuestion = questionNumber < questions.length;

  function handleClick() {
    const nextQuestion = questionNumber + 1;
    if (nextQuestion < questions.length) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(0);
      setScore(0);
    }
  }

  function handleSubmitAnswer(answerOption) {
    if (answerOption.isCorrect) {
      setScore(score + 1);
    }
  }

  return (
    <div className="container">
      <div className="parent-container">
        <div className="question-container">
          <div className="question">
            <h1 className="question-text">
              Question Number {questionNumber + 1}
            </h1>
            <p>{questions[questionNumber].questionText}</p>
          </div>
          <div>
            {hasNextQuestion && (
              <button onClick={handleClick}>Next Question</button>
            )}
          </div>
        </div>
        <div className="answer-container">
          <h3>Options</h3>
          <ul>
            {questions[questionNumber].answerOptions.map((answerOption) => (
              <li>
                <button onClick={() => handleSubmitAnswer(answerOption)}>
                  {answerOption.answerText}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="score">
        <h1>
          Score: <span>{score}</span>
        </h1>
      </div>
    </div>
  );
}
