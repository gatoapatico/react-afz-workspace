import Dice from "./components/Dice"
import { useEffect, useState } from "react";
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {

    const [diceArray, setDiceArray] = useState(allNewDice);

    const [tenzies, setTenzies] = useState(false);


    
    useEffect(() => {
        const num = diceArray[0].value;
        if(diceArray.filter(dice => (dice.isHeld && dice.value === num)).length === diceArray.length) {
            setTenzies(true);
            console.log("You won!");
        }
    }, [diceArray]);


    function allNewDice() {
        let array = [];
        for(let i = 0; i < 10; i++) {
            array.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            });
        }
        return array;
    }

    function rollDice() {
        if(!tenzies) {
            setDiceArray(prevArray => prevArray.map(diceObj => {
                return diceObj.isHeld ?
                    { ...diceObj } :
                    { ...diceObj ,value:Math.ceil(Math.random() * 6) }
            }));
        }
        else {
            setTenzies(false);
            setDiceArray(allNewDice());
        }
    }

    function holdDice(id) {
        setDiceArray(prevArray => prevArray.map(diceObj => {
            return diceObj.id === id ?
                { ...diceObj, isHeld: !diceObj.isHeld } :
                diceObj
        }));
    }

    const diceElements = diceArray.map(dice =>
        <Dice
            key={dice.id}
            id={dice.id}
            value={dice.value}
            isHeld={dice.isHeld}
            holdDice={() => holdDice(dice.id)}
        />
    )

    return (
        <main className="canvas">
            {tenzies && <Confetti />}
            <h1>Tenzies</h1>
            <p>
                Roll until all dice are the same. Click 
                each die to freeze it at its current value
                between rolls.
            </p>
            <div className="dices">
                {diceElements}
            </div>
            <button className="btn-roll" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}