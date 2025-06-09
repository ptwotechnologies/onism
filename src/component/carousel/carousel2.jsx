import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FiPlus, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import c1 from '../../assets/carousel2/c1.png';
import c2 from '../../assets/carousel2/c2.png';
import c3 from '../../assets/carousel2/c3.png';
import c4 from '../../assets/carousel2/c4.png';
import c5 from '../../assets/carousel2/c5.png';
import c6 from '../../assets/carousel2/c6.png';
import c7 from '../../assets/carousel2/c7.png';
import c8 from '../../assets/carousel2/c8.png';
import c9 from '../../assets/carousel2/c9.png';
import c10 from '../../assets/carousel2/c10.png';
import c11 from '../../assets/carousel2/c11.png';




const images = [
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11
];

export default function ImageSlider() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const closeModal = () => setSelectedIndex(null);
  const prevImage = () => setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const nextImage = () => setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <div
      className="relative py-10 p-2"
      style={{ background: "linear-gradient(to bottom, white 50%, #0f1d16 50%)" }}
    >
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={15}
        slidesPerView={1}
        breakpoints={{
          0: { slidesPerView: 1 },       // Mobile
          640: { slidesPerView: 2 },     // Small screens
          768: { slidesPerView: 3 },     // Tablets
          1024: { slidesPerView: 5 },    // Desktops
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
        <div className="relative group cursor-pointer rounded-lg sm:rounded-xl overflow-hidden aspect-square max-w-[300px] mx-auto sm:max-w-full">

              <img
                src={img}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center"
                onClick={() => setSelectedIndex(i)}
              >
                <div className="bg-yellow-500 rounded-full p-5 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <FiPlus size={25} className="text-white" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 bg-yellow-400 rounded-full p-3 text-white text-3xl z-50"
          >
            <FiX />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 bg-yellow-400 rounded-full p-3 text-white text-3xl z-50"
          >
            <FiChevronLeft />
          </button>
          <img
            src={images[selectedIndex]}
            alt="Full View"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-xl"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 bg-yellow-400 rounded-full p-3 text-white text-3xl z-50"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
}
