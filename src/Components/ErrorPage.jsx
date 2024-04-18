const ErrorPage = () => {
    return (
        <div className=" font-bold lg:text-5xl mt-10 text-center">
            <div className="flex justify-center">
                <img className="w-1/2" src="https://i.ibb.co/09dkC21/ss.png" alt="" />
            </div>
            <div>
                <h1>Oops!</h1>
                <p>Sorry,Page is not found at this URL.</p>
            </div>
        </div>
    );
};

export default ErrorPage;