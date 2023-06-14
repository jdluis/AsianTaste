import { FC } from "react";
import MenuRestaurant from "../../../components/Menu";

interface FullMenuProps {}
 
const FullMenu: FC<FullMenuProps> = () => {
    return ( 
        <div>
            <div>
                <h2>Full Menu</h2>
            </div>
            <MenuRestaurant isActive={false} isSpecial={false} />
        </div>
     );
}
 
export default FullMenu;