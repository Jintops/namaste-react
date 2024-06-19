import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


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