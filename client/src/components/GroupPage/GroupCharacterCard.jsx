// Импорт функционала
import { React, useEffect } from "react";
import useFetching from "../../hooks/useFetching";


const GroupCharacterCard = ({ character_id }) => {
    const [fetchCharacter, character] = useFetching("http://localhost:8000/character/character_id/" + character_id);
    
    useEffect(() => {
        fetchCharacter();
    }, [])

    return (
        <div className="character-card">
            {character.name}
        </div>
    );
}

export default GroupCharacterCard;