import React, { useState } from "react";
import Header from "../components/Header";
import Dice from "../components/Dice"
import AccentButton from  "../components/UI/AccentButton"

const DiceRoller = () => {
    const [selectedDice, setSelectedDice] = useState([20]);  // Список выбранных для броска кубиков

    return (
        <>
            <Header />
            <div className="selected-dice">
                {selectedDice.map((value) => {
                    return (
                        <Dice value={value} />
                    );
                })}
            </div>
            <AccentButton title='Кинуть' className={"roll-button"} />
        </>
    );
}

export default DiceRoller;