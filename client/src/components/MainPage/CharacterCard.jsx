import React from "react";

import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
    return (
        <li className="character-card">
            <div className="character-meta">
                <div className="card-buttons">
                    <Link to={"/characterSheet/" + character.character_id}>
                        <button>Перейти на страницу</button>
                    </Link>
                    <button onClick={() => {alert("Код персонажа: " + character.character_id)}}>
                        Поделиться персонажем
                    </button>
                </div>
                <div className="name-and-class">
                    <p className="title">{character.name.split(' ')[0]}</p>
                    <p className="info">{character.class_id}</p>
                </div>
            </div>
        </li>
    );
}

export default CharacterCard;