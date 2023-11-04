import Start from "./components/Start"
import Quiz from "./components/Quiz"
import { useEffect, useState } from "react"

export default function App() {

    const [isPlaying, setIsPlaying] = useState(false);
    const [questionsArray, setQuestionsArray] = useState([]);
    
    async function fetchData() {
        const res = await fetch('https://opentdb.com/api.php?amount=5&category=12&difficulty=medium&type=multiple');
        const data = await res.json();
        setQuestionsArray(data.results);
    }

    function restart() {
        setIsPlaying(false);
    }

    useEffect(() => {
        if(questionsArray.length > 0) {
            setIsPlaying(true);
        }
    }, [questionsArray]);

    return (
        <main className="body-container">
            <img className="blob blob-1" src="/Quizzical/blob_1.png" alt="Blob 1" />
            <img className="blob blob-2" src="/Quizzical/blob_2.png" alt="Blob 2" />
            {!isPlaying ? <Start start={fetchData}/> : <Quiz questions={questionsArray} restart={restart}/>}
        </main>
    )
}