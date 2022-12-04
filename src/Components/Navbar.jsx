import { NavLink } from "react-router-dom"
const Navbar = () => {
return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <a className="navbar-brand"  href="#">instaYA</a>
        <div id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink style={
                    ({isActive})=>({color: isActive? 'blue': 'black'})
                }
                 className="nav-link activate" to="/">Inicio</NavLink>
                </li>
                <li className="nav-item">
                <NavLink style={
                    ({isActive})=>({color: isActive ? 'blue': 'black'})
                }
                className="nav-link activate" to="/Nosotros">Nosotros</NavLink>
                </li>
                <li className="nav-item">
                <NavLink style={
                    ({isActive})=>({color: isActive ? 'blue': 'black'})
                }
                className="nav-link activate" to="/Contactenos">Contactenos</NavLink>
                </li>
                <li className="nav-item">
                <NavLink style={
                    ({isActive})=>({color: isActive ? 'blue': 'black'})
                }
                className="nav-link activate" to="/Privacidad">Politicas de privacidad</NavLink>
                </li>
                <li className="nav-item">
                <NavLink style={
                    ({isActive})=>({color: isActive ? 'blue': 'black'})
                } 
                className="nav-link activate" to="/Login">Inicio de sesion</NavLink>
                </li>
            </ul>
        </div>
    </div>
    </nav>
    )
}
export default Navbar