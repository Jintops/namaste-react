import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const RestaurantMenu = () => {

    const [resInfo,setResInfo]=useState(null)

    useEffect(()=>{
       fetchMenu();
    },[]);

const fetchMenu = async()=>{
       const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.86530&lng=75.35200&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
       const json=await data.json();
       console.log(json)
       setResInfo(json.data)
};
 
 

    return resInfo===null ? <Shimmer/> : (
        <div className="menu">
            <h1>{resInfo?.cards[3]?.card?.card?.info?.name}</h1>
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
