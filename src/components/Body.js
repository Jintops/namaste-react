import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MENU_API } from "../utils/constants";
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
 const data =await fetch(MENU_API )
 
   const json =await data.json();
   console.log(json);
   setListOfRestaurants(json?.data?.cards);
   setFilteredRestaurant(json?.data?.cards);
    
   };

   const onlineStatus=useOnlineStatus();
   if(onlineStatus===false) return <h1>Looks like you are offline!! please check your internet connection</h1>
   
   //conditional Rendering

    return listOfRestaurants?.length===0 ? <Shimmer/ > : (
        <div className="body">
            <div className="filter">
              
              {/* search restaurant */}

                <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button onClick={()=>{
                  const filteredRestaurant=  listOfRestaurants.filter((res)=>
                        res?.card?.card?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
                    );
                   setFilteredRestaurant(filteredRestaurant);
                    console.log(searchText)
                }}>Search</button>

                </div>


         {/* top rated restaurant */}

               <button className="filter-btn" onClick={()=>{
               const fileredList=listOfRestaurants.filter((res)=>
                res.card?.card?.info?.avgRating>4.2
               )
             setFilteredRestaurant(fileredList); 
               }}>Top rated restaurant</button>
         </div>


        <div className="res-container">
     {
        filteredRestaurant.map((restaurant)=>(
            restaurant.card?.card?.info?
           <Link key={restaurant.card?.card?.info?.id} to={"/restaurants/"+restaurant.card?.card?.info?.id}> <RestaurantCard  resData={restaurant}/></Link>:''
        ))
     }
        </div> 
        </div>
    )
}

export default Body;