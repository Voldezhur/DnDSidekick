import React, { useState } from "react";

const Dice = ({ value }) => {
    const [diceRoll, setDiceRoll] = useState(value);
    
    const roll = () => {
        setDiceRoll(Math.floor(Math.random() * (value) + 1));
    }

    return (
        <>
            <div className="dice" onClick={roll}>
                {diceRoll}
            </div>
        </>
    );
}

export default Dice;