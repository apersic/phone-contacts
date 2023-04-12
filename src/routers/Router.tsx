import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<HomePage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;