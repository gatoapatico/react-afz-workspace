import { useState,useEffect } from "react";
import Question from "./Question";

export default function Quiz(props) {

    const [isReadyToCheck, setIsReadyToCheck] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [score, setScore] = useState(0);
    const [questionsArray, setQuestionsArray] = useState(props.questions.map((question, index) => ({
        questionId: index,
        question: parseHtmlEntity(question.question),
        isReady: false,
        answer: question.correct_answer,
        optionSelected: "",
        alternatives:
            [...question.incorrect_answers, question.correct_answer]
                .sort(() => Math.random() - 0.5)
                .map(option => parseHtmlEntity(option))
    })));

    const questionElements = questionsArray.map(question =>
        <Question 
            key={question.questionId}
            id={question.questionId}
            question={question}
            toggleReady={toggleReady}
            saveOption={saveOption}
            isChecked={isChecked}
        />
    );

    function parseHtmlEntity(text) {
        return new DOMParser().parseFromString(text, 'text/html').body.textContent;
    }

    function toggleReady(id) {
        setQuestionsArray(prevArray => prevArray.map(question => {
            return question.questionId === id ?
            {...question, isReady: true} :
            question
        }));
    }

    function saveOption(id, option) {
        setQuestionsArray(prevArray => prevArray.map(question => {
            return question.questionId == id ?
            {...question, optionSelected: option} :
            question
        }));
    }

    function checkAnswers() {
        if(isReadyToCheck) {
            setScore(questionsArray.filter(question => question.optionSelected === question.answer).length);
            setIsChecked(true);
        }
        else {
            console.log(questionsArray);
        }
    }

    useEffect(() => {
        questionsArray.filter(question => question.isReady).length === questionsArray.length && setIsReadyToCheck(true);
    }, [questionsArray]);

    return (
        <main className="main-quiz">
            <div className="questions">
                {questionElements}
            </div>
            <div className="resume">
                {isChecked && <h2>You scored {score}/5 correct answers</h2>}
                <button className="btn-check" onClick={isChecked ? props.restart : checkAnswers}>{isChecked ? "Play again" : "Check answers"}</button>
            </div>
        </main>
    )
}