export default function Start(props) {
    return (
        <div className="main-start">
            <h1>Quizzical</h1>
            <h3>Some description if needed</h3>
            <button className="btn-start" onClick={props.start}>Start quiz</button>
        </div>
    )
}