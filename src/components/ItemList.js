import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

const dispatch = useDispatch();

  const handleAddItem=(item)=>{
        dispatch(addItem(item));
    }

    return (
        <div>

            {items.map((item) => (
                <div key={item.card.info.id} className="m-2 p-2  border-gray-200 border-b-2 text-left flex justify-between" >

                    <div className="w-9/12">
                        <div className="py-2">
                            <span >{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    
                    <div className="w-3/12 p-2">

                        <div className="absolute">
                            <button className="p-2 bg-white shadow-lg rounded-lg mx-5 my-28 px-10 text-green-700 font-bold text-lg hover:bg-gray-200" 
                            onClick={()=>handleAddItem(item)}>ADD</button>
                        </div>
                        <img src={CDN_URL + item.card.info.imageId} className="rounded-lg"></img>
                    </div>
                </div>

            ))}

        </div>
    )
};

export default ItemList;