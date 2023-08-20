import React from "react";
import {Routes,Route,useNavigate} from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import Register from "./components/Register";

const App=()=>{
    return (
        
        <Routes>
            <Route path="/photo-app/login" element={<Login/>}/>
            <Route path="/photo-app/register" element={<Register/>}/>
            <Route path="/photo-app/*" element={<Home/>}/>
        </Routes>
    )
}
export default App