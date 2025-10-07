import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import p1 from '../assets/popularActivity/p1.avif';
import p2 from '../assets/popularActivity/p2.avif';
import p3 from '../assets/popularActivity/p3.avif';
import p4 from '../assets/popularActivity/p4.avif';
import p5 from '../assets/popularActivity/p5.avif';
import p6 from '../assets/popularActivity/p6.avif';

const PopularActivities = () => {
  const activities = [
    { title: 'Skiing', img: p1 },
    { title: 'Trekking', img: p2 },
    { title: 'Zorbing', img: p3 },
    { title: 'Paragliding', img: p4 },
    { title: 'River Rafting', img: p5 },
    { title: 'Camping', img: p6 },
  ];

  return (
    <section className="py-12 px-4 text-center">
      {/* Subtitle Badge */}
      {/* <div className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
        Popular Activities
      </div> */}
      <span className="bg-green-100/50 text-green-600 px-5 py-2 rounded-md text-base md:text-lg font-medium inline-block mb-4">
        Popular Activities
      </span>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-10">
        Explore Real Adventure
      </h2>

      {/* Swiper Carousel */}
      <div className="max-w-7xl mx-auto">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          modules={[Autoplay]}
          className="px-2"
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {activities.map(({ title, img }, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-70 rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-8 left-0 right-0 text-white text-2xl font-semibold py-3">
                  {title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PopularActivities;
