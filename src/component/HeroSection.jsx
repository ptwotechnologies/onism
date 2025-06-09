import { useState } from 'react';
import heroImage from '../assets/Hero.avif';
import { FaTelegramPlane } from 'react-icons/fa';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
    setTimeout(() => setShowContent(true), 100); // smooth transition
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image as LCP-eligible <img> */}
      <img
        src={heroImage}
        alt="Scenic view of Himachal"
        onLoad={handleImageLoad}
        onError={handleImageLoad}
        loading="eager"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {/* Loading fallback gradient */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center z-10">
          <div className="animate-pulse text-white text-xl">Loading...</div>
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      {/* Main content */}
      <div
        className={`relative z-30 text-center px-4 sm:px-6 md:px-10 max-w-6xl transition-all duration-700 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h1 className="text-4xl bg-black/40 backdrop-blur-sm sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl rounded-lg py-4 px-12 inline-block">
          Welcome To Himachal
        </h1>
        <div className="bg-white w-full rounded-bl-full rounded-br-full h-[2px] mt-2" />

        <div className="flex flex-col items-center gap-6 mt-4 sm:mt-6">
          <div className="text-lg sm:text-xl md:text-lg font-medium text-white bg-black/40 backdrop-blur-sm py-2 px-12 rounded-lg text-center">
            SHIMLA | MANALI | KULLU | KHAJJIAR | DHARAMSHALA | DALHOUSE
          </div>

          <a href="#">
            <button className="px-6 sm:px-8 py-2 bg-[#63AB45] hover:bg-[#F7921E] text-white text-sm sm:text-lg font-semibold rounded-full w-[220px] sm:w-[250px] flex items-center justify-between transition-all duration-300 delay-150 hover:delay-150 shadow-lg mx-auto overflow-hidden">
              <span className="pl-1">Explore More</span>
              <span className="bg-white p-2 rounded-full text-black shadow-md flex items-center justify-center transition-all duration-300 delay-200 hover:scale-110">
                <FaTelegramPlane size={25} />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
