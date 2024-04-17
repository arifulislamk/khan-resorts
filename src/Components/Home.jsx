import { Helmet } from "react-helmet-async";
import Sileder from "./Sileder";
import AllCard from "./AllCard";

const Home = () => {
    return (
        <div className="mt-10">
            <Helmet className="text-sm">
                <title className="">RESORTS | HOME</title>
            </Helmet>
            <Sileder></Sileder>
            <AllCard></AllCard>
        </div>
    );
};

export default Home;