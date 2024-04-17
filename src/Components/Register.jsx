import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Register = () => {

    const { createuser } = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)


        createuser(email, password)
            .then(res => {
                console.log(res.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Helmet className="text-sm">
                <title className="">RESORTS | REGISTER</title>
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
                    <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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