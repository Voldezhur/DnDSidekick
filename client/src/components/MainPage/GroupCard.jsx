import React from "react";

const GroupCard = ({ name }) => {
    return (
        <li className="group-card">
            <h1>{name}</h1>
        </li>
    );
}

export default GroupCard;