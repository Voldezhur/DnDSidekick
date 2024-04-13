import React from "react";
import { Link } from "react-router-dom";


function ProfileIcon () {
    return (
        <img src="../icons/profile.svg" alt="Профиль" />
    );
}


export default function Header () {
    return (
        <header>
            <div class="header-flex">
                <Link to='/' className="page-link">
                    D&D Sidekick
                </Link>
                <Link to='/characterSheetTest' className="page-link">
                    Лист Персонажа
                </Link>
                <span>Информация</span>
                <ProfileIcon />
            </div>
        </header>
    );
}