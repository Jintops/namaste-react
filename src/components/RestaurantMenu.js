import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";




const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API)

        const json = await data.json();
        console.log("josn.data.cards", json.data.cards)

        {
            json.data.cards.map((card) => {
                let data = card?.card?.card?.info;
                console.log('data : ', data);
                if (data?.id === resId) {

                    setResInfo(data);
                    // The map function continues even after finding the item, 
                    // but you can return a specific value to signal the found item if needed.
                }
            });

            //    setResInfo(json.data.cards[)
            // console.log("resinfo", resInfo)
        }
    };


    // const info = resInfo?.cards?.[5]?.card?.card?.info || {};i

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
