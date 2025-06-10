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
import card1 from '../../assets/cardSection7/card1.png';
import card2 from '../../assets/cardSection7/card2.png';
import card3 from '../../assets/cardSection7/card3.png';

const packages = [
  {
    id: 1,
    image: card1,
    discount: '7% OFF',
    title: 'Kashmir Honeymoon Packages',
    nights: '5 Nights 6 Days',
    price: '₹9,999/- Per Person (Offer Price)',
    places: ['Srinagar', 'Sonmarg', 'Pahalgam', 'Gulmarg'],
    inclusions: [
      '05 Breakfast & 05 Dinner',
      'All Transfers & Sightseeing by cab',
      '05 Nights Accommodation',
      'GST, Toll, Parking and Driver Allowances',
    ],
  },
  {
    id: 2,
    image: card2,
    discount: '9% OFF',
    title: 'Glimpses of Kashmir',
    nights: '3 Nights 4 Days',
    price: '₹5,999/- Per Person (Offer Price)',
    places: ['Srinagar', 'Pahalgam', 'Gulmarg'],
    inclusions: [
      '3 Breakfast & 3 Dinner',
      'All Transfers & Sightseeing by cab',
      '5 Nights Accommodation',
      'GST, Toll, Parking and Driver Allowances',
    ],
  },
  {
    id: 3,
    image: card3,
    discount: '5% OFF',
    title: 'Paradise Kashmir',
    nights: '7 Nights 7 Days',
    price: '₹7,999/- Per Person (Offer Price)',
    places: ['Srinagar', 'Sonmarg', 'Doodhpathri', 'Pahalgam', 'Gulmarg'],
    inclusions: [
      '06 Breakfast & 06 Dinner',
      'All transfer and sightseeing by cab',
      '06 Nights Accommodation',
      'GST, Toll, Parking and Driver Allowances',
    ],
  },
];

const PackageCard = ({ pkg }) => {
  const { openModal } = useModal();

  function handleGetQuote(e) {
    e.preventDefault();
    openModal();
    // Track conversion for Get Quote button
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion('AW-11046863854/hV0qCNud6YoaEO6Hx5Mp');
    }
  }

  function handleWhatsAppClick() {
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion('AW-11046863854/hV0qCNud6YoaEO6Hx5Mp');
    }
  }

  function handleCallClick() {
    if (window.gtag_report_conversion) {
      window.gtag_report_conversion('AW-11046863854/hV0qCNud6YoaEO6Hx5Mp');
    }
  }

  return (
    <div className="bg-[#f8f8f8] shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg max-w-sm w-full mx-auto h-full flex flex-col">
      <div className="relative h-56">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {pkg.discount}
        </span>
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow leading-7">
        <div className="leading-7">
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

        <div className="flex justify-between items-center mt-6">
          <div className="flex gap-3">
            <a
              href="https://wa.link/5bi0km"
              onClick={handleWhatsAppClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="p-2 rounded-full bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300">
                <FaWhatsapp size={20} />
              </div>
            </a>

            <a href="tel:+919459618859" onClick={handleCallClick}>
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

const CardSection7 = () => {
  return (
    <>
      <h1 className="text-center text-xl sm:text-2xl md:text-5xl font-bold text-black mt-10 max-w-4xl mx-auto leading-snug px-2">
        Best Selling Kashmir Tour Packages
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
                <div className="h-full">
                  <PackageCard pkg={pkg} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardSection7;
