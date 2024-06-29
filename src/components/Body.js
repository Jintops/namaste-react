import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MENU_API,RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";



 const Body = ()=>{
    

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText]=useState("");

    console.log("body rendered")

   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData = async ()=>{
 const data =await fetch(RES_API)
 
   const json =await data.json();
  //  console.log(json)
   console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
   setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
   };

   const onlineStatus=useOnlineStatus();
   if(onlineStatus===false) return <h1>Looks like you are offline!! please check your internet connection</h1>
   
   //conditional Rendering

    return listOfRestaurants?.length===0 ? <Shimmer /> : (
        <div className="body">
            <div className="flex">
              
              {/* search restaurant */}

                <div className=" ml-2  mt-4 p-2">
                <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button className="px-4 py-2 bg-amber-100 border border-green-300 m-4 rounded-xl text-lg text-opacity-100" onClick={()=>{
                  const filteredRestaurant=  listOfRestaurants.filter((res)=>
                        res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
                    );
                   setFilteredRestaurant(filteredRestaurant);
                    console.log(searchText)
                }}>Search</button>

                </div>
                
         {/* top rated restaurant */}
             <div className=" mt-4 p-4 flex items-center text-lg text-opacity-100">
               <button className="p-3 bg-orange-100 rounded-lg font-serif border border-blue-400 border-solid" onClick={()=>{
               const fileredList=listOfRestaurants.filter((res)=>
                res.info?.avgRating>4.3
               )
             setFilteredRestaurant(fileredList); 
               }}>Top rated restaurant</button>
               </div>
         </div>


        <div className="flex flex-wrap ">
     {
        filteredRestaurant.map((restaurant)=>(
            
           <Link key={restaurant.info?.id} to={"/restaurants/"+restaurant.info?.id}> <RestaurantCard  resData={restaurant}/></Link>
        ))
     }
        </div> 
        </div>
    )
}

export default Body;