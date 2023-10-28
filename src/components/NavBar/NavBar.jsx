import { Link, NavLink } from "react-router-dom"
import logoTienda from './assets/tecno-tienda.svg'
import CartWidget from '../CartWidget/CartWidget'
import classes from './navBar.module.css'

const NavBar = () => {
    return(
        <nav className={classes.navBar}>
            <Link to={'/'}>
                <img className={classes.imageLink} src={logoTienda} alt="Logo Tecno-Tienda" />
            </Link>
            <section className={classes.nav}>
                <NavLink to={'/category/motherboards'} className={({ isActive }) => isActive ? `${classes.navLink} ${classes.current}` : classes.navLink}>Motherboards</NavLink>
                <NavLink to={'/category/videocards'} className={({ isActive }) => isActive ? `${classes.navLink} ${classes.current}` : classes.navLink}>Video Cards</NavLink>
                <NavLink to={'/category/processors'} className={({ isActive }) => isActive ? `${classes.navLink} ${classes.current}` : classes.navLink}>Processors</NavLink>
                <NavLink to={'/category/ram'} className={({ isActive }) => isActive ? `${classes.navLink} ${classes.current}` : classes.navLink}>RAM</NavLink>
            </section>
            <CartWidget/>
        </nav>
    )
}

export default NavBar