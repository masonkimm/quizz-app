import React from 'react';
import { AnswerObject } from '../App';
import { ButtonWrapper } from './QuestionCard.style';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswers: AnswerObject | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswers,
  questionNr,
  totalQuestions,
}) => {
  return (
    <div className="questionCard">
      <h3>
        Question: {questionNr}/{totalQuestions}
      </h3>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      {answers.map((answer) => (
        <ButtonWrapper
          correct={userAnswers?.correctAnswer == answer}
          userClicked={userAnswers?.answer === answer}
        >
          <div className="answerButtons" key={answer}>
            <button
              disabled={userAnswers ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }}></span>
            </button>
          </div>
        </ButtonWrapper>
      ))}
    </div>
  );
};
export default QuestionCard;
