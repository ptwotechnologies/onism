// Updated cardSection1.js (and apply same pattern to other 7 card sections)
import React from 'react';
import { FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { BsSuitcase2 } from 'react-icons/bs';
import { FaCheckDouble } from 'react-icons/fa6';
import { FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useModal } from '../../context/ModalContext';
import 'swiper/css';

import card1 from '../../assets/cardSection1/card1.avif';
import card2 from '../../assets/cardSection1/card2.avif';
import card3 from '../../assets/cardSection1/card3.avif';

const packages = [
  {
    id: 1,
    title: 'Shimla Manali Honeymoon Package from Delhi',
    nights: '5 Nights 6 Days',
    price: '₹7,999/- Per Person (Offer Price)',
    places: ['Delhi', 'Shimla', 'Kufri', 'Kullu', 'Manali'],
    discount: '6% OFF',
    image: card1,
  },
  {
    id: 2,
    title: 'Manali Honeymoon Package from Delhi',
    nights: '3 Nights 4 Days',
    price: '₹5,999/- Per Person (Offer Price)',
    places: ['Delhi', 'Manali', 'Solang Valley', 'Atal Tunnel', 'Kullu'],
    discount: '8% OFF',
    image: card2,
  },
  {
    id: 3,
    title: 'Jibhi-Tirthan Valley - Kasol - Manali Tour Package',
    nights: '5 Nights 6 Days',
    price: '₹7,999/- Per Person (Offer Price)',
    places: [
      'Delhi',
      'Manali',
      'Solang Valley',
      'Atal Tunnel',
      'Kullu',
      'Kasol',
      'Manikaran',
      'Jibhi',
      'Tirthan',
    ],
    discount: '7% OFF',
    image: card3,
  },
];

const PackageCard = ({ pkg }) => {
  const { openModal } = useModal();

  const handleGetQuote = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <div className="bg-[#f8f8f8] shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg max-w-sm mx-auto flex flex-col h-full">
      {/* Image & Discount Badge */}
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-56 object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {pkg.discount}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 leading-7 flex-grow">
        <h2 className="text-2xl font-bold text-gray-900">{pkg.title}</h2>

        {/* Nights & Price */}
        <p className="text-gray-700 text-md mt-2 flex items-center gap-1">
          <FaClock className="text-gray-500" /> {pkg.nights}
        </p>
        <p className="text-[#333] font-semibold mt-2">{pkg.price}</p>

        {/* Places to Visit */}
        <div className="mt-2">
          <p className="font-semibold text-gray-800 flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-600" size={20} /> Places to
            visit:
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {pkg.places.map((place, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-500 rounded-full text-white"
              >
                {place}
              </span>
            ))}
          </div>
        </div>

        {/* Package Inclusions */}
        <div className="mt-4">
          <p className="font-bold text-gray-800 flex items-center gap-2">
            <BsSuitcase2 className="text-gray-900" size={20} />
            Package Inclusions:
          </p>

          <ul className="text-gray-500 text-[16px] mt-1 divide-y divide-gray-300">
            {[
              '05 Breakfast & 05 Dinner',
              'All Transfers & Sightseeing by cab',
              '05 Nights Accommodation',
              'GST, Toll, Parking, and Driver Allowances',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 py-3 tracking-wide leading-relaxed"
              >
                <FaCheckDouble className="text-gray-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Fixed Bottom Action Buttons */}
      <div className="p-5 border-t border-gray-200 mt-auto">
        <div className="flex justify-between items-center">
          {/* Left Icons */}
          <div className="flex gap-3">
            <a
              href="https://wa.link/5bi0km"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 rounded-full bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300">
                <FaWhatsapp size={20} />
              </div>
            </a>

            <a href="tel:+919459618859">
              <div className="p-2 rounded-full bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300">
                <MdOutlineWifiCalling3 size={20} />
              </div>
            </a>
          </div>

          {/* Right Quote Button */}
          <button
            onClick={handleGetQuote}
            className="flex items-center gap-2 bg-white border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer"
          >
            <FaTelegramPlane />
            <span className="font-semibold">Get a Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const TravelPackages = () => {
  return (
    <>
      <h1 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-6 sm:mt-10 leading-snug sm:leading-tight tracking-tight">
        Best Selling Himachal Tour Packages
      </h1>

      <div className="container mx-auto max-w-7xl py-14 px-4">
        {/* Swiper for small screens */}
        <div className="block sm:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
          >
            {packages.map((pkg) => (
              <SwiperSlide key={pkg.id}>
                <PackageCard pkg={pkg} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default TravelPackages;
