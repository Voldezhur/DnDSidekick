import Home from "../pages/Home";
import Login from "../pages/Login";
import CharacterPage from "../pages/CharacterPage";
import CharacterCreation from "../pages/CharacterCreation";
import MainPage from "../pages/MainPage";
import Compendium from "../pages/Compendium";
import Error from "../pages/Error";

export const mainRoutes = [
    { path: '/', element: <Home />, exact: true },
    { path: '/login', element: <Login />, exact: true },
    { path: '/characterSheet/:characterId', element: <CharacterPage />, exact: true },
    { path: '/characterCreation', element: <CharacterCreation />, exact: true },
    { path: '/home', element: <MainPage />, exact: true },
    { path: '/compendium', element: <Compendium />, exact: true },
    { path: '*', element: <Error />, exact: true }
]