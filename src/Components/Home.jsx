import { Helmet } from "react-helmet-async";
import Sileder from "./Sileder";

const Home = () => {
    return (
        <div>
            <Helmet className="text-sm">
                <title className="">RESORTS | HOME</title>
            </Helmet>
            <Sileder></Sileder>
            <h2>This Home</h2>
        </div>
    );
};

export default Home;