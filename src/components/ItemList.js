import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }

    return (
        <div>

            {items.map((item) => (
                <div key={item.card.info.id} className="mt-4 border-gray-200 border-y-2 text-left grid grid-cols-12 shadow-lg rounded-md" >

                    <div className="col-span-2">
                        <img src={CDN_URL + item.card.info.imageId} alt="photo not availabe!!" className="rounded-lg w-44"></img>
                    </div>
                    <div className="col-span-7 my-5">
                        <span className="font-bold text-xl" >{item.card.info.name}</span>
                        <span  className="font-bold"> - ₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>

                        <p className="text-md">{item.card.info.description}</p>
                    </div>

                    <div className="col-span-3 flex justify-center items-center">
                        <button
                            className="p-2 bg-green-600 shadow-lg rounded-lg px-10 text-white font-bold text-lg hover:bg-green-400 ml-"
                            onClick={() => handleAddItem(item)}
                        >
                            ADD
                        </button>
                    </div>

                </div>

            ))}

        </div>
    )
};

export default ItemList;