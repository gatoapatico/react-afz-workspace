import { NavLink, Outlet } from "react-router-dom";

export default function VanLayout() {

    const activeStyle = {
        fontWeigth: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <>
            <nav className="host-nav">
                <NavLink end to="/host" style={({isActive}) => isActive ? activeStyle : null}>Dashboard</NavLink>
                <NavLink to="/host/income" style={({isActive}) => isActive ? activeStyle : null}>Income</NavLink>
                <NavLink to="/host/vans" style={({isActive}) => isActive ? activeStyle : null}>Vans</NavLink>
            </nav>
            <Outlet />
        </>
    )
}