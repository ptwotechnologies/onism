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

import tour1 from '../../assets/cardSection2/card1.png';
import tour2 from '../../assets/cardSection2/card2.png';
import tour3 from '../../assets/cardSection2/card3.png';

const packages = [
  {
    id: 1,
    image: tour1,
    discount: '7% OFF',
    title: 'Tour of Himachal Pradesh with Amritsar',
    nights: '9 Nights 10 Days',
    price: '₹12,999/- Per Person (Offer Price)',
    places: [
      'Delhi',
      'Shimla',
      'Kullu',
      'Manali',
      'Atal Tunnel',
      'Dharamshala',
      'Mcleodganj',
      'Dalhousie',
      'Amritsar',
      'Khajjiar',
    ],
    inclusions: [
      '09 Breakfast & 09 Dinner',
      'All Transfers & Sightseeing by cab',
      '09 Nights Accommodation',
      'GST, Toll, Parking and Driver Allowances',
    ],
  },
  {
    id: 2,
    image: tour2,
    discount: '9% OFF',
    title: 'Incredible Himachal',
    nights: '8 Nights 9 Days',
    price: '₹11,999/- Per Person (Offer Price)',
    places: [
      'Shimla',
      'Manali',
      'Kufri',
      'Solang Valley',
      'Atal Tunnel',
      'Dharamshala',
      'Mcleodganj',
      'Dalhousie',
      'Khajjiar',
    ],
    inclusions: [
      '08 Breakfast & 08 Dinner',
      'All Transfers & Sightseeing by cab',
      '08 Nights Accommodation',
      'GST, Toll, Parking and Driver Allowances',
    ],
  },
  {
    id: 3,
    image: tour3,
    discount: '7% OFF',
    title: 'Himalayan Journey with Taj',
    nights: '6 Nights 7 Days',
    price: '₹9,999/- Per Person (Offer Price)',
    places: [
      'Delhi',
      'Shimla',
      'Kufri',
      'Kullu',
      'Manali',
      'Atal Tunnel',
      'Taj Mahal',
    ],
    inclusions: [
      '05 Breakfast & 05 Dinner',
      'All Transfers & Sightseeing by cab',
      '05 Nights Accommodation',
      'GST, Toll, Parking and Driver Allowances',
    ],
  },
];

const PackageCard = ({ pkg }) => {
  return (
    <div className="bg-[#f8f8f8] shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg max-w-sm mx-auto">
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
      All checks have failed 1 failing check
      <div className="p-5 leading-7">
        <h2 className="text-xl font-bold text-gray-900">{pkg.title}</h2>

        <p className="text-gray-700 mt-2 flex items-center gap-1">
          <FaClock className="text-gray-500" /> {pkg.nights}
        </p>
        <p className="text-[#333] font-semibold mt-2">{pkg.price}</p>

        <div className="mt-2">
          <p className="font-semibold text-gray-800 flex items-center gap-1">
            <FaMapMarkerAlt className="text-gray-600" /> Places to visit:
          </p>
          <div className="flex flex-wrap gap-1 mt-2 ">
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

        <div className="flex justify-between items-center mt-6">
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

          <div className="flex items-center gap-2 bg-white border border-green-600 text-green-600 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition duration-300 cursor-pointer">
            <FaTelegramPlane />
            <a href="/">
              <span className="font-semibold">Get a Quote</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const cardSection2 = () => {
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

export default cardSection2;
