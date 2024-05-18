// Импорт функционала
import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

// Импорт компонентов
import Header from "../components/Header";


const Register = () => {
    const [cookies, setCookie] = useCookies(['user']);  // Подгружаем куки
    
    const navigate = useNavigate();  // Для перехода на главную страницу после регистрации
    
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Ищем пользователя по логину и паролю
        axios.post('http://localhost:8000/user/register', {user_name: username, password: password})
        .then((response) => {
            console.log(response);
            setCookie('user', response.data.newUser, {maxAge: 3600});  // Авторизовываем пользователя на 1 час
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
                <label className="auth-form-title">Регистрация</label>

                <label>Логин</label>
                <input onChange={(e) => {setUsername(e.target.value)}}></input>

                <label>Пароль</label>
                <input onChange={(e) => {setPassword(e.target.value)}}></input>

                <button type="submit">Зарегистрироваться</button>
            </form>

            <div className="auth-alt-flex">
                <Link to={"/login"}>
                    <button className="already-auth-button">Уже зарегистрированы? Авторизуйтесь</button>
                </Link>
            </div>
        </>
    );
}

export default Register;