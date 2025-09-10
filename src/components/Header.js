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
    <header className="flex justify-between items-center bg-red-600 shadow-md px-6 py-3 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-28 rounded-lg" src={LOGO_URL} alt="App Logo" />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center text-white text-lg font-medium space-x-6">
          <li>
            Online Status: {onlineStatus ? "🟢" : "⚫"}
          </li>
          <li>
            <Link to="/">Home 🏠</Link>
          </li>
          <li>
            <Link to="/about">About Us 💁‍♂️</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us 📞</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery 🏪</Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="flex items-center">
              Cart 🛒
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-4 bg-white text-red-600 text-sm font-bold px-2 py-0.5 rounded-full shadow-md">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>
          <li>
            <button
              className="bg-white text-red-600 font-semibold rounded-lg px-4 py-1 hover:bg-gray-100 transition"
              onClick={() =>
                setBtnNameReact((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnNameReact} ✅
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
