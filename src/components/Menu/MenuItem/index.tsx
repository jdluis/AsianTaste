import { FC } from "react";
import { ITMenuItemInterface } from "..";
import './style.css'
interface ITMenuItem {
    item: ITMenuItemInterface
}

const MenuItem: FC<ITMenuItem> = ({ item }) => {
    return (
        <div className="item_container">
            <div className="img_container">
                <img width={'200px'} src={item.image} alt={item.name} />
            </div>
            <div>
                <h4>{item.name}</h4>
                <p className="description">{item.description}</p>
                <p><span>{item.price} Euros</span></p>
            </div>
        </div>);
}

export default MenuItem;