import { FC, useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import menuService from "../../services/menu.service";

export interface ITMenuItemInterface {
    name: string;
    description: string;
    /* ingredients: Array<string>; */
    price: number;
    isActive: boolean;
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


    return (<div>
        <h3>Menu Restaurant</h3>

        {!menu && ("The menu is updating, sorry for the inconveniences")}
        {menu?.map(item => {
            return (
                <MenuItem key={item._id} item={item} />
            )
        })}

    </div>);
}

export default MenuRestaurant;