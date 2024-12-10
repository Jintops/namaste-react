import { useState,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import logo from "/src/logo.png";

const Header = ()=>{

    const onlineStatus = useOnlineStatus()
  
     const [btnNameReact,setBtnNameReact]=useState("Login")

      const {loggedInUser}= useContext(UserContext);
      console.log(loggedInUser);

      const cartItems = useSelector((store)=> store.cart.items);
      console.log(cartItems);

    return(
        <div className="flex justify-between bg-red-600 shadow-lg m-2 ">
            <div className="logo-container">
                <img className="w-32 " src={LOGO_URL} alt="transparent"/>
            </div>
            <div className="flex items-center">
                <ul className="flex text-lg text-white">
                        <li className="px-5 ">Online Status: {onlineStatus ? "🟢" : "⚫"}</li>
                    <li className="px-3"><Link to="/">Home🏠</Link></li> 
                    <li className="px-3"><Link to="/about">About Us💁‍♂️</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us📞</Link></li>
                    <li className="px-3"><Link to="/grocery">Grocery🏪</Link></li>
                    <li className="pl-3  font-bold"><Link to="/cart">Cart🛒 </Link></li>
                    <li className="-mt-3 -ml-2 mr-1 font-bold">{cartItems.length}</li>
                    </ul>
                    <button className="bg-white rounded-lg  h-7 px-1 border border-solid border-black mx-5 text-lg" onClick={()=>{
                       btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                     
                    }
              
                    }>{btnNameReact}✅</button>
                    {/* <ul>   <li className="font-bold">{loggedInUser}</li></ul> */}
                 
                
            </div>

        </div>
    )
}

export default Header;