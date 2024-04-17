import { Link } from "react-router-dom";

const EachCard = ({ data }) => {
    const { id, image, area, status, facilities, segment_name, description, price, location } = data;

    return (
        <div className="bg-gray-200 p-6 rounded-lg">
            <div className="mb-4 flex flex-col justify-center items-center">
                <img className="flex justify-center rounded-md w-4/5 h-4/5" src={image} alt="" />
                <h2 className="text-2xl text-center font-semibold">{segment_name}</h2>
            </div>

            <div className="text-xl">
                <p> Location: {location}</p>
                <p>Price: {price}</p>
                <p>Status:{status}</p>
            </div>
            <Link to={`/card/${id}`}>
                <div className=" justify-end items-end">
                    <button className="btn btn-ghost bg-blue-400">View Details</button>
                </div>
            </Link>
        </div>
    );
};

export default EachCard;