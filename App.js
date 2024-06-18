import React from "react";
import ReactDOM from "react-dom/client";

// react
// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "hello from react🚀"
// );



const heading =(
<h1 className="head" tabIndex="5">
    hello its jsx🚀
    </h1>
    
);
//React Functional Components

const HeadingComponent =() =>(
    <div id="container">
        {heading }
        <h1 className="heading">its react functional component</h1>
    </div>
    
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);