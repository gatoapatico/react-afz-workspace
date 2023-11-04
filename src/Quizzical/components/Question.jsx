import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';

export default function Question(props) {

    const [selectedOption, setSelectedOption] = useState("");
    const [alternatives, setAlternatives] = useState(props.question.alternatives.map(object => ({
        id: nanoid(),
        alternative: object,
        isHeld: false
    })));

    const alternativesEl = alternatives.map(object => {

        let styles = {}

        if(props.isChecked) {
            if(object.alternative === props.question.answer) {
                styles = {
                    backgroundColor: "#94d7a3",
                    border: "1px solid #94d7a3"
                }
            }
            else {
                if(object.alternative === props.question.optionSelected) {
                    styles = {
                        backgroundColor: "#d79494",
                        border: "1px solid #d79494",
                        opacity: "50%"
                    }
                }
                else {
                    styles = {
                        backgroundColor: "transparent",
                        border: "1px solid #4D5B9E",
                        opacity: "50%"
                    }
                }
            }
        }
        else {
            styles = {
                backgroundColor: object.isHeld ? "#D6DBF5" : "transparent",
                border: object.isHeld ? "1px solid #D6DBF5" : "1px solid #4D5B9E"
            }
        }

        return (
            <button
                style={styles}
                key={object.id}
                className="btn-alternative"
                onClick={() => toggleAlternative(object.id)}
            >
                {object.alternative}
            </button>
        )  
    });

    function toggleAlternative(id) {
        if(!props.isChecked) {
            props.toggleReady(props.id);
            setAlternatives(prevAlternatives => prevAlternatives.map(alternative => {
                if(alternative.id === id) {
                    setSelectedOption(alternative.alternative);
                    return {...alternative, isHeld: true}
                }
                else {
                    return {...alternative, isHeld: false}
                }
            }));
        }
        else {
            console.log("Ya no se puede seleccionar!");
        }
    }

    useEffect(() => {
        props.saveOption(props.id, selectedOption);
    }, [alternatives]);

    return (
        <div className="question">
            <h3>{props.question.question}</h3>
            <div className="alternatives">
                {alternativesEl}
            </div>
        </div>
    )
}