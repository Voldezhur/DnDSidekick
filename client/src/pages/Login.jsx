// Импорт функционала
import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

// Импорт компонентов
import Header from "../components/Header";


const Register = () => {
    const navigate = useNavigate();  // Для переключения на домашнюю страницу после авторизации
    
    const [cookies, setCookie] = useCookies(['user']);  // Подгружаем куки
    
    // Состояния ввода логина и пароля
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/user/login', {user_name: username, password: password})
        .then((response) => {
            setCookie('user', response.data.user, {maxAge: 3600});  // Авторизовываем пользователя на 1 час
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
                <label className="auth-form-title">Авторизация</label>

                <label>Логин</label>
                <input onChange={(e) => {setUsername(e.target.value)}}></input>

                <label>Пароль</label>
                <input onChange={(e) => {setPassword(e.target.value)}}></input>

                <button type="submit">Авторизоваться</button>
            </form>

            <div className="auth-alt-flex">
                <Link to={"/register"}>
                    <button className="already-auth-button">Еще не зарегистрированы? Зарегистрируйтесь</button>
                </Link>
            </div>
        </>
    );
}

export default Register;