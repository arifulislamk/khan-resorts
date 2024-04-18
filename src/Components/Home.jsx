import { Helmet } from "react-helmet-async";
import Sileder from "./Sileder";
import AllCard from "./AllCard";
import Accorodian from "./Accorodian";
import Review from "./Review";

const Home = () => {
    return (
        <div className="mt-10">
            <Helmet className="text-sm">
                <title className="">RESORTS | Home</title>
            </Helmet>
            <Sileder></Sileder>
            <AllCard></AllCard>
            <Accorodian></Accorodian>
            <Review></Review>
        </div>
    );
};

export default Home;