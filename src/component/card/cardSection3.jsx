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

// Import analytics functions
import {
  trackPhoneClick,
  trackPackageClick,
  trackCustomEvent,
} from '../../utils/analytics';

import { useModal } from '../../context/ModalContext';
import card1 from '../../assets/cardSection3/card1.avif';
import card2 from '../../assets/cardSection3/card2.avif';
import card3 from '../../assets/cardSection3/card3.avif';

const packages = [
  {
    id: 1,
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
    packageName: 'Shimla_Manali_Volvo_Tour', // For analytics
  },
  {
    id: 2,
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
    packageName: 'Manali_Volvo_Tour', // For analytics
  },
  {
    id: 3,
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
    packageName: 'Dharamshala_Dalhousie_Volvo_Package', // For analytics
  },
];

const PackageCard = ({ pkg }) => {
  const { openModal } = useModal();

  // Handle Get Quote button click with analytics
  const handleGetQuote = (e) => {
    e.preventDefault();

    // Track the quote request
    trackPackageClick(pkg.packageName, 'get_quote', {
      package_price: pkg.price,
      package_duration: pkg.nights,
      package_discount: pkg.discount,
      click_location: 'volvo_package_card',
      package_category: 'volvo_tours',
      transport_type: 'volvo_bus',
    });

    openModal();
  };

  // Handle WhatsApp click with analytics
  const handleWhatsAppClick = () => {
    trackCustomEvent('whatsapp_click', {
      event_category: 'contact',
      event_label: `${pkg.packageName}_whatsapp`,
      package_name: pkg.packageName,
      contact_method: 'whatsapp',
      click_location: 'volvo_package_card',
      package_category: 'volvo_tours',
      transport_type: 'volvo_bus',
      value: 1,
    });
  };

  // Handle Phone call click with analytics
  const handlePhoneClick = () => {
    trackPhoneClick('+919459618859', 'volvo_package_card');

    // Additional tracking for volvo package-specific phone calls
    trackCustomEvent('volvo_package_phone_call', {
      event_category: 'contact',
      event_label: `${pkg.packageName}_phone`,
      package_name: pkg.packageName,
      phone_number: '+919459618859',
      click_location: 'volvo_package_card',
      package_category: 'volvo_tours',
      transport_type: 'volvo_bus',
      value: 1,
    });
  };

  // Handle package card view (when card comes into view)
  const handlePackageView = () => {
    trackPackageClick(pkg.packageName, 'card_view', {
      package_price: pkg.price,
      package_duration: pkg.nights,
      package_discount: pkg.discount,
      view_location: 'volvo_packages_listing',
      package_category: 'volvo_tours',
      transport_type: 'volvo_bus',
    });
  };

  // Handle package image click
  const handleImageClick = () => {
    trackPackageClick(pkg.packageName, 'image_click', {
      package_price: pkg.price,
      click_location: 'volvo_package_card_image',
      package_category: 'volvo_tours',
      transport_type: 'volvo_bus',
    });
  };

  // Track when component mounts (package is viewed)
  React.useEffect(() => {
    handlePackageView();
  }, []);

  return (
    <div className="bg-[#f8f8f8] shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg w-full flex flex-col min-h-[660px]">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-56 object-cover cursor-pointer"
          loading="lazy"
          onClick={handleImageClick}
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
              onClick={handleWhatsAppClick}
            >
              <div className="p-2 rounded-full bg-white border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition duration-300">
                <FaWhatsapp size={20} />
              </div>
            </a>

            <a href="tel:+919459618859" onClick={handlePhoneClick}>
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
  // Track when the volvo packages section is viewed
  React.useEffect(() => {
    trackCustomEvent('volvo_packages_section_view', {
      event_category: 'engagement',
      event_label: 'volvo_tour_packages',
      section_name: 'Volvo Tour Packages',
      packages_count: packages.length,
      package_category: 'volvo_tours',
      transport_type: 'volvo_bus',
      value: 1,
    });
  }, []);

  return (
    <>
      <h1 className="text-center text-xl sm:text-2xl md:text-5xl font-bold text-black mt-10 max-w-4xl mx-auto leading-snug px-2">
        Volvo Tour Packages - Comfortable Travel Experience
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
            onSlideChange={(swiper) => {
              // Track slide changes in mobile carousel
              const currentPackage = packages[swiper.realIndex];
              trackCustomEvent('volvo_mobile_carousel_slide', {
                event_category: 'engagement',
                event_label: currentPackage.packageName,
                slide_index: swiper.realIndex,
                package_name: currentPackage.packageName,
                package_category: 'volvo_tours',
                transport_type: 'volvo_bus',
                value: 1,
              });
            }}
          >
            {packages.map((pkg) => (
              <SwiperSlide key={pkg.id} className="pb-6 flex justify-center">
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

export default CardSection3;
