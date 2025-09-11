import ItemList from "./ItemList";
import { motion, AnimatePresence } from "framer-motion";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-4/5 mx-auto bg-white shadow-md rounded-lg my-4 overflow-hidden">
      {/* Category Header */}
      <div
        className="flex justify-between items-center px-4 py-3 bg-gray-100 cursor-pointer hover:bg-gray-200 transition"
        onClick={handleClick}
      >
        <span className="font-bold text-lg text-gray-800">
          {data.title} ({data.itemCards.length})
        </span>
        <span
          className={`transform transition-transform duration-300 ${
            showItems ? "rotate-180" : "rotate-0"
          }`}
        >
          ⬇️
        </span>
      </div>

      {/* Items with smooth animation */}
      <AnimatePresence>
        {showItems && (
       
            <ItemList items={data.itemCards} />
        
        )}
      </AnimatePresence>
    </div>
  );
};

export default RestaurantCategory;
