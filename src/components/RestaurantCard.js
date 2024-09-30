import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";

const RestaurantCard =({resData}) =>{
    
    const {loggedInUser}=useContext(UserContext)
    
  
    // let k = resData;
    // const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData.info
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}= resData?.info ;
    // const name = resData?.card?.card?.info?.name
    // const cuisines = resData?.card?.card?.info?.cuisines
    // const avgRating = resData?.card?.card?.info?.avgRating
    // const costForTwo= resData?.card?.card?.info?.costForTwo
    // const deliveryTime= resData?.card?.card?.info?.deliveryTime
        return(
            <div className="h-[300px] w-[230px] bg-gray-100  my-3  rounded-md transform transition-transform duration-300 hover:scale-105 shadow-md shadow-gray-400">
            <div>
              <img
                className="rounded-lg w-[230px] h-[160px]"
                alt="res-logo"
                src={CDN_URL + cloudinaryImageId}
              />
            </div>
            <div className="mx-2">
              <h3 className="font-bold text-lg">{name}</h3>
              <h4>{cuisines.join("-")}</h4>
              </div>
               <div className="flex">
              <h4 className="font-bold">⭐{avgRating}</h4>
              <h4 className="mx-1 font-bold">- {costForTwo}</h4>
              {/* <h4>{deliveryTime} minutes</h4> */}
            </div>
          </div>
          
          
    )
}

export default RestaurantCard;