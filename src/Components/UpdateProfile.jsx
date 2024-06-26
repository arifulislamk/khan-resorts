import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const { updatedProfile } = useContext(AuthContext);

    const handleUpdate = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photoURL.value;

        updatedProfile(name, photo)
            .then(res => {
                toast.success("Profile update Success")
                console.log(res, 'updated')
            })
            .catch(error => console.log(error))

    }
    return (
        <div>
            <Helmet className="text-sm">
                <title className="">RESORTS | UpdateProfile</title>
            </Helmet>
            <h2 className=" text-center text-4xl mt-4  font-medium">Update Your Profile</h2>
            <form onSubmit={handleUpdate} className="card-body lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Change Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Change Your PhotoURL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Save Change</button>
                </div>

            </form>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default UpdateProfile;