import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];

    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  // Handle offline status
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="text-center mt-20 text-xl font-semibold text-red-600">
        ⚠️ Looks like you are offline! Please check your internet connection.
      </h1>
    );
  }

  // Context (if you plan to use username later)
  const { loggedInUser } = useContext(UserContext);

  // Conditional rendering (shimmer while loading)
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body px-10 py-6">
      {/* 🔍 Search + Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        {/* Search */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            className="border border-gray-400 rounded-lg w-72 h-10 px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            onClick={() => {
              const filtered = listOfRestaurants.filter((res) =>
                res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* Top Rated Button */}
        <button
          className="mt-4 md:mt-0 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
          onClick={() => {
            const filtered = listOfRestaurants.filter(
              (res) => res.info?.avgRating > 4.4
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Show Top Rated ⭐
        </button>
      </div>

      {/* 🍴 Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info?.id}
            to={"/restaurants/" + restaurant.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
