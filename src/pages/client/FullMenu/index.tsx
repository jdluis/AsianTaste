import { FC, useState, useEffect } from "react";
import menuService from "../../../services/menu.service";
import { ITMenuItemInterface } from "../../../components/Menu";
import MenuThumbnail from "../../../components/Menu/MenuThumbnail";
import './style.css';

interface FullMenuProps { }

type MenuItemsInterface = Array<ITMenuItemInterface>

const FullMenu: FC<FullMenuProps> = () => {

    const [menu, setMenu] = useState<MenuItemsInterface | undefined>(undefined);

    const getMenu = async (): Promise<ITMenuItemInterface[]> => {
        const response = await menuService.getAllActive();
        console.log(response);
        setMenu(response.data)
        return response.data;
    }

    useEffect(() => {
        getMenu()
    }, [])


    return (
        <div className="fullMenu-container">
            <div className="title_container">
                <h2 className="title">Menu</h2>
            </div>
            <div className="menu-container">
                <div className="logo-container">
                    <img src="./logo/sombrero-de-bambu.png" alt="logo" />
                </div>
                <div className="category-container">
                    <div>
                        <h4>Special Menu</h4>
                        <div>
                            {!menu && ("The menu is updating, sorry for the inconveniences")}
                            {menu?.filter(item => item.isSpecial === true).map(item => {
                                return (
                                    <MenuThumbnail key={item._id} item={item} />
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h4>Principal </h4>
                        <div>
                            {!menu && ("The menu is updating, sorry for the inconveniences")}
                            {menu?.filter(item => item.category === 'principal' && item.isSpecial === false).map(item => {
                                return (
                                    <MenuThumbnail key={item._id} item={item} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="category-container">
                    <div>
                        <h4>Secundary</h4>
                        <div>
                            {!menu && ("The menu is updating, sorry for the inconveniences")}
                            {menu?.filter(item => item.category === 'secundary').map(item => {
                                return (
                                    <MenuThumbnail key={item._id} item={item} />
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h4>Drinks</h4>
                        <div>
                            {!menu && ("The menu is updating, sorry for the inconveniences")}
                            {menu?.filter(item => item.category === 'drinks').map(item => {
                                return (
                                    <MenuThumbnail key={item._id} item={item} />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <footer className="menu-footer">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores facere tempora beatae dolore doloribus fuga nesciunt praesentium vitae obcaecati consectetur.</p>

                   <h5>www.asiantaste.com</h5> 
                </footer>
            </div>
        </div>
    );
}

export default FullMenu;