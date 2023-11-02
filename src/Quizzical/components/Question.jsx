import { nanoid } from 'nanoid'

export default function Question(props) {

    const shuffleArray = props.alternatives.sort(() => Math.random() - 0.5);
    const objectsArray = shuffleArray.map(object => ({
        id: nanoid(),
        alternative: new DOMParser().parseFromString(object, 'text/html').body.textContent,
        isHeld: false
    }));

    const alternativesEl = objectsArray.map(object => {
        const styles = {
            backgroundColor: object.isHeld ? "#D6DBF5" : "transparent",
            border: object.isHeld ? "1px solid #D6DBF5" : "border: 1px solid #4D5B9E"
        };

        return <button style={styles} key={object.id} className="btn-alternative">{object.alternative}</button>
        }
    );

    return (
        <div className="question">
            <h3>{props.question}</h3>
            <div className="alternatives">
                {alternativesEl}
            </div>
        </div>
    )
}