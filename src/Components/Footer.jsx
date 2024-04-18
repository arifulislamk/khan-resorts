const Footer = () => {
    return (
        <footer className="footer mt-6 p-10 bg-blue-200 rounded-md">
            <div className="lg:w-[300px]">
                <h2 className=" font-extrabold text-xl">KHAN RESORTS</h2>
                <p>Escape to luxury with Khan Resorts, where every 
                    moment is tailored to exceed yourexpectations.
                     Immerse yourself in unparalleled comfort, 
                     exquisite dining, and , where unforgettable memories await.</p>
            </div>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
            </nav>
        </footer>
    );
};

export default Footer;