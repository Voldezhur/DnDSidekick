import React from "react";

import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
    return (
        <li className="character-card">
            <div className="character-meta">
                <div className="portrait-and-button">
                    <p>Портрет</p>
                    <Link to={"/characterSheet/" + character.character_id}>
                        <button>Перейти на страницу</button>
                    </Link>
                </div>
                <div className="name-and-class">
                    <p className="title">{character.character_sheet.name}</p>
                    <p className="info">{character.character_sheet.class}</p>
                </div>
            </div>
        </li>
    );
}

export default CharacterCard;