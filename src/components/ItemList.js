import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex items-center justify-between bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
        >
          {/* Image Section */}
          <div className="w-28 h-28 flex-shrink-0">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 px-5">
            <h3 className="font-bold text-lg text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1 line-clamp-2">
              {item.card.info.description}
            </p>
            <p className="mt-2 font-semibold text-green-700 text-md">
              ₹{" "}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
          </div>

          {/* Button Section */}
          <div>
            <button
              className="bg-green-600 hover:bg-green-500 active:scale-95 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition-transform duration-200"
              onClick={() => handleAddItem(item)}
            >
              + Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
