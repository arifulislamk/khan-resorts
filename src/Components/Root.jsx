import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div className=" mx-2 lg:mx-20 mt-4 ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;