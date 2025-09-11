import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-red-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img className="w-28 rounded-lg" src={LOGO_URL} alt="App Logo" />
          <span className="text-white font-bold text-lg">Foodie App</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-white font-medium text-lg">
          <span className="flex items-center">
            Online Status:{" "}
            <span className={onlineStatus ? "ml-1 text-green-400" : "ml-1 text-gray-300"}>
              {onlineStatus ? "🟢" : "⚫"}
            </span>
          </span>

          <Link to="/" className="hover:text-gray-200 transition">
            Home 🏠
          </Link>
          <Link to="/about" className="hover:text-gray-200 transition">
            About Us 💁‍♂️
          </Link>
          <Link to="/contact" className="hover:text-gray-200 transition">
            Contact 📞
          </Link>
          <Link to="/grocery" className="hover:text-gray-200 transition">
            Grocery 🏪
          </Link>

          {/* Cart with badge */}
          <Link to="/cart" className="relative flex items-center hover:text-gray-200 transition">
            Cart 🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-4 bg-white text-red-600 text-sm font-bold px-2 py-0.5 rounded-full shadow-md">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Login/Logout Button */}
          <button
            className="bg-white text-red-600 font-semibold rounded-lg px-4 py-1 hover:bg-gray-100 transition"
            onClick={() =>
              setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
            }
          >
            {btnNameReact} ✅
          </button>

          {/* Logged in user */}
          {loggedInUser && <span className="ml-3 font-semibold">{loggedInUser}</span>}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white font-bold">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
