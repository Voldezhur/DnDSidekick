import React, { useState } from "react";
import Header from "../components/Header";
import AccentButton from  "../components/UI/AccentButton"

const DiceRoller = () => {
    // Список доступных кубиков
    const availableDiceList = [
        {
            value: 2,
            roll: 2
        },
        {
            value: 4,
            roll: 4
        },
        {
            value: 6,
            roll: 6
        },
        {
            value: 8,
            roll: 8
        },
        {
            value: 10,
            roll: 10
        },
        {
            value: 12,
            roll: 12
        },
        {
            value: 20,
            roll: 20
        },
        {
            value: 100,
            roll: 100
        }
    ]

    // Список выбранных для броска кубиков
    const [selectedDice, setSelectedDice] = useState([]);

    // Объект аудио для проигрывания звука при броске кубиков
    const diceRollSound = new Audio("/home/voldezhur/Desktop/Универ/Курсовая 2/DnDSidekick/client/src/pages/DiceRoller.jsx");

    // Функция для броска одного кубика
    const roll = (d) => {
        return(Math.floor(Math.random() * d + 1));
    }

    // Функция для броска всех выбранных кубиков
    const rollAllDice = () => {
        let newDice = [];

        selectedDice.forEach(dice => {
            newDice = [...newDice, {value: dice.value, roll: roll(dice.value)}];
        });

        // Звук не работает
        // diceRollSound.play();
        setSelectedDice(newDice);
    }

    // Функция добавления кубика с максимальным значением value
    const addDice = (value) => {
        const newDice = [...selectedDice, {value:value, roll:value}];
        console.log(newDice);
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
            <AccentButton title='Очистить' className={"roll-button"} handleClick={() => {setSelectedDice([])}} />
            
            {/* Список кубиков на выбор */}
            <div className="available-dice">
                {availableDiceList.map((dice, i) => {
                    return (
                        <button key={i} onClick={() => {addDice(dice.value)}}>
                            {dice.value}
                        </button>
                    );
                })}
            </div>
        </>
    );
}

export default DiceRoller;