import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);

  // Destructure data safely
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla,
  } = resData?.info || {};

  return (
    <div className="h-[320px] w-[240px] bg-white rounded-xl shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105 overflow-hidden">
      {/* Image */}
      <img
        className="w-full h-40 object-cover"
        alt={name}
        src={CDN_URL + cloudinaryImageId}
      />

      {/* Info */}
      <div className="p-3 flex flex-col justify-between h-[160px]">
        <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{cuisines?.join(", ")}</p>

        <div className="flex justify-between items-center mt-2 text-sm">
          <span
            className={`font-semibold px-2 py-1 rounded ${
              avgRating >= 4
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            ⭐ {avgRating}
          </span>
          <span className="text-gray-700">{costForTwo}</span>
        </div>

        <p className="text-xs text-gray-500 mt-2">
          ⏱ {sla?.deliveryTime || "30"} mins
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
