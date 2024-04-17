import { Helmet } from "react-helmet-async";
import Sileder from "./Sileder";

const Home = () => {
    return (
        <div className="mt-10">
            <Helmet className="text-sm">
                <title className="">RESORTS | HOME</title>
            </Helmet>
            <Sileder></Sileder>
        </div>
    );
};

export default Home;