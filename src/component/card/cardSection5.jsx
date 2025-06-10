import React from 'react';
import {
  FaClock,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaCheckDouble,
  FaTelegramPlane,
} from 'react-icons/fa';
import { BsSuitcase2 } from 'react-icons/bs';
import { MdOutlineWifiCalling3 } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useModal } from '../../context/ModalContext';
import 'swiper/css';
import card1 from '../../assets/cardSection5/card1.png';
import card2 from '../../assets/cardSection5/card2.png';
import card3 from '../../assets/cardSection5/card3.png';

const packages = [
  {
    image: card1,
    discount: '9% OFF',
    title: 'Spiti Full Circuit — Shimla To Manali To Road Trip From Delhi',
    nights: '7 Nights 8 Days',
    price: '₹18,999/- Per Person (Offer Price)',
    places: [
      'Shimla',
      'Narkanda',
      'Kalpa',
      'Chitkul',
      'Sangla',
      'Nako',
      'Tabo',
      'Kaza',
      'Hikkim',
      'Komic',
      'Langza',
      'Dhankar',
      'Chicham Bridge',
      'Chandratal',
      'Kunzum La',
      'Manali',
    ],
    inclusions: [
      '07 Breakfast & 07 Dinner',
      'All sightseeing by cab',
      '07 Nights Accommodation',
      'GST, Toll, Parking and Driver Allowances',
      'Permits',
    ],
  },
  {
    image: card2,
    discount: '5% OFF',
    title: 'Spiti Valley With Chandratal',
    nights: '4 Nights 5 Days',
    price: '₹14,999/- Per Person (Offer Price)',
    places: [
      'Kaza',
      'Hikkim',
      'Komic',
      'Langza',
      'Dhankar',
      'Chicham Bridge',
      'Chandratal',
      'Kunzum La',
      'Manali',
    ],
    inclusions: [
      '04 Breakfast & 04 Dinner',
      'All sightseeing by cab',
      '04 Nights Accommodation',
      'GST, Toll, Parking and Driver Allowances',
      'Permits',
    ],
  },
  {
    image: card3,
    discount: '7% OFF',
    title: 'Winter Spiti Valley',
    nights: '6 Nights 7 Days',
    price: '₹16,999/- Per Person (Offer Price)',
    places: [
      'Shimla',
      'Narkanda',
      'Kalpa',
      'Chitkul',
      'Sangla',
      'Nako',
      'Tabo',
      'Kaza',
      'Hikkim',
      'Komic',
      'Langza',
      'Dhankar',
      'Chicham Bridge',
    ],
    inclusions: [
      '06 Breakfast & 06 Dinner',
      'All sightseeing by cab',
      '06 Nights Accommodation.',
      'GST, Toll, Parking and Driver Allowances',
      'Permits',
    ],
  },
];

const PackageCard = ({ pkg }) => {
  const { openModal } = useModal();
  function handleGetQuote(e) {
    e.preventDefault();
    openModal();
  }
  return (
    <div className="bg-[#f8f8f8] shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg max-w-sm mx-auto flex flex-col h-full">
      {/* Image section */}
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

      {/* Content section with flex-grow */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Main content that can grow */}
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-900">{pkg.title}</h2>
          <p className="text-gray-700 mt-2 flex items-center gap-1">
            <FaClock className="text-gray-500" /> {pkg.nights}
          </p>
          <p className="text-[#333] font-semibold mt-2">{pkg.price}</p>

          <div className="mt-2">
            <p className="font-semibold text-gray-800 flex items-center gap-1">
              <FaMapMarkerAlt className="text-gray-600" /> Places to visit:
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {pkg.places.map((place, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2 py-1 bg-gray-500 rounded-full text-white"
                >
                  {place}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <p className="font-bold text-gray-800 flex items-center gap-2">
              <BsSuitcase2 className="text-gray-900" /> Package Inclusions:
            </p>
            <ul className="text-gray-500 text-[16px] mt-1 divide-y divide-gray-300">
              {pkg.inclusions.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 py-3 tracking-wide leading-relaxed"
                >
                  <FaCheckDouble className="text-gray-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Button section that stays at bottom */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
          <div className="flex gap-3">
            <a
              href="https://wa.link/5bi0km"
              onClick={() =>
                window.gtag_report_conversion(
                  'AW-11046863854/hV0qCNud6YoaEO6Hx5Mp'
                )
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 rounded-full bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300">
                <FaWhatsapp size={20} />
              </div>
            </a>

            <a
              href="tel:+919459618859"
              onClick={() =>
                window.gtag_report_conversion(
                  'AW-11046863854/hV0qCNud6YoaEO6Hx5Mp'
                )
              }
            >
              <div className="p-2 rounded-full bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300">
                <MdOutlineWifiCalling3 size={20} />
              </div>
            </a>
          </div>

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

const cardSection5 = () => {
  return (
    <>
      <h1 className="text-center text-xl sm:text-2xl md:text-5xl font-bold text-black mt-10 max-w-4xl mx-auto leading-snug px-2">
        Spiti Trips
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

export default cardSection5;
