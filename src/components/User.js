import { useEffect, useState } from "react";

const User=()=>{
    const [count,setCount]=useState({name:"saji",location:"kids"})
   
     
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data = await fetch("https://api.github.com/users/akshaymarch7");    
        const json=await data.json();
       setCount(json)
       console.log(json)       
    }
    return(
        <div className="user-card">
             <h2>Name:{count.name}</h2>
             <h3>Location:{count.location}</h3>
        </div>
    )
}
export default User;