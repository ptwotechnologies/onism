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
import 'swiper/css';

import { useModal } from '../../context/ModalContext';
import card1 from '../../assets/cardSection3/card1.avif';
import card2 from '../../assets/cardSection3/card2.avif';
import card3 from '../../assets/cardSection3/card3.avif';

const packages = [
  {
    image: card1,
    discount: '7% OFF',
    title: 'Shimla Manali Tour by Volvo',
    nights: '4 Nights 5 Days',
    price: '₹6,999/- Per Person (Offer Price)',
    places: [
      'Delhi',
      'Shimla',
      'Kufri',
      'Manali',
      'Solang Valley',
      'Atal Tunnel',
      'Kullu',
      'Vashisht',
    ],
    inclusions: [
      '04 Breakfast & 04 Dinner',
      'Transfers by Volvo',
      'All Sightseeing by cab',
      '04 Nights Accommodation',
      'GST, Toll, Parking, and Driver Allowances',
    ],
  },
  {
    image: card2,
    discount: '9% OFF',
    title: 'Manali Tour by Volvo',
    nights: '2 Nights 3 Days',
    price: '₹4,999/- Per Person (Offer Price)',
    places: ['Manali', 'Solang Valley', 'Atal Tunnel', 'Kullu'],
    inclusions: [
      '02 Breakfast & 02 Dinner',
      'Transfers by Volvo',
      'All Sightseeing by cab',
      '02 Nights Accommodation',
      'GST, Toll, Parking, and Driver Allowances',
    ],
  },
  {
    image: card3,
    discount: '6% OFF',
    title: 'Dharamshala Dalhousie Volvo Package',
    nights: '3 Nights 4 Days',
    price: '₹6,999/- Per Person (Offer Price)',
    places: ['Delhi', 'Dharamshala', 'Mcleodganj', 'Dalhousie', 'Khajjiar'],
    inclusions: [
      '03 Breakfast & 03 Dinner',
      'Transfers by Volvo',
      'Sightseeing by cab',
      '03 Nights Accommodation',
      'GST, Toll, Parking, and Driver Allowances',
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
    <div className="bg-[#f8f8f8] shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg w-full flex flex-col min-h-[660px]">
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

      <div className="p-5 flex flex-col flex-grow">
        <div>
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

        {/* This container will be pushed to the bottom */}
        <div className="mt-auto pt-6 flex justify-between items-center">
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
const CardSection3 = () => {
  return (
    <>
      <h1 className="text-center text-xl sm:text-2xl md:text-5xl font-bold text-black mt-10 max-w-4xl mx-auto leading-snug px-2">
        Family Friendly Your Family's Gateway to Happiness
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
            {packages.map((pkg, idx) => (
              <SwiperSlide key={idx} className="pb-6 flex justify-center">
                <PackageCard pkg={pkg} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <PackageCard key={idx} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardSection3;
