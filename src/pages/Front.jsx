import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
function Front(){
    let[input,setInput]=useState("")
    let navigate=useNavigate()
   function handleJoin(){
    navigate(`/room/${input}`)
   }
    return(
        <div className="home">
            <input type="text" placeholder='Enter your Id:' onChange={(e)=>setInput(e.target.value)} value={input}/>
            <button onClick={handleJoin}> join now</button>
        </div>
    );
}
export default Front;

