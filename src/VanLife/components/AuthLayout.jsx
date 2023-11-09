import { Navigate, Outlet } from "react-router-dom";

export default function AuthLayout() {
    const authenticated = true;
    if(!authenticated) {
        return <Navigate to="login" state={{message: "You must loggin first"}}/>
    }
    return <Outlet />
}