import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
       
    }

    componentDidMount(){
       
    }
    render(){
      
        return(
            <div>
                <h1>About page</h1>
                <div>
                    <UserContext.Consumer>{({loggedInUser})=><h1 className="font-bold">{loggedInUser}</h1>}</UserContext.Consumer>
                </div>
                <h2>This is Namaste React Series🚀</h2>
                {/* <User/> */}
                <UserClass name="thomas" location="naduvil"/>
            </div>
        )
    }
}


export default About;