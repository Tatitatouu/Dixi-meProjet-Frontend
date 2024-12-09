import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home/home.js";
import Login from "../pages/SignIn/signIn.js";
import User from "../pages/User/user.js";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/user" element={<User />} />
        </Routes>
    )
}