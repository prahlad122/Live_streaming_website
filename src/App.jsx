import React from "react";
import { Route, Routes } from "react-router-dom";
import Front from "./pages/front";
import Room from "./pages/Room";
function App(){
  return (
    
    <Routes>
     <Route path='/' element={<Front/>}/> 
      <Route path='/room/:roomId' element={<Room/>}/> 


    </Routes>
  );
}
export default App;
