import { useEffect, useState } from "react";
import EachCard from "./EachCard";

const AllCard = () => {

    const [segment, setSegment] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setSegment(data))
    }, [])

    return (
        <div className="mt-10 lg:mt-20">
            <div>
                <h2 className=" text-2xl lg:text-5xl font-bold text-center mb-5">Our Services</h2>
                {/* <p className=" text-center">Explore thousands of job opportunities with all the information
                    you need. Its your future</p> */}
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-10">
                {
                    segment.map(data => <EachCard key={data.id}
                        data={data}></EachCard>)
                }
            </div>

        </div>
    );
};

export default AllCard;