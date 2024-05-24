// Импорт функционала
import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetching from "../hooks/useFetching";

// Импорт компонентов
import Header from "../components/Header";
import DiceRoller from "../components/DiceRoller/DiceRoller";
import GroupCharacterCard from "../components/GroupPage/GroupCharacterCard";


const GroupPage = () => {
    const { groupId } = useParams();    

    const [fetchGroup, group] = useFetching("http://localhost:8000/group/" + groupId);
    const [fetchCharacters, characters] = useFetching("http://localhost:8000/character/characters_in_group/" + groupId);

    useEffect(() => {
        fetchGroup();
        fetchCharacters();
    }, []);

    return(
        <>
            <Header />
            <DiceRoller />

            {group.group_id}

            {characters.map((character, i) => {return(
                <div key={i} className="character-list">
                    <GroupCharacterCard character_id = {character.character_id} />
                </div>
            );})}
        </>
    );
}

export default GroupPage;