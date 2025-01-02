import React, { useState, useEffect } from 'react';
import designImg from "../images/design-icon.png";
import printingServicesImg from "../images/printing_services.png";
import webDesignImg from "../images/web-design-icon.png";
import itSupportImg from "../images/IT support services icon.png";
import footerBackground from '../images/bg-footer.jpg';
import img2 from '../images/large-format-printer.jpg';

const images = [footerBackground, img2];

const Main = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 60000); // Change image every minute

        return () => clearInterval(interval);
    }, []);

    return (
        <main className="bg-white text-gray-800 overflow-hidden">
            <section className="welcome-container text-center py-12 text-white" style={backgroundImageStyle}>
                <div className="flex flex-col items-center justify-center h-full w-full">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Stephmens Supertech</h1>
                    <p className="text-lg md:text-2xl">We are here to help you with all of your printing needs</p>
                </div>
            </section>
            <section className="picture-slide-show text-center py-12 bg-yellow-500 text-blue-700">
                <h2 className="text-3xl font-semibold mb-4">Printing</h2>
                <p className="text-lg">Let us help you with all of your printing needs.</p>
            </section>
            <section className="services-show py-12 text-gray-800 border-2 px-10 bg-slate-100">
                <div className="container-1 text-center mb-8">
                    <h2 id="services" className="text-3xl font-semibold mb-4">Services</h2>
                    <p className="text-lg">Online and on-premises, you can find printing services to help you get the job done</p>
                </div>
                <div className="services-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div className="service-item p-4 bg-blue-900 text-white shadow-md rounded-lg">
                        <img id="design-icon" src={designImg} alt="a simple vector icon symbolizing design services" className="mx-auto mb-4" />
                        <h2 className="text-xl font-semibold">DESIGN SERVICES</h2>
                    </div>
                    <div className="service-item p-4 bg-blue-900 text-white shadow-md rounded-lg">
                        <img src={printingServicesImg} alt="an icon with a printer to symbolize printing services" className="mx-auto mb-4" />
                        <h2 className="text-xl font-semibold">PRINTING SERVICES</h2>
                    </div>
                    <div className="service-item p-4 bg-blue-900 text-white shadow-md rounded-lg">
                        <img src={webDesignImg} alt="an icon representing web design services with a monitor" className="mx-auto mb-4" />
                        <h2 className="text-xl font-semibold">WEB DESIGN SERVICES</h2>
                    </div>
                    <div className="service-item p-4 bg-blue-900 text-white shadow-md rounded-lg">
                        <img src={itSupportImg} alt="itsupport-services-icon" className="mx-auto mb-4" />
                        <h2 className="text-xl font-semibold">IT SUPPORT SERVICES</h2>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;