import { FC } from "react";
import { ITMenuItemInterface } from "..";

interface ITMenuItem {
    item: ITMenuItemInterface
}

const MenuItem: FC<ITMenuItem> = ({ item }) => {
    return (
        <div>
            <h2>Item Menu</h2>
            <p><span>{item.name}</span></p>
            <p><span>{item.price} Euros</span></p>
        </div>);
}

export default MenuItem;