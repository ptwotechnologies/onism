import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram } from 'react-icons/fa';
import footer1 from '../assets/Footer/footer1.png';
import footer2 from '../assets/Footer/footer2.png';
import footer3 from '../assets/Footer/footer3.png';
import footer4 from '../assets/Footer/footer4.png';
import footer5 from '../assets/Footer/footer5.png';
import footer6 from '../assets/Footer/footer6.png';
const Footer = () => {
    return (
        <footer className="bg-[#0f1d16] text-white px-6 md:px-16 py-6">

            {/* Top Support Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 text-center md:text-left">
                {/* Support Card 1 */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full  px-6 py-4 rounded-lg">
                    <div className="flex items-center gap-4">
                        <img src={footer1} alt="Support Icon" className="w-18" />
                        <h3 className="text-lg md:text-xl font-semibold">
                            Need Any Support For Tour & Travels?
                        </h3>
                    </div>
                    <a href="tel:+918580787596" className="bg-green-500 rounded-full p-4 animate-pulse hover:bg-green-600 transition">
                        <FaPhoneAlt size={25} className="text-white" />
                    </a>
                </div>

                {/* Support Card 2 */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full  px-6 py-4 rounded-lg">
                    <div className="flex items-center gap-4">
                        <img src={footer2} alt="Vacation Icon" className="w-18" />
                        <h3 className="text-lg md:text-xl font-semibold">
                            Ready to Get Started With Vacations!
                        </h3>
                    </div>
                    <a href="tel:+919459618859" className="bg-green-500 rounded-full p-4 animate-pulse hover:bg-green-600 transition">
                        <FaPhoneAlt size={25} className="text-white" />
                    </a>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-700 pt-8 mb-12">
                {/* Email */}
                <div className="flex items-start gap-4">
                    <div className="bg-green-500 rounded-full p-3">
                        <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                        <h4 className="font-bold">Email</h4>
                        <a href="mailto:info@onismtourhimachal.in">
                            <p className="text-gray-300 text-sm break-words hover:text-green-500">info@onismtourhimachal.in</p>
                        </a>
                    </div>

                </div>
                {/* Hotline 1 */}
                <div className="flex items-start gap-4">
                    <div className="bg-green-500 rounded-full p-3">
                        <FaPhoneAlt className="text-white text-xl" />
                    </div>
                    <div>
                        <h4 className="font-bold">Hotline 1</h4>
                        <a href="tel:+918580787596" className="text-gray-300 text-sm hover:text-green-400 transition">+91-8580787596</a>
                    </div>
                </div>
                {/* Hotline 2 */}
                <div className="flex items-start gap-4">
                    <div className="bg-green-500 rounded-full p-3">
                        <FaPhoneAlt className="text-white text-xl" />
                    </div>
                    <div>
                        <h4 className="font-bold">Hotline 2</h4>
                        <a href="tel:+919459618859" className="text-gray-300 text-sm hover:text-green-400 transition">+91-94596-18859</a>
                    </div>
                </div>
                {/* Social Links */}
                <div className="flex gap-4 items-start">
                    <a
                        href="https://www.facebook.com/people/Onism-Tour/100081750174236/?rdid=Zp6Oz0DqQzZmF9fy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Mbtxczsdf%2F"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition"
                    >
                        <FaFacebookF className="text-white" />
                    </a>
                    <a
                        href="https://www.instagram.com/onism_tour"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition"
                    >
                        <FaInstagram className="text-white" />
                    </a>
                </div>
            </div>

            {/* Footer Main Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-t border-gray-700 pt-10">
                {/* Logo and Payment */}
                <div>
                    <img src={footer6} alt="Logo" className="w-72 mb-4" />
                    <p className="text-sm">We Accept All Major Credit And Debit Cards</p>
                    <div className="mt-4">
                        <img src={footer3} className="w-full max-w-xs" alt="Cards" />
                    </div>
                </div>

                {/* About Section */}
                <div>
                    <h4 className="font-bold text-lg mb-3">About</h4>
                    <p className="text-md leading-6 text-justify text-gray-300">
                        Onism Tour is a leading travel agency that offers the best tour packages for Himachal Pradesh, Ladakh, and other destinations. We provide top-notch travel services to our clients.
                    </p>
                </div>

                {/* Reliability */}
                <div>
                    <h4 className="font-bold text-lg mb-3">Reliability</h4>
                    <img src={footer4} alt="Reliability" className="w-full max-w-[250px] mx-auto" />
                </div>

                {/* Approved By */}
                <div>
                    <h4 className="font-bold text-lg mb-3">Approved by</h4>
                    <img src={footer5} alt="Himachal Tourism" className="w-full max-w-[250px] mx-auto" />
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-700 pt-6 text-md text-gray-400 text-center">
                <p>
                    © Copyright 2025 <span className="text-green-400 font-semibold">Onism Tour</span>. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
