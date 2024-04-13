import React from "react";
import { useNavigate } from "react-router-dom"

import Header from "../components/Header";

const LoginButton = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/characterSheetTest');
    }

    return (
        <button onClick={handleClick}>
            Перейти на страницу листа персонажа
        </button>
    );
}

const Login = () => {
    return (
        <>
            <Header />

            <div className="horizontal-flexbox center-flex">
                <div className="login-main-flex center-screen">
                    <img src=".../public/favicon.ico" alt="websiteLogo" />
                    
                    <span className="login-greetings-text">
                        D&D Sidekick
                    </span>

                    <input></input>

                    <button onClick={() => {window.location.href = '/'}}>

                    </button>
                    <LoginButton />
                </div>
            </div>
        </>
    );
}

export default Login;