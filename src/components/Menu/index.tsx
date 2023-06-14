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
    isSpecial: boolean;
    image: string;
    _id: number;
}

interface MenuRestaurantProps {
    isActive: boolean;
    isSpecial: boolean;
  }
  
type MenuItemsInterface = Array<ITMenuItemInterface>

const MenuRestaurant: FC<MenuRestaurantProps> = ({isActive, isSpecial}) => {

    const [menu, setMenu] = useState<MenuItemsInterface | undefined>(undefined);

    const getMenu = async (): Promise<ITMenuItemInterface[]> => {
        //Get Special and actived.
        if (isActive === true && isSpecial=== true) {
            const response = await menuService.getAllSpecial();
            console.log(response);
            setMenu(response.data)
            return response.data;

        // Get All Data Active
        } else if( isActive === true && isSpecial === false) {
            const response = await menuService.getAllActive();
            console.log(response);
            setMenu(response.data)
            return response.data;

        // Get All Data
        } else {
            const response = await menuService.getAll();
            console.log(response);
            setMenu(response.data)
            return response.data;
        }
    }

    useEffect(() => {
        getMenu()
    }, [])


    return (
        <>
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