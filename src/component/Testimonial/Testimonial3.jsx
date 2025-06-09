import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import bgImage from '../../assets/Testimonial/bg-map.png';
import Review1 from '../../assets/Testimonial3/Testimonial1.png';
import Review2 from '../../assets/Testimonial3/Testimonial2.png';
import Review3 from '../../assets/Testimonial3/Testimonial3.png';

const testimonials = [
  {
    title: 'Great Tour',
    text: 'Onism tour is a great tour and travel company. We took many packages from here. Our recent trip to Kashmir was wonderful with excellent arrangements.',
    name: 'Ma Ambe',
    image: Review1,
  },
  {
    title: 'Wonderful Experience',
    text: 'Had a wonderful experience touring Kashmir with Onism Tour. Thank you for the amazing package and helping us capture beautiful memories.',
    name: 'Satish Zala',
    image: Review2,
  },
  {
    title: 'Adventurous Tour',
    text: 'Highly recommend Onism tour for both relaxing and adventurous trips. We had an amazing experience and look forward to more trips.',
    name: 'Nikhil',
    image: Review3,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white text-black rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
    <FaQuoteLeft className="text-green-600 text-3xl mb-4" />
    <h3 className="font-semibold text-xl mb-3">{testimonial.title}</h3>
    <div className="flex justify-center mb-4 text-orange-400">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className="text-md" />
      ))}
    </div>
    <p className="text-gray-700 text-left leading-8 text-lg mb-6 flex-grow">
      {testimonial.text}
    </p>
    <div className="flex items-center mt-auto pt-4 border-t border-gray-200">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <span className="font-bold text-lg ml-4">{testimonial.name}</span>
    </div>
  </div>
);

const TestimonialSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white text-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
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

        <p className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-8 sm:mb-12">
          Our Client Feedback
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!px-4 !pb-2"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="h-auto">
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
