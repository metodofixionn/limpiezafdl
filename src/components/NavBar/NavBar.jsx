import './NavBar.css'
import fdl from '../../assets/fdl.png'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

    const NavBar = () => {
        return (
            <header>
                <Link to={"/"}>
                    <img className='logo' src= {fdl}  alt="logo" />
                </Link>
                <h1>FDL Limpieza</h1>

                

                <nav>
                    <ul>
                        <li>
                            <NavLink to={`/categoria/2`}> Lavanderia </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/categoria/3`}> Desengrasantes </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/categoria/4`}> Pisos </NavLink>
                        </li>
                        <li>
                            <NavLink to={`/categoria/5`}> Limpieza General </NavLink>
                        </li>

                    </ul>
                </nav>

                <CartWidget />

            </header>
)
}
    
export default NavBar