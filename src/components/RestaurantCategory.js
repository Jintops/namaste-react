import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    // const [showItems,setShowItems]=useState(false) 

    const handleClick = () => {
        setShowIndex();

    }
    return (
        
            <div className="w-4/5 mx-auto bg-gray-100 shadow-lg my-4 p-4">
                <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-xl">{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>
                <div className="p-3">
                    {showItems && <ItemList items={data.itemCards} />}
                </div> 
            </div>
       
    )
}

export default RestaurantCategory;
