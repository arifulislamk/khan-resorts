import { Link } from "react-router-dom";

const Register = () => {
    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password)
    }
    return (
        <div>
            <h2 className="text-center font-medium text-5xl">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body lg:w-1/2 mx-auto">
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