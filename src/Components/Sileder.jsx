const Sileder = () => {
    return (
        <div className="carousel rounded-md ">
            <div id="slide1" className="lg:h-[600px] carousel-item relative w-full ">
                <img className="w-full " src="https://i.ibb.co/CWZ1jsr/sonder-quest-VE9p-Ib8-QNQ4-unsplash.jpg"  />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="lg:h-[600px] carousel-item relative w-full">
                <img src="https://i.ibb.co/9cZbDWw/sidath-vimukthi-gy-I81i-Dtsz0-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="lg:h-[600px] carousel-item relative w-full">
                <img className="h-20" src="https://i.ibb.co/wKRmZtB/sidath-vimukthi-29z-Da-Mhy-Is-U-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="lg:h-[600px] carousel-item relative w-full">
                <img src="https://i.ibb.co/JrF1C5H/christian-lambert-l-OXh-HLWP1-NE-unsplash.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-20 right-20 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Sileder;