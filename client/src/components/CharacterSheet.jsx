import React from "react";

const CharacterSheet = ({ character }) => {
    return (
        <div className="character-sheet">
            {JSON.stringify(character.character_sheet)}
        </div>
    );
}

export default CharacterSheet;