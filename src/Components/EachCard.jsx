import { Link } from "react-router-dom";

const EachCard = ({ data }) => {
    const { id, image, area, status,estate_title, facilities, segment_name, description, price, location } = data;

    return (
        <div className="bg-gray-200 p-10 rounded-lg shadow-xl">
            <div className="mb-4 flex flex-col justify-center items-center">
                <img className="flex justify-center rounded-md w-4/5 h-4/5" src={image} alt="" />
                <h2 className="text-2xl text-center font-semibold">{estate_title}</h2>
            </div>

            <div className="text-xl space-y-3 mb-10">
                <p> Location: {location}</p>
                <p>Price: {price}</p>
                <p>Status: {status}</p>
            </div>
            <Link to={`/card/${id}`}>
                <div className="">
                    <button className="btn  w-full btn-ghost bg-blue-400">View Property</button>
                </div>
            </Link>
        </div>
    );
};

export default EachCard;