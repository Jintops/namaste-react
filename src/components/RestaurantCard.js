import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";

const RestaurantCard =(props) =>{
    
    const {loggedInUser}=useContext(UserContext)
    const { resData}=props;
  
    // let k = resData;
    // const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData.info
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}= resData?.info ;
    // const name = resData?.card?.card?.info?.name
    // const cuisines = resData?.card?.card?.info?.cuisines
    // const avgRating = resData?.card?.card?.info?.avgRating
    // const costForTwo= resData?.card?.card?.info?.costForTwo
    // const deliveryTime= resData?.card?.card?.info?.deliveryTime
        return(
        <div className="h-[365px] m-2 p-4 w-[230px] bg-gray-200 hover:bg-blue-200 hover:border border-black rounded-md ">
            <img className="rounded-lg"
             alt="res-logo"
              src={CDN_URL+cloudinaryImageId}/>
         <h3 className="font-bold py-3 text-lg">{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>    
        <h4>user:{loggedInUser}</h4> 
        </div>
    )
}

export default RestaurantCard;