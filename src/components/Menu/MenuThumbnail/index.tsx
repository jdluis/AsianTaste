import { FC } from "react";
import { ITMenuItemInterface } from "..";
import './style.css'

interface ITMenuItem {
    item: ITMenuItemInterface
}

const MenuThumbnail: FC<ITMenuItem> = ({ item }) => {
    return (
        <div className="thumbnail-container">
            <div className="image-container">
                <img width={'50px'} src={item.image} alt={item.name} />
            </div>
            <div className="text-container">
                <div className="text-flex">
                    <h4>{item.name}</h4>
                    <p className="menu_item-price"><span>{item.price}</span>€</p>
                </div>
                <div>
                    <p className="description">{item.description}</p>
                </div>
            </div>
        </div>);
}

export default MenuThumbnail;