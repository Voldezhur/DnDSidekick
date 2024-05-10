// Импорт функционала
import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Импорт компонентов
import Header from "../components/Header";

// Импорт контекста
import { UserContext } from "../App";


const GroupCreation = () => {
    const {user} = useContext(UserContext);
    const [groupName, setGroupName] = useState('new_group');
    const [characters, setCharacters] = useState([]);

    const navigate = useNavigate();

    const saveGroup = () => {
        axios.post('http://localhost:8000/group/newCharacter', {dm_id: user.user_id, group_name: groupName, characters: characters})  // Сохраняем группу с айди авторизованного пользователя в качестве дма
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
            <button onClick={saveGroup}>Создать группу</button>
        </>
    );
}

export default GroupCreation;