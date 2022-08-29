import { Route, Routes } from "react-router-dom";
import { Overview } from "../pages/Overview";
import { routes } from "./routes";

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route => (
                <Route
                    path={route.path}
                    element={<route.element />}
                    key={route.id}
                />
            ))}
            <Route
                path='*'
                element={<Overview />}
            />
        </Routes>
    )
}
