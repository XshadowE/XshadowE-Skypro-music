import {Routes, Route} from "react-router-dom";
import { Main } from "./pages/main";
import { Favorites } from "./pages/favorites";
import { NotFound } from "./pages/not-found";


export const AppRoutes = ({user}) => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/favorites" element={<Favorites />} />
        </Routes>
    );
};