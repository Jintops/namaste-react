import React from "react";
import ReactDOM from "react-dom/client";

// react
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "hello from react🚀"
// );



// const heading =(
// <h1 className="head" tabIndex="5">
//     hello its jsx🚀
//     </h1>
    
// );
//React Functional Components

// const HeadingComponent =() =>(
//     <div id="container">
//         {heading }
//         <h1 className="heading">its react functional component</h1>
//     </div>
    
// )

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

const RestaurantCard =() =>{
    return(
        <div className="res-card" style={{ backgroundColor:"#F2F3F4 " }}>
            <img className="res-logo"
             alt="res-logo"
              src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg"/>
         <h3>Meghana Food</h3>
         <h4>Biriyani,NorthIndian,Asian</h4>
         <h4>4.4 stars
        <h4>38 minute</h4>
         </h4>
        </div>
    )
}

const Body = ()=>{
    return(
        <div className="body">
            <div className="search">search
         </div>
        <div className="res-container">
         <RestaurantCard/>
        </div>
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <div className="app">
         <Header/>
         <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);