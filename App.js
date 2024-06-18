import React from "react";
import ReactDOM from "react-dom/client";




const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "am back"), React.createElement("h2", {}, "am  again")]
    ), React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "am back"), React.createElement("h2", {}, "am back again🚀")]
    )]
);

// const heading = React.createElement(
//     "h1",
//     {id:"heading"},
//     "hello from react"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);