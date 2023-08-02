import React from "react";
import {Routes,Route,useNavigate} from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import Register from "./components/Register";

const App=()=>{
    return (
        
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="/*" element={<Home/>}/>
        </Routes>
    )
}
export default App