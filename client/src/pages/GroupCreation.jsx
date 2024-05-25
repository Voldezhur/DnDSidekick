// Импорт функционала
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

// Импорт компонентов
import Header from "../components/Header";
import CharacterCreationInput from "../components/CharacterCreation/CharacterCreationInput";
import AddingCharacters from "../components/GroupCreation/AddingCharacters";


const GroupCreation = () => {
    const [cookies] = useCookies();  // Подгружаем куки
    const [groupName, setGroupName] = useState('new_group');
    const [characters, setCharacters] = useState([]);

    const navigate = useNavigate();

    const saveGroup = () => {
        axios.post('http://localhost:8000/group/newGroup', {dm_id: cookies.user.user_id, group_name: groupName, characters: characters})  // Сохраняем группу с айди авторизованного пользователя в качестве дма
        .then((response) => {
            console.log(response);
            navigate('/home');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return(
        <>
            <Header />
        
            <p className="section-title">Шаг 1. Название группы</p>

            <div className="step-flex">
                <div className="inputs-flex">
                    <CharacterCreationInput title={"Название группы"} setProperty={setGroupName} />
                </div>
                <div className="step-info">
                    Придумайте название группе
                </div>
            </div>

            <p className="section-title">Шаг 2. Добавьте игроков в группу</p>

            <div className="step-flex">
                <div className="inputs-flex">
                    <AddingCharacters setCharacters = {setCharacters} />
                </div>
                <div className="step-info">
                    <p className="step-info-title">Добавьте персонажей в группу</p>
                    Для этого используйте код персонажа
                </div>
            </div>

            <div className="buttons-flex">
                <button className="" onClick={saveGroup}>Создать группу</button>
            </div>
        </>
    );
}

export default GroupCreation;