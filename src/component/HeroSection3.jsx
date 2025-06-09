import { useEffect, useState } from 'react';
import heroImage from '../assets/Hero3.png';
import { FaTelegramPlane } from 'react-icons/fa';

const HeroSection3 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;
    img.onload = () => setLoaded(true);
  }, []);

  return (
    <div
      className={`relative w-full h-screen flex items-center justify-center transition-opacity duration-700 ease-in-out ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 " />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-6xl">
        {/* Title */}
        <h1 className="text-4xl bg-black/40 backdrop-blur-sm sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl bg-opacity-40 rounded-lg py-4 px-12 inline-block">
          Welcome To Kashmir
        </h1>
        <div className="bg-white w-full rounded-bl-full rounded-br-full h-[2px]"></div>

        {/* Subtext */}
        <div className="mt-4 sm:mt-6 text-lg sm:text-xl md:text-lg font-medium text-white bg-black/40 backdrop-blur-sm bg-opacity-40 py-2 px-4 rounded-lg inline-block">
          SRINAGAR | SONMARG | PAHALGAM | GULMARG | DOODHPATHRI | VAISHNO DEVI
        </div>

        <a href="#">
          <button className="mt-6 sm:mt-8 px-6 sm:px-8 py-2 bg-green-600 hover:bg-[#F7921E] text-white text-sm sm:text-lg font-semibold rounded-full w-[220px] sm:w-[250px] flex items-center justify-between transition-all duration-300 delay-150 hover:delay-150 shadow-lg mx-auto overflow-hidden">
            <span className="pl-1">Explore More</span>
            <span className="bg-white p-2 rounded-full text-black shadow-md flex items-center justify-center transition-all duration-300 delay-200 hover:scale-110">
              <FaTelegramPlane size={25} />
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default HeroSection3;
