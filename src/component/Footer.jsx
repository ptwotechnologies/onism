import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa';
import footer1 from '../assets/Footer/footer1.png';
import footer2 from '../assets/Footer/footer2.png';
import footer3 from '../assets/Footer/footer3.png';
import footer4 from '../assets/Footer/footer4.png';
import footer5 from '../assets/Footer/footer5.png';
import footer6 from '../assets/Footer/footer6.png';

const Footer = () => {
  return (
    <footer className="bg-[#0f1d16] text-white px-6 md:px-16 py-8">
      {/* Top Support Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Support Card 1 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#1a2e20] px-6 py-6 rounded-lg border border-gray-700">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              src={footer1}
              alt="Support Icon"
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <h3 className="text-lg md:text-xl font-semibold leading-tight">
              Need Any Support For Tour & Travels?
            </h3>
          </div>
          <a
            href="tel:+918580787596"
            className="bg-green-500 rounded-full p-4 animate-pulse hover:bg-green-600 transition-all duration-300 flex-shrink-0"
          >
            <FaPhoneAlt size={20} className="text-white" />
          </a>
        </div>

        {/* Support Card 2 */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#1a2e20] px-6 py-6 rounded-lg border border-gray-700">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <img
              src={footer2}
              alt="Vacation Icon"
              className="w-16 h-16 object-contain flex-shrink-0"
            />
            <h3 className="text-lg md:text-xl font-semibold leading-tight">
              Ready to Get Started With Vacations!
            </h3>
          </div>
          <a
            href="tel:+919459618859"
            className="bg-green-500 rounded-full p-4 animate-pulse hover:bg-green-600 transition-all duration-300 flex-shrink-0"
          >
            <FaPhoneAlt size={20} className="text-white" />
          </a>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border-t border-gray-700 pt-8 mb-12">
        {/* Email */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="bg-green-500 rounded-full p-3 flex-shrink-0">
            <FaEnvelope className="text-white text-xl" />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="font-bold text-lg mb-2">Email</h4>
            <a href="mailto:info@onismtourhimachal.in" className="group">
              <p className="text-gray-300 text-sm break-all group-hover:text-green-400 transition-colors duration-300">
                info@onismtourhimachal.in
              </p>
            </a>
          </div>
        </div>

        {/* Hotline 1 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="bg-green-500 rounded-full p-3 flex-shrink-0">
            <FaPhoneAlt className="text-white text-xl" />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Hotline 1</h4>
            <a
              href="tel:+918580787596"
              className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-300"
            >
              +91-8580787596
            </a>
          </div>
        </div>

        {/* Hotline 2 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="bg-green-500 rounded-full p-3 flex-shrink-0">
            <FaPhoneAlt className="text-white text-xl" />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2">Hotline 2</h4>
            <a
              href="tel:+919459618859"
              className="text-gray-300 text-sm hover:text-green-400 transition-colors duration-300"
            >
              +91-94596-18859
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center sm:items-start gap-4">
          <h4 className="font-bold text-lg">Follow Us</h4>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/people/Onism-Tour/100081750174236/?rdid=Zp6Oz0DqQzZmF9fy&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Mbtxczsdf%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a
              href="https://www.instagram.com/onism_tour"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 p-3 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-105"
            >
              <FaInstagram className="text-white text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-700 pt-10 mb-8">
        {/* Logo and Payment */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src={footer6}
            alt="Onism Tour Logo"
            className="w-64 mb-4 object-contain"
          />
          <p className="text-sm text-gray-300 mb-4">
            We Accept All Major Credit And Debit Cards
          </p>
          <img
            src={footer3}
            className="w-full max-w-xs object-contain"
            alt="Payment Cards"
          />
        </div>

        {/* About Section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h4 className="font-bold text-lg mb-4 text-green-400">About</h4>
          <p className="text-sm leading-relaxed text-gray-300">
            Onism Tour is a leading travel agency that offers the best tour
            packages for Himachal Pradesh, Ladakh, and other destinations. We
            provide top-notch travel services to our clients with personalized
            experiences and memorable journeys.
          </p>
        </div>

        {/* Reliability */}
        <div className="flex flex-col items-center text-center">
          <h4 className="font-bold text-lg mb-4 text-green-400">Reliability</h4>
          <img
            src={footer4}
            alt="Reliability Certificate"
            className="w-full max-w-[200px] object-contain"
          />
        </div>

        {/* Approved By */}
        <div className="flex flex-col items-center text-center">
          <h4 className="font-bold text-lg mb-4 text-green-400">Approved by</h4>
          <img
            src={footer5}
            alt="Himachal Tourism Approval"
            className="w-full max-w-[200px] object-contain"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-sm text-gray-400">
          © Copyright 2025{' '}
          <span className="text-green-400 font-semibold">Onism Tour</span>. All
          Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
