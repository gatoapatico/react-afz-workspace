import { useState,useEffect } from "react";
import Question from "./Question";

export default function Quiz() {

    const [questionsArray, setQuestionsArray] = useState([]);

    useEffect(() => {
        async function getQuestions() {
            const res = await fetch('https://opentdb.com/api.php?amount=5&category=12&difficulty=medium&type=multiple');
            const data = await res.json();
            setQuestionsArray(data.results);
        }
        getQuestions();
    }, []);

    const questionElements = questionsArray.map((question, index) =>
        <Question
            key={index}
            id={index}
            question={new DOMParser().parseFromString(question.question, 'text/html').body.textContent}
            alternatives={[...question.incorrect_answers, question.correct_answer]}
        />
    );

    return (
        <main className="main-quiz">
            <div className="questions">
                {questionElements}
            </div>
            <button className="btn-check">Check answers</button>
        </main>
    )
}