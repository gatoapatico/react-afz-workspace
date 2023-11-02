import { nanoid } from 'nanoid'

export default function Question(props) {

    const alternativesEl = props.alternatives.map(alternative => 
        <button key={nanoid()} className="btn-alternative">{alternative}</button>
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