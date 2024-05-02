import React, { useState } from "react";
import Dice from "./Dice";

const DiceRollerWindow = () => {
    const [diceToRoll, setDiceToRoll] = useState([]);
    const [diceResult, setDiceResult] = useState([]);

    const availableDice = [4, 6, 8, 10, 12, 20, 100];

    const addToSelectedDice = (value) => {
        setDiceToRoll([...diceToRoll, value]);
    }
    
    const rollAllDice = () => {
        let diceSum = [];

        diceToRoll.forEach(dice => {
            const diceRoll = "d" + dice + ": " + Math.floor(Math.random() * dice + 1);
            diceSum = [...diceSum, diceRoll];
        });

        console.log(diceSum);
        setDiceResult(diceSum);
        setDiceToRoll([]);
    }

    return (
        <div className="dice-window">
            <div className="dice-display">
                {(diceToRoll.length === 0 ? (diceResult.length === 0 ? 0 : diceResult.join(' ')) : diceToRoll.join(' + '))}
            </div>

            {
                availableDice.map((dice, i) => {
                    return <Dice key={i} handleClick={addToSelectedDice} value={dice} />
                })
            }

            <button className="roll-button" onClick={rollAllDice} >Бросить</button>
        </div>
    );
}

export default DiceRollerWindow;