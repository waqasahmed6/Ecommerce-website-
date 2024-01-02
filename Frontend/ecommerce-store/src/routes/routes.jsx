import { Route, Routes } from "react-router-dom";
import Login from "../pages/AdminLogin/Login";
import About from "../pages/About/About";
import Home from "../pages/home/Home";
import HomeLayout from "../layouts/Homelayout/Home";
import Create from "../modules/Admin/pages/create";
import Admins from "../modules/Admin/pages/Admins";
import Edit from "../modules/Admin/pages/edit";
import AdminLayout from "../layouts/Admin/Admin";
import ProductCreate from "../modules/products/create";
import ShowProduct from "../modules/products/showproduct";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout/>}> 
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/login" element={<Login />}/>

      </Route>
        
        <Route path="/adminDashboard" element={<AdminLayout/>}>
        <Route  path="" element={<Admins/>}/>
        <Route  path="admins/:admin_id/edit" element={<Edit/>}/>

        </Route>


       <Route  path="/productCreate" element={<ProductCreate/>} />
        <Route  path="/login/admins/signup" element={<Create/>}/>
        <Route path="/products" element={<ShowProduct/>}/>
      </Routes>
     
    </>
  );
}

export default Routing;
