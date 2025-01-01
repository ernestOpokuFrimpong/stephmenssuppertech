import React from 'react';
import footerBackground from '../images/bg-footer.jpg';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <footer className='relative bg-cover bg-center bg-no-repeat text-white p-4' style={{ backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${footerBackground})` }}>
            <div className='lg:flex flex-col justify-between bg-blue-900 bg-opacity-50 p-4'>
                <div className='p-4'>
                    <h2 className='text-yellow-400 font-bold text-xl'>Quick Links</h2>
                    <ul className='text-white text-[18px]'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Our Works</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                <div className='p-4'>
                    <h2 className='text-yellow-400 font-bold text-xl'>IT Support Services</h2>
                    <ul className='text-white text-[18px]'>
                        <li><a href="#">Computer Repair</a></li>
                        <li><a href="#">Operating System Configuration</a></li>
                        <li><a href="#">Windows & Linux installation</a></li>
                        <li><a href="#">Network Setup</a></li>
                        <li><a href="#">Software Installation</a></li>
                        <li><a href="#">Virus Removal</a></li>
                        <li><a href="#">Data Recovery</a></li>
                    </ul>
                </div>
                <div className='p-4'>
                    <h2 className='text-yellow-400 font-bold text-xl'>Printing Press Services</h2>
                    <ul className='text-white text-[18px]'>
                        <li><a href="#">Lamination</a></li>
                        <li><a href="#">Large Format Printing</a></li>
                        <li><a href="#">Magazines & Brochures</a></li>
                        <li><a href="#">Graphics Designing</a></li>
                        <li><a href="#">DTF Printing</a></li>
                        <li><a href="#">Signage Printing & Installation</a></li>
                    </ul>
                </div>
                <div className='p-4'>
                    <h2 className='text-yellow-400 font-bold text-xl mb-2'>Contacts & Address</h2>
                    <div className='flex items-center mb-2'>
                        <LocationOnIcon className="text-yellow-400 mr-2" />
                        <p>New Onyinase - Tako, Behind Bel Acqua Distribution Company.</p>
                    </div>
                    <div className='flex items-center mb-2'>
                        <PhoneIcon className="text-yellow-400 mr-2" />
                        <p>054 440 5254</p>
                    </div>
                    <div className='flex items-center mb-2'>
                        <PhoneIcon className="text-yellow-400 mr-2" />
                        <p>055 919 0684</p>
                    </div>
                    <div className='flex items-center'>
                        <EmailIcon className="text-yellow-400 mr-2" />
                        <p>ssuppertech@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='text-center mt-4'>
                <p>&copy; 2023 Stephmens Supertech. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;