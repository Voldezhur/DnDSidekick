// Импорт функционала
import React from "react";
import { Link } from "react-router-dom";

// Импорт компонентов
import Header from "../components/Header";
import AccentButton from "../components/UI/AccentButton";


const Home = () => {
    return (
        <>
        <Header />

        <div className="landing-flex">
            <h1>Добро пожаловать в D&D Sidekick</h1>

            <p>
                Легковесный сервис для совместной игры в D&D
            </p>

            <div className="landing-graphic-flex">
                <div className="landing-graphic">
                    Создайте персонажа
                </div>
                <div className="landing-graphic">
                    Присоединитесь к группе
                </div>
                <div className="landing-graphic">
                    Отправляйтесь к приключениям
                </div>
            </div>

            <Link to='/login' className="page-link">
                <AccentButton title={"Авторизоваться"} />
            </Link>
        </div>
        </>
    );
}

export default Home;