import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";


function ProfileIcon () {
    return (
        <img src="../icons/profile.svg" alt="Профиль" />
    );
}


export default function Header () {
    const {user, setUser} = useState(UserContext);

    return (
        <header>
            <div className="header-flex">
                <Link to='/home' className="page-link">
                    D&D Sidekick
                </Link>
                <Link to='/characterCreation' className="page-link">
                    Создатель персонажей
                </Link>
                <Link to='/compendium' className="page-link">
                    Справочник
                </Link>

                {user
                    ? <ProfileIcon />
                    : 
                    <Link to='/register' className="page-link">
                        Регистрация
                    </Link>
                }
            </div>
        </header>
    );
}