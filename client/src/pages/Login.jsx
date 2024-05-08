// Импорт функционала
import { React, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// Импорт компонентов
import Header from "../components/Header";

// Импорт контекста
import { UserContext } from "../App";  // Контекст авторизованного пользователя


const Register = () => {
    const navigate = useNavigate();  // Для переключения на домашнюю страницу после авторизации
    
    const {user, setUser} = useContext(UserContext);  // Подгружаем контекст авторизованного пользователя
    
    // Состояния ввода логина и пароля
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/user/login', {user_name: username, password: password})
        .then((response) => {
            setUser(response.data.user);  // Присваиваем контексту авторизованного пользователя полученного пользователя
            navigate('/home');  // Переходим на домашнюю страницу после авторизации
        })
        .catch((error) => {
            console.log(error.response);
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