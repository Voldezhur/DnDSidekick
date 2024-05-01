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
            <div className="header-flex">
                <Link to='/mainPage' className="page-link">
                    D&D Sidekick
                </Link>
                <Link to='/characterCreation' className="page-link">
                    Создатель персонажей
                </Link>
                <Link to='/compendium' className="page-link">
                    Справочник
                </Link>
                <ProfileIcon />
            </div>
        </header>
    );
}