import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {  updateProfile } from "firebase/auth";

const Register = () => {

    const [showpassword, setshowpassword] = useState(false);
    const { createuser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value ;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

        if (password.length < 6) {
            toast.error('password must be at least 6 charecter or more charecter!')
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Password Shounld be uppercase at least one charecter')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Password Shounld be lowwercase at least one charecter')
            return;
        }

        createuser(email, password)
            .then(res => {
                toast.success('User Create Successfully done')
                navigate("/")
                console.log(res.user)
                updateProfile(res.user,{
                    displayName: name, photoURL: photo
                })
                .then(res => {
                    toast.success("updated")
                    console.log(res.user,'updated')
                })
                .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
                toast.error('Email Already Use or There Is an Issue')
            })
    }
    return (
        <div className="mt-4">
            <ToastContainer />
            <Helmet className="text-sm">
                <title className="">RESORTS | Register</title>
            </Helmet>
            <h2 className="text-center font-medium text-5xl">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="mb-4 relative" >
                        <input className="  w-full py-2 px-4 border border-gray-400 rounded-lg"
                            type={showpassword ? 'text' : 'password'} name="password" id="" required />
                        <span className="absolute top-3 right-4 " onClick={() => { setshowpassword(!showpassword) }}>
                            {showpassword ? <LuEyeOff /> : <LuEye />}
                        </span>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
                <div>
                    <p>Already have an account? Please <Link className="text-blue-500" to="/login">Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;