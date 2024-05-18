import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CharacterPage from "../pages/CharacterPage";
import CharacterCreation from "../pages/CharacterCreation";
import MainPage from "../pages/MainPage";
import Compendium from "../pages/Compendium";
import Profile from "../pages/Profile";
import GroupCreation from "../pages/GroupCreation";
import Error from "../pages/Error";
import GroupPage from "../pages/GroupPage";

export const mainRoutes = [
    { path: '/', element: <Home />, exact: true },
    { path: '/login', element: <Login />, exact: true },
    { path: '/register', element: <Register />, exact: true },
    { path: '/characterSheet/:characterId', element: <CharacterPage />, exact: true },
    { path: '/characterCreation', element: <CharacterCreation />, exact: true },
    { path: '/home', element: <MainPage />, exact: true },
    { path: '/compendium', element: <Compendium />, exact: true },
    { path: '/profile', element: <Profile />, exact: true },
    { path: '/groupCreation', element: <GroupCreation />, exact: true },
    { path: '/groupPage/:groupId', element: <GroupPage />, exact: true },
    { path: '*', element: <Error />, exact: true }
]