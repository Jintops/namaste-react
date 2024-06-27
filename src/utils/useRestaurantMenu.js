import { useEffect, useState } from "react";
import { MENU_API } from "./constants";


const useRestaurantMenu=(resId)=>{ 
   
  const [resInfo,setResInfo]=useState(null);

      useEffect(()=>{
        fetchMenu();
      },[]);

      const fetchMenu =async ()=>{
        const data=await fetch(MENU_API);
        const json=await data.json();
      
        setResInfo(json)
       
      {
        json.data.cards.map((card) => {
             let data = card?.card?.card?.info;
            
             if (data?.id === resId) {

                 setResInfo(data);
                
             }
         });

     }
    }
    
     return resInfo;

};

export default useRestaurantMenu;