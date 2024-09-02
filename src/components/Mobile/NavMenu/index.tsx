import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import './style.css';

const NavMenu: FC/* <NavMenuProps> */ = () => {
    const { user, isAuthenticated } = useAuth0();

    const adminName = import.meta.env.VITE_ADMIN_EMAIL;

    return (
        <nav className="nav-menu_container">
            {/* No register */}
            {isAuthenticated === false && (
                <>
                    <Link className="nav_link" to={'/menu'}> <img className="menu-icon" src="/sushi.png" alt="menu sushi icon" /> </Link>
                    <Link className="nav_link" to={'/'}> <img className="menu-icon" src="/logo/sombrero-de-bambu.png" alt="logo asian taste" /></Link>
                    <a className="link-tel" href="tel:+34678567876"><img src="./call.png" alt="call icon" /></a>
                    <button className="btn-icon"><img src="./cart.png" alt="cart icon" /></button>
                </>
            )}


            {/* Client */}
            {isAuthenticated === true && user?.email !== adminName && (
                <>
                    <Link className="nav_link" to={'/client'}> Profile</Link>
                    <Link className="nav_link" to={'/client/reservas'}> Mis reservas </Link>
                    <Link className="nav_link" to={'/client/pedidos'}> Mis pedidos </Link>
                </>
            )}
            {/* Admin */}
            {isAuthenticated === true && user?.email === adminName && (
                <>
                    <Link className="nav_link" to={'/admin'}> Main Panel</Link>
                    <Link className="nav_link" to={'/Reservas'}> Reservas </Link>
                    <Link className="nav_link" to={'/LocalDelivery'}> Pedidos </Link>
                </>
            )}
        </nav>
    );
}

export default NavMenu;