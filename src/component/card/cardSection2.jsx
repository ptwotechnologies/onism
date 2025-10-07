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

// Import analytics functions
import {
  trackPhoneClick,
  trackPackageClick,
  trackCustomEvent,
} from '../../utils/analytics';

import tour1 from '../../assets/cardSection2/card1.avif';
import tour2 from '../../assets/cardSection2/card2.avif';
import tour3 from '../../assets/cardSection2/card3.avif';

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
    packageName: 'Himachal_Pradesh_with_Amritsar_Tour', // For analytics
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
    packageName: 'Incredible_Himachal_Tour', // For analytics
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
    packageName: 'Himalayan_Journey_with_Taj_Tour', // For analytics
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
      click_location: 'family_package_card',
      package_category: 'family_friendly',
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
      click_location: 'family_package_card',
      package_category: 'family_friendly',
      value: 1,
    });
  };

  // Handle Phone call click with analytics
  const handlePhoneClick = () => {
    trackPhoneClick('+919459618859', 'family_package_card');

    // Additional tracking for family package-specific phone calls
    trackCustomEvent('family_package_phone_call', {
      event_category: 'contact',
      event_label: `${pkg.packageName}_phone`,
      package_name: pkg.packageName,
      phone_number: '+919459618859',
      click_location: 'family_package_card',
      package_category: 'family_friendly',
      value: 1,
    });
  };

  // Handle package card view (when card comes into view)
  const handlePackageView = () => {
    trackPackageClick(pkg.packageName, 'card_view', {
      package_price: pkg.price,
      package_duration: pkg.nights,
      package_discount: pkg.discount,
      view_location: 'family_packages_listing',
      package_category: 'family_friendly',
    });
  };

  // Handle package image click
  const handleImageClick = () => {
    trackPackageClick(pkg.packageName, 'image_click', {
      package_price: pkg.price,
      click_location: 'family_package_card_image',
      package_category: 'family_friendly',
    });
  };

  // Track when component mounts (package is viewed)
  React.useEffect(() => {
    handlePackageView();
  }, []);

  return (
    <div className="bg-[#f8f8f8] shadow-md rounded-xl overflow-hidden transition-transform hover:scale-105 hover:shadow-lg max-w-sm mx-auto flex flex-col h-full">
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
      <div className="p-5 leading-7 flex-grow flex flex-col">
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

        <div className="mt-4 flex-grow">
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

        <div className="flex justify-between items-center mt-6 ">
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

const CardSection2 = () => {
  // Track when the family packages section is viewed
  React.useEffect(() => {
    trackCustomEvent('family_packages_section_view', {
      event_category: 'engagement',
      event_label: 'family_friendly_packages',
      section_name: 'Family Friendly Gateway to Happiness',
      packages_count: packages.length,
      package_category: 'family_friendly',
      value: 1,
    });
  }, []);

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
            onSlideChange={(swiper) => {
              // Track slide changes in mobile carousel
              const currentPackage = packages[swiper.realIndex];
              trackCustomEvent('family_mobile_carousel_slide', {
                event_category: 'engagement',
                event_label: currentPackage.packageName,
                slide_index: swiper.realIndex,
                package_name: currentPackage.packageName,
                package_category: 'family_friendly',
                value: 1,
              });
            }}
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

export default CardSection2;
