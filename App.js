import Card from "./finddata/Card";
import React from "react";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route  path="home" element={<Home/>} /> 
      <Route  path="card" element={<Card/>} />
      <Route path="login" element={<Login/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
