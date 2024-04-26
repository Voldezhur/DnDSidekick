import React from "react";

const CharacterCard = ({ character }) => {
    return (
        <li className="character-card">
            <div className="character-meta">
                <div className="portrait-and-button">
                    <p>Портрет</p>
                    <button>Перейти на страницу</button>
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