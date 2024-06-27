import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";




const RestaurantMenu = () => {

    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwo } = resInfo;

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
            <h3>{costForTwo}</h3>
            <h2>Menu</h2>
            <ul>
                <li>Biriyani</li>
                <li>Burger</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;
