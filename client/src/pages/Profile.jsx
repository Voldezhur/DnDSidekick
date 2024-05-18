// Импорт функционала
import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Импорт компонентов
import Header from "../components/Header";

// Импорт контекста
import { useCookies } from "react-cookie";


const Profile = () => {
    const [cookies, setCookie] = useCookies('user');

    const navigate = useNavigate();  // Для переключения на страницу авторизации после логаута

    return(
        <>
            <Header />
            <div className="profile-flex">
                <div className="profile-info">
                    <p>Имя пользователя из куки: {cookies.user.user_id}</p>
                </div>
            </div>
            <button className="logout-button" onClick={() => {
                setCookie('user', null);
                navigate('/register');
            }}>Выйти из аккаунта</button>
        </>
    );
}

export default Profile;