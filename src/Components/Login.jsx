import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const location = useLocation() ;
    const navigate = useNavigate();
    // console.log('location login',location)

    
    const { loginuser, googlelogin, githublogin } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginuser(email, password)
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/')
                
                toast.success('Login Succesfully Done')
            })
            .catch(error => {
                console.log(error)
                toast.error('Please Type Correct Information!')
            })
    }

    const handlegoogle = () => {
        googlelogin()
            .then(res => {
                console.log(res.user)
                navigate(location?.state ? location.state : '/')
                toast.success('Login Succesfully Done')
            })
            .catch(error => {
                console.log(error)
                toast.error('There is an issuus!')
            })
    }
    const handlegithub = () => {
        githublogin()
            .then(res => {
                console.log(res.user)
                toast.success('Login Succesfully Done')
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error)
                toast.error('There is an issuus!')
            })
    }

    return (
        <div className="mt-4">
            <Helmet>
                <title className="">RESORTS | Login</title>
            </Helmet>
            <h2 className="text-center font-medium text-5xl">Please Login</h2>
            <form onSubmit={handleLogin} className="card-body lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p>Are You New? Please <Link className="text-blue-500" to="/register">Register</Link></p>
                <div className=" text-center mt-6">

                    <Link className="mr-4 text-xl rounded-md px-4 py-2 bg-blue-500 text-blue-100 font-medium" onClick={handlegoogle}> Google </Link>
                    <Link className="text-xl rounded-md px-4 py-2 bg-slate-500 text-blue-200 font-medium" onClick={handlegithub}> Github </Link>


                </div>
            </form>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;