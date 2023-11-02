export default function Dice(props) {

    const styles = props.isHeld ? {backgroundColor: "#59E391"} : {backgroundColor: "#ffffff"}

    return (
        <div className="dice" style={styles} onClick={props.holdDice}>
            <h1>{props.value}</h1>
        </div>
    )
}