import React, { useState } from "react";
import Header from "../components/Header";
import AccentButton from  "../components/UI/AccentButton"

const DiceRoller = () => {
    const defaultDiceList = [
        {
            value: 20,
            roll: 20
        }
    ];

    // Список выбранных для броска кубиков
    const [selectedDice, setSelectedDice] = useState(defaultDiceList);

    const roll = (d) => {
        return(Math.floor(Math.random() * d + 1));
    }

    const rollAllDice = () => {
        let newDice = [];

        selectedDice.forEach(dice => {
            newDice = [...newDice, {value: dice.value, roll: roll(dice.value)}];
        });

        setSelectedDice(newDice);
    }

    return (
        <>
            <Header />
            
            {/* Список выбранных кубиков */}
            <div className="selected-dice">
                {selectedDice.map((dice, i) => {
                    return (
                        <div key={i} className="dice">
                            <p>{dice.roll}</p>
                            d{dice.value}
                        </div>
                    );
                })}
            </div>
            
            <AccentButton title='Кинуть' className={"roll-button"} handleClick={rollAllDice} />
        </>
    );
}

export default DiceRoller;