import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const DashBoard = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className=" lg:p-10 rounded-lg  mt-5 flex justify-center">

            <div className=" space-y-4 p-3 lg:p-10 border border-gray-400 shadow-lg bg-blue-100">
                <div className="flex justify-end">
                    <Link to="/updateProfile"><button className=" btn bg-blue-400">Edit</button></Link>
                </div>
                <div className=" flex justify-center">
                    <img src={user.photoURL} className=" w-2/5 rounded-full" />
                </div>
                <div className="space-y-4 p-6 lg:text-2xl font-medium ">
                    <h1> Name  : {user.displayName}</h1>
                    <h1> Email : {user.email}</h1>
                    <h1> Phone : {user.phoneNumber ? user.phoneNumber : '01**********'}</h1>
                </div>
            </div>

        </div>
    );
};

export default DashBoard;