import React from "react";
import { useNavigate } from "react-router-dom"

import Header from "../components/Header";

const LoginCompleteFunc = () => {
    const navigate = useNavigate();

    navigate('/characterSheetTest');
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

                    <button onClick={LoginCompleteFunc}>
                        Перейти на страницу листа персонажа
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;