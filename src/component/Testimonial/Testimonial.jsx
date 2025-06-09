import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import bgImage from '../../assets/Testimonial/bg-map.png';
import Review1 from '../../assets/Testimonial2/Testimonial1.png';
import Review2 from '../../assets/Testimonial2/Testimonial2.png';
import Review3 from '../../assets/Testimonial2/Testimonial3.png';
import Review4 from '../../assets/Testimonial2/Testimonial4.png';

const testimonials = [
  {
    title: 'Quality Services',
    text: 'It was pleasure traveling with Onism Tour. We took the package for 7 days and the entire stay, hotel, food, people were very nice and co-operating throughout the trip. It was really a nice and pleasant stay throughout the trip.',
    name: 'Akki Darji',
    image: Review1,
  },
  {
    title: 'Highly Recommended',
    text: 'Onism tour is very trustworthy. They plan everything before your trip starts, they share the exact itinerary so no confusion in last. Everything is pre planned and well executed.',
    name: 'Gufran Raza',
    image: Review2,
  },
  {
    title: 'Fully Comfort',
    text: 'The services provided were amazing. Such as high quality rooms just like 5 star hotel, first class food, the best driver and flexibility in paying the balance. It was fully comfort and satisfaction to me.',
    name: 'Ashok Moon',
    image: Review3,
  },
  {
    title: 'Quality Services',
    text: 'Overall a great experience Everything was neatly planned. Really happy with the service and I looked forward to more such trips with ONISM Tour, I must say, its very professional and did a commendable job.',
    name: 'Guthruthi Shreedhar',
    image: Review4,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white text-black rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
    <div className="flex-grow">
      <FaQuoteLeft className="text-green-600 text-3xl mb-4" />
      <h3 className="font-semibold text-xl mb-3">{testimonial.title}</h3>
      <div className="flex justify-center mb-4 text-orange-400">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-md" />
        ))}
      </div>
      <p className="text-gray-700 text-left leading-relaxed text-lg mb-6 line-clamp-5">
        {testimonial.text}
      </p>
    </div>
    <div className="mt-auto pt-4 border-t border-gray-100">
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
        />
        <span className="font-bold text-lg">{testimonial.name}</span>
      </div>
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center overflow-hidden py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/30 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <span className="bg-[rgba(99,171,69,0.1)] text-green-400 px-5 py-2 rounded-md text-lg font-medium inline-block mb-5">
          Testimonial
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Our Google Rating
          <span className="bg-green-700 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-md ml-2 sm:ml-3 text-xl sm:text-2xl md:text-3xl inline-block mr-1 sm:mr-2">
            4.9 / 5
          </span>
          Check
        </h2>

        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-12">
          Our Client Feedback
        </p>

        <div className="pb-8">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="h-auto pb-10">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
