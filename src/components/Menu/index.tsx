import { FC, useState } from "react";
import MenuItem from "./MenuItem";

export interface MenuItemInterface {
    name: string;
    price: number;
    isActive: boolean;
 }
type MenuItemsInterface = Array<MenuItemInterface>
 
const MenuRestaurant: FC = () => {
    const [menu, setMenu] = useState < MenuItemsInterface | undefined>(undefined);

    return ( <div>
        <h3>Menu Restaurant</h3>
      
        {menu?.map(item => {
            return (
                <MenuItem item = {item} />
            )
        })}
       
    </div> );
}
 
export default MenuRestaurant;