const Accorodian = () => {
    return (
        <div className="mt-10 space-y-4 bg-blue-200 p-3 lg:p-10 rounded-lg  shadow-xl  text-center ">
            <h2 className=" mb-10 text-3xl font-medium">Frequently asked questions</h2>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-2xl font-medium">
                    Q: What type of activities do you offer at your resort?
                </div>
                <div className=" text-xl collapse-content">
                    <p>We offer a wide range of activities including swimming, snorkeling, kayaking, beach volleyball, and guided nature walks</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl font-medium">
                    Q: Is there a spa at your resort?
                </div>
                <div className="text-xl collapse-content">
                    <p>Yes, we have a luxurious spa offering a variety of relaxing treatments and massages.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-2xl font-medium">
                    Q: Do you have any special packages for honeymooners?
                </div>
                <div className="text-xl collapse-content">
                    <p>Absolutely! We have exclusive honeymoon packages that include romantic dinners, couples massages, and special room decorations.</p>
                </div>
            </div>
        </div>
    );
};

export default Accorodian;