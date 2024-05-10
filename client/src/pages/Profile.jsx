// Импорт функционала
import { React, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Импорт компонентов
import Header from "../components/Header";

// Импорт контекста
import { UserContext } from "../App";  // Контекст авторизованного пользователя


const Profile = () => {
    const {user, setUser} = useContext(UserContext);  // Подгружаем контекст авторизованного пользователя
    
    const navigate = useNavigate();  // Для переключения на страницу авторизации после логаута

    return(
        <>
            <Header />
            <div className="profile-flex">
                <div className="profile-info">
                    <p>Имя пользователя: {user.user_name}</p>
                </div>
            </div>
            <button className="logout-button" onClick={() => {
                setUser(null);
                navigate('/register');
            }}>Выйти из аккаунта</button>
        </>
    );
}

export default Profile;