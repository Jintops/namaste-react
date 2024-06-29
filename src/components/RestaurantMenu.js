import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";




const RestaurantMenu = () => {

    const { resId } = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />

    const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
    // console.log(resInfo?.cards[2]?.card?.card?.info);
    const { itemCards }=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card?.card || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5].card?.card;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card?.card.itemCards[1].card.info.name)
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(',')}</h3>
           
            
            <h2 className="font-bold">Menu</h2>
          <ol>
            {
                itemCards.map((item) => (
                   
                  <li key={item?.card?.info?.id}> {item?.card?.info?.name}-{"Rs."}{item?.card?.info?.price}</li> 
            )
            )
            }
           
           </ol>
        </div>
    )
}

export default RestaurantMenu;
