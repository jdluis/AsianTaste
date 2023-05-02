import { FC, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';

interface userLogged {
    type: string,
    name: string,
    id: number
}

const NavMenu: FC/* <NavMenuProps> */ = () => {
    const [userLogged, setUserLogged] = useState<userLogged | undefined>(undefined);

    return (
        <nav className="nav-menu_container">
            {/* No register */}
            {userLogged === undefined && (
                <>
                    <Link className="nav_link" to={'/menu'}> <img className="menu-icon" src="/sushi.png" alt="menu sushi icon" /> </Link>
                    <Link className="nav_link" to={'/'}> <img className="menu-icon" src="/logo/sombrero-de-bambu.png" alt="logo asian taste" /></Link>
                    <a href="tel:+34678567876">Call</a>
                </>
            )}


            {/* Client */}
            {userLogged?.type === 'client' && (
                <>
                    <Link className="nav_link" to={'/:name/profile'}> Profile</Link>
                    <Link className="nav_link" to={'/:name/reservas'}> Mis reservas </Link>
                    <Link className="nav_link" to={'/:name/pedidos'}> Mis pedidos </Link>
                </>
            )}
            {/* Admin */}
            {userLogged?.type === 'admin' && (
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