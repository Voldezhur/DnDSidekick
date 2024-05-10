// Импорт функционала
import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";


export default function Header () {
    const {user} = useContext(UserContext);

    return (
        <header>
            <div className="header-flex">
                {user === null
                    ? 
                        <>
                            <Link to='/register' className="page-link">
                                D&D Sidekick
                            </Link>
                            <Link to='/register' className="page-link">
                                Регистрация
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
                                {user.user_name}
                            </Link>
                        </>
                }
            </div>
        </header>
    );
}