import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState ,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { MENU_API,RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

 const Body = ()=>{
    

    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurant,setFilteredRestaurant]=useState([]);
    const [searchText, setSearchText]=useState("");

    // console.log("body rendered")

   useEffect(()=>{
    fetchData();
   },[]);

   const fetchData = async ()=>{
 const data =await fetch(RES_API)
 
   const json =await data.json();
  //  console.log(json)
  //  console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
   setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
   };

   const onlineStatus=useOnlineStatus();
   if(onlineStatus===false) return <h1>Looks like you are offline!! please check your internet connection</h1>
   

   const {loggedInUser,setUserName}=useContext(UserContext)
   //conditional Rendering

    return listOfRestaurants?.length===0 ? <Shimmer /> : (
        <div className="body">
            <div className="grid grid-cols-12 ml-12">
              
              {/* search restaurant */}

                <div className="  mt-4   col-span-3">
                <input type="text" className="border border-double border-black rounded-lg w-[300px] h-9  px-4 ml-16" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}></input>
                <button className="px-4 py-2 -mx-[50px] my-4 rounded-xl text-lg text-opacity-100" onClick={()=>{
                  const filteredRestaurant=  listOfRestaurants.filter((res)=>
                        res?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
                    );
                   setFilteredRestaurant(filteredRestaurant);
                    console.log(searchText)
                }}> <FontAwesomeIcon icon={faSearch} className="text-red-600 h-5 w-6 " /></button>

                </div>
                
         {/* top rated restaurant */}
             <div className=" mt-4 p-4 flex items-center text-lg text-opacity-100 col-span-4">
               <button className="py-1 px-5 bg-red-600 rounded-lg font-serif border border-red-400 border-solid text-white" onClick={()=>{
               const fileredList=listOfRestaurants.filter((res)=>
                res.info?.avgRating>4.4
               )
             setFilteredRestaurant(fileredList); 
               }}>Show Top Rated Restaurant⭐</button>
               </div>


               {/* <div className="m-4 p-4 flex items-center">
                <label>User Name: </label>
               <input className="border border-black p-4" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>
               </div> */}


         </div>


        <div className="mx-28 mt-6 grid grid-cols-5 mb-10 ">
     {
        filteredRestaurant.map((restaurant)=>(
            
          <div className=""> <Link key={restaurant.info?.id} to={"/restaurants/"+restaurant.info?.id}> <RestaurantCard  resData={restaurant}/></Link></div>
        ))
     }
        </div> 
        </div>
    )
}

export default Body;