import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";


 const Body = ()=>{

    const [listOfRestaurants,setListOfRestaurants] = useState([])

   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData = async ()=>{
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.86530&lng=75.35200&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null")

   const json =await data.json();
   console.log(json)
   setListOfRestaurants(json?.data?.cards);
    console.log(listOfRestaurants);
   };
   
   //conditional Rendering

   if(listOfRestaurants?.length===0){
    return <Shimmer></Shimmer>
   }
    
    return listOfRestaurants?.length===0 ? <Shimmer/ > : (
        <div className="body">
            <div className="filter">
               <button className="filter-btn" onClick={()=>{
               const fileredList=listOfRestaurants.filter((res)=>
                res.card?.card?.info?.avgRating>4.2
               )
               setListOfRestaurants(fileredList); 
               }}>Top rated restaurant</button>
         </div>
        <div className="res-container">
     {
        listOfRestaurants.map((restaurant)=>(
            restaurant.card?.card?.info?
            <RestaurantCard key={restaurant.card?.card?.info?.id} resData={restaurant}/>:''
        ))
     }
        </div> 
        </div>
    )
}

export default Body;