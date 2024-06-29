import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = ()=>{

    const onlineStatus = useOnlineStatus()
  
     const [btnNameReact,setBtnNameReact]=useState("Login")
    return(
        <div className="flex justify-between bg-pink-100 shadow-lg m-2 ">
            <div className="logo-container">
                <img className="w-36 " src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex text-lg">
                        <li className="px-5 ">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="px-3"><Link to="/">Home🏠</Link></li> 
                    <li className="px-3"><Link to="/about">About Us💁‍♂️</Link></li>
                    <li className="px-3"><Link to="/contact">Contact Us📞</Link></li>
                    <li className="px-3"><Link to="/grocery">Grocery🏪</Link></li>
                    <li className="px-3"><Link>Cart🛒</Link></li>
                    </ul>
                    <button className="bg-white rounded-lg px-2 border border-solid border-black py-2 mr-4 text-lg" onClick={()=>{
                       btnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
                     
                    }
              
                    }>{btnNameReact}✅</button>
                
            </div>

        </div>
    )
}

export default Header;