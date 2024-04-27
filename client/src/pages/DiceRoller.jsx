import React, { useState } from "react";
import Header from "../components/Header";
import Dice from "../components/Dice"

const DiceRoller = () => {
    const [selectedDice, setSelectedDice] = useState([20]);
    
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
        </>
    );
}

export default DiceRoller;