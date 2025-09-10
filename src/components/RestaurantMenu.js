import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;

  // Extract restaurant info safely
  const restaurantInfo = resInfo?.cards?.find(
    (c) => c?.card?.card?.info
  )?.card?.card?.info;

  const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

  // Extract categories safely
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Restaurant Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
        <p className="text-lg text-gray-600 mt-2">
          {cuisines?.join(", ")} • {costForTwoMessage}
        </p>
      </div>

      {/* Categories Accordion */}
      <div className="space-y-4">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index) // toggle
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
