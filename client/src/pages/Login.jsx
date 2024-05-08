import React, { useContext, useState } from "react";

import Header from "../components/Header";
import { UserContext } from "../App";  // Подгрузка контекста пользователя
import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

const Register = () => {
    const navigate = useNavigate();  // Для переключения на домашнюю страницу после авторизации
    
    const {user, setUser} = useContext(UserContext);
    
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/user/login', {password: password, user_name: username})
        .then((response) => {
            console.log(response.data.user);
            setUser(response.data.user);
            navigate('/home');
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <>
            <Header />

            <form className="main-form" onSubmit={handleSubmit}>
                <label>Логин</label>
                <input onChange={(e) => {setUsername(e.target.value)}}></input>

                <label>Пароль</label>
                <input onChange={(e) => {setPassword(e.target.value)}}></input>

                <button type="submit" className="register-button">Авторизоваться</button>
            </form>

            <Link to={"/register"}>
                <button className="already-auth-button">Еще не зарегистрированы? Зарегистрируйтесь</button>
            </Link>
        </>
    );
}

export default Register;