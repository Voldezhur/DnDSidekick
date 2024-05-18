// Импорт функционала
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import { useCookies } from "react-cookie";


export default function Header () {
    const [cookies, setCookie] = useCookies(['user']);

    return (
        <header>
            <div className="header-flex">
                {cookies.user === null
                    ? 
                        <>
                            <Link to='/' className="page-link">
                                D&D Sidekick
                            </Link>
                            <Link to='/login' className="page-link">
                                Авторизация
                            </Link>
                        </>
                    : 
                        <>
                            <Link to='/home' className="page-link">
                                D&D Sidekick
                            </Link>
                            <Link to='/characterCreation' className="page-link">
                                Создатель персонажей
                            </Link>
                            <Link to='/compendium' className="page-link">
                                Справочник
                            </Link>
                            <Link to='/profile' className="page-link">
                                {cookies.user.user_name}
                            </Link>
                        </>
                }
            </div>
        </header>
    );
}