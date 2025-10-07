import { FaWhatsapp } from 'react-icons/fa';
import bgAdventure from '../assets/bg-adventure.avif';

const Adventure = () => {
  return (
    <section
      className="relative w-full h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${bgAdventure})` }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Ready to Travel with Real Adventure
          <br />
          and Embrace Nature?
        </h1>

        <a
          href="https://wa.link/5bi0km"
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center bg-[#F7921E] hover:bg-green-600 text-white text-lg font-semibold py-3 pl-6 pr-14 rounded-full transition-all duration-300"
        >
          <span>Check Availability</span>
          <span className="absolute right-0 gap-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full text-green-600">
            <FaWhatsapp size={25} />
          </span>
        </a>
      </div>
    </section>
  );
};

export default Adventure;
