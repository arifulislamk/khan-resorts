import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const { loginuser, googlelogin, githublogin } = useContext(AuthContext);
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginuser(email, password)
            .then(res => {
                console.log(res.user)
                console.log("login now")
                navigate("/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handlegoogle = () => {
        googlelogin()
            .then(res => {
                console.log(res.user)
                navigate("/")
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handlegithub = () => {
        githublogin()
            .then(res => {
                console.log(res.user)
                navigate("/")
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
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

        </div>
    );
};

export default Login;