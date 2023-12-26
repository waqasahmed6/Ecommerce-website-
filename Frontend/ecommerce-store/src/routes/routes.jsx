import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import About from "../pages/about";
import Home from "../pages/home";
import Navbar from "../components/navbar";
import Register from "../pages/register";

function Routing() {
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}></Route>

        <Route path="login/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default Routing;
