// Импорт функционала
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

// Импорт компонентов
import Header from "../components/Header";


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

            {/*
                Первый шаг создания персонажа:
                . Имя
                . Краткая предыстория
            */}
        
            <p className="section-title">Шаг 1. Название группы</p>

            <div className="step-flex">
                <div className="inputs-flex">
                    <input onChange={(e) => {setGroupName(e.target.value)}}></input>
                </div>
                <div className="step-info">
                    <p className="step-info-title">Придумайте название</p>
                </div>
            </div>

            <button onClick={saveGroup}>Создать группу</button>
        </>
    );
}

export default GroupCreation;