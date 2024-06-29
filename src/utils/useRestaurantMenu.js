import { useEffect, useState } from "react";
import { MENUU_API} from "./constants";


const useRestaurantMenu=(resId)=>{ 
   
  const [resInfo,setResInfo]=useState(null);

      useEffect(()=>{
        fetchMenu();
      },[]);

      const fetchMenu =async ()=>{
        const data=await fetch(MENUU_API+resId);
        const json=await data.json();
        console.log(json)
      
        setResInfo(json.data)
       
    //   {
    //     json.data.cards.map((card) => {
    //          let data = card?.card?.card?.info;
            
    //          if (data?.id === resId) {

    //              setResInfo(data);
                
    //          }
    //      });

    //  }
    }
    
     return resInfo;

};

export default useRestaurantMenu;