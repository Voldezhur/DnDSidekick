import React from "react";

const Dice = ({ handleClick, value }) => {
    return (
        <button className="dice" onClick={() => {handleClick(value)}}>
            <p>{value}</p>
        </button>
    );
}

export default Dice;