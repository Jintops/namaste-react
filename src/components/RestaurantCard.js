import { CDN_URL } from "../utils/constants";

const RestaurantCard =(props) =>{
    
    const { resData}=props;
  
    // let k = resData;
    // const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}=resData.info
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime}= resData?.card?.card?.info ;
    // const name = resData?.card?.card?.info?.name
    // const cuisines = resData?.card?.card?.info?.cuisines
    // const avgRating = resData?.card?.card?.info?.avgRating
    // const costForTwo= resData?.card?.card?.info?.costForTwo
    // const deliveryTime= resData?.card?.card?.info?.deliveryTime
        return(
        <div className="res-card" style={{ backgroundColor:"#F2F3F4 " }}>
            <img className="res-logo"
             alt="res-logo"
              src={CDN_URL+cloudinaryImageId}/>
         <h3>{name}</h3>
         <h4>{cuisines.join(",")}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>     
        </div>
    )
}

export default RestaurantCard;