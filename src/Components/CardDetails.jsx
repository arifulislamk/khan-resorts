import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = () => {
    const alldata = useLoaderData();
    const { id } = useParams()

    const intId = parseInt(id)
    // console.log(books, id);

    const card = alldata.find(card => card.id == intId);

    const { image, estate_title, area, status, facilities,
         segment_name, description, price, location } = card;

         const handlebookedbtn = () => {
            toast.success("Booked Done")
         }
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <Helmet>
                <title className="">RESORTS | {estate_title}</title>
            </Helmet>
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-violet-600 dark:text-gray-50">
                    <div className="flex space-x-2 sm:space-x-4">
                        <div className="space-y-2">
                            <h2 className="text-2xl  font-medium leading-snug">Name : {estate_title}</h2>
                            <p className="leading-snug">Discription : {description}</p>
                        </div>
                    </div>
                    <div className="flex space-x-2 sm:space-x-4">

                        <div className="space-y-2">
                            <p className="text-lg  leading-snug">Area : {area}</p>
                        </div>
                    </div>
                    <p className="text-lg  leading-snug">Facilities : {facilities}</p>
                    <p className="text-lg  leading-snug">Location : {location}</p>
                    <p className="text-lg  leading-snug">Status : {status}</p>
                    <p>Price : {price}</p>

                    <div>
                        <button onClick={handlebookedbtn} className="btn bg-blue-400 mr-3 ">Booked Now</button>
                        <Link to="/contactus"><button className="btn bg-blue-100">Direct Contact</button></Link>
                    </div>

                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
                    <div className="flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                        <p className=" text-2xl font-bold">{segment_name}</p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default CardDetails;