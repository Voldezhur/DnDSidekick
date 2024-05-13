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
                    <p className="title">{character.name.split(' ')[0]}</p>
                    <p className="info">{character.class_id}</p>
                </div>
            </div>
        </li>
    );
}

export default CharacterCard;