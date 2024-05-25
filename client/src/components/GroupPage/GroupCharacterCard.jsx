// Импорт функционала
import { React, useEffect } from "react";
import useFetching from "../../hooks/useFetching";


const GroupCharacterCard = ({ character_id, dmMode }) => {
    const [fetchCharacter, character] = useFetching("http://localhost:8000/character/character_id/" + character_id);

    useEffect(() => {
        fetchCharacter();
    }, [])

    return (
        <div className="character-card">
            <div className="group-character-card-flex">
                <p className="character-card-name">{character.name}</p>
                {dmMode &&
                    <button>Удалить</button>
                }
            </div>
        </div>
    );
}

export default GroupCharacterCard;