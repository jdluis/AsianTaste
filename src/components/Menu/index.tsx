import { FC, useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import menuService from "../../services/menu.service";
import './style.css'
export interface ITMenuItemInterface {
    name: string;
    description: string;
    /* ingredients: Array<string>; */
    price: number;
    isActive: boolean;
    image: string;
    _id: number;
}
type MenuItemsInterface = Array<ITMenuItemInterface>

const MenuRestaurant: FC = () => {

    const [menu, setMenu] = useState<MenuItemsInterface | undefined>(undefined);

    const getMenu = async (): Promise<ITMenuItemInterface[]> => {
        const response = await menuService.getAll();
        console.log(response);
        setMenu(response.data)
        return response.data;
    }

    useEffect(() => {
        getMenu()
    }, [])


    return (
        <>
            <div className="text_container">
                <h2>Chef's species</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, voluptatem sint quisquam provident quod nobis?</p>
            </div>

            <div className="menu-list_container">
                {!menu && ("The menu is updating, sorry for the inconveniences")}
                {menu?.map(item => {
                    return (
                        <MenuItem key={item._id} item={item} />
                    )
                })}
            </div>
        </>);
}

export default MenuRestaurant;