import { Route, Routes } from "react-router-dom";
import Login from "../pages/AdminLogin/Login";
import About from "../pages/About/About";
import Home from "../pages/home/Home";
import Register from "../pages/AdminSignup/Register";
import Footer from "../components/Footer/Footer";
import HomeLayout from "../layouts/Homelayout/Home";
import Create from "../modules/Admin/pages/create";
import Admins from "../modules/Admin/pages/Admins";
import Edit from "../modules/Admin/pages/edit";
import AdminLayout from "../layouts/Admin/Admin";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout/>}> 
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="login/register" element={<Register />} />
        </Route>
        
        <Route path="/adminDashboard" element={<AdminLayout/>} >
        <Route  path="admins/signup" element={<Create/>}/>
        <Route  path="" element={<Admins/>}/>
        <Route  path="admins/:admin_id/edit" element={<Edit/>}/>

        </Route>

      </Routes>
     
    </>
  );
}

export default Routing;
