import {Routes, Route} from "react-router-dom";
import { Main } from "./pages/main";
import { Favorites } from "./pages/favorites";
import { NotFound } from "./pages/not-found";
import { Category } from "./pages/categories";

export const AppRoutes = ({user}) => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/category/:id" element={<Category />} />
        </Routes>
    );
};