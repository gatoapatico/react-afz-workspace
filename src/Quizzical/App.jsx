import Start from "./components/Start"
import Quiz from "./components/Quiz"
import { useEffect, useState } from "react"

export default function App() {

    const [isPlaying, setIsPlaying] = useState(false);
    
    function start() {
        setIsPlaying(true);
    }

    return (
        <main className="body-container">
            <img className="blob blob-1" src="/Quizzical/blob_1.png" alt="Blob 1" />
            <img className="blob blob-2" src="/Quizzical/blob_2.png" alt="Blob 2" />
            {!isPlaying ? <Start start={start}/> : <Quiz />}
        </main>
    )
}