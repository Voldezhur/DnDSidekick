// Импорт функционала
import { React, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import useFetching from "../hooks/useFetching";

// Импорт компонентов
import Header from "../components/Header";
import DiceRoller from "../components/DiceRoller/DiceRoller";
import GroupCharacterCard from "../components/GroupPage/GroupCharacterCard";


const GroupPage = () => {
    const { groupId } = useParams();    

    const [fetchGroup, group] = useFetching("http://localhost:8000/group/" + groupId);
    const [fetchCharacters, characters] = useFetching("http://localhost:8000/character/characters_in_group/" + groupId);

    const [sessionNote, setSessionNote] = useState('');

    const [cookies] = useCookies();  // Подгружаем куки

    const navigate = useNavigate();

    const saveNote = () => {
        axios.post('http://localhost:8000/group/saveNote', {group_id: groupId, notes: sessionNote})  // Сохраняем группу с айди авторизованного пользователя в качестве дма
        .then((response) => {
            console.log(response);
            navigate('/home');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchGroup();
        fetchCharacters();
    }, []);

    return(
        <>
            <Header />
            <DiceRoller />

            <div className="section-title">{group.group_name}</div>

            <div className="main-page-flex">
                <div className="character-list">
                    {characters.map((character, i) => {return(
                            <GroupCharacterCard key={i} character_id = {character.character_id} dmMode = {cookies.user.user_id == group.dm_id} />
                    );})}
                </div>

                {cookies.user.user_id == group.dm_id &&
                    <div className="session-notes-flex">
                        <input className="session-notes-input" onChange={(e) => {setSessionNote(e.target.value)}} />
                        <button onClick={(e) => {saveNote(e)}}>Сохранить запись</button>
                    </div>
                }
            </div>

            <div className="buttons-flex">
                <button onClick={() => {navigate("/home")}}>Назад</button>
            </div>
        </>
    );
}

export default GroupPage;