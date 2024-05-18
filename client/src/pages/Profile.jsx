// Импорт функционала
import { React } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

// Импорт компонентов
import Header from "../components/Header";


const Profile = () => {
    const [cookies, setCookie] = useCookies();  // Подгружаем куки

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
                navigate('/');
            }}>Выйти из аккаунта</button>
        </>
    );
}

export default Profile;