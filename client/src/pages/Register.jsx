import React, { useContext, useState } from "react";

import Header from "../components/Header";
import { UserContext } from "../App";
import { Link } from "react-router-dom";

const Register = () => {
    const {user, setUser} = useContext(UserContext);
    
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(username + ' ' + password);
    }

    return (
        <>
            <Header />

            <form className="main-form" onSubmit={handleSubmit}>
                <label>Логин</label>
                <input onChange={(e) => {setUsername(e.target.value)}}></input>

                <label>Пароль</label>
                <input onChange={(e) => {setPassword(e.target.value)}}></input>

                <button type="submit" className="register-button">Зарегистрироваться</button>
            </form>

            <Link to={"/login"}>
                <button className="already-auth-button">Уже зарегистрированы? Авторизуйтесь</button>
            </Link>
        </>
    );
}

export default Register;