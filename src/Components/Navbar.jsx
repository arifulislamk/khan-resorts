import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(res => {
                console.log(res.user)
                navigate("/login")
            })
            .catch(error => {
                console.log(error)
            })
    }
    const links = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/popular">Popular</NavLink> </li>
        <li> <NavLink to="/Contact Us">Contact Us</NavLink> </li>

        {user && <>
            <li> <NavLink to="/updateProfile">Update Profile</NavLink> </li>
            <li> <NavLink to="/dashboard">DashBoard</NavLink> </li>
        </>}

    </>
    return (
        <div className="navbar bg-blue-400 px-6 py-3  rounded-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link to="/" className=" lg:text-xl font-extrabold">KHAN RESORTS</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>

                        <div className="tooltip" data-tip={user.displayName ? user.displayName : 'Name not found'}>
                            <img className="w-10 rounded-lg mr-2" src={user.photoURL} alt="" />
                        </div>
                        <p className="lg:mr-4 hidden lg:flex  text-sm">{user.email}</p>
                        <Link><button onClick={handleLogout} className="btn p-2 lg:px-4 lg:py-2 lg:text-xl lg:font-bold">LogOut</button></Link>
                    </> :
                        <Link to="/login"><button className="btn lg:text-xl lg:font-bold">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;