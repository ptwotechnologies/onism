import { useState, useEffect } from 'react';
import heroImageMobile from '../assets/Hero-mobile.avif';
import heroImageTablet from '../assets/Hero-tablet.avif';
import heroImageDesktop from '../assets/Hero-desktop.avif';
import { FaTelegramPlane } from 'react-icons/fa';

const HeroSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Preload the appropriate image based on screen size
  useEffect(() => {
    const getImageSrc = () => {
      if (window.innerWidth <= 768) return heroImageMobile;
      if (window.innerWidth <= 1024) return heroImageTablet;
      return heroImageDesktop;
    };

    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setTimeout(() => setShowContent(true), 100);
    };
    img.onerror = () => {
      setImageLoaded(true);
      setTimeout(() => setShowContent(true), 100);
    };
    img.src = getImageSrc();
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image optimized for LCP with responsive sources */}
      <picture className="absolute inset-0 w-full h-full">
        {/* Mobile version - Portrait orientation */}
        <source
          media="(max-width: 768px)"
          srcSet={heroImageMobile}
          width="768"
          height="1024"
        />
        {/* Tablet version - Landscape */}
        <source
          media="(max-width: 1024px)"
          srcSet={heroImageTablet}
          width="1024"
          height="768"
        />
        {/* Desktop version - Wide screen */}
        <img
          src={heroImageDesktop}
          alt="Scenic view of Himachal"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width="1920"
          height="1080"
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            // Prevent layout shift
            aspectRatio: 'auto',
            // Responsive object positioning
            objectPosition:
              window.innerWidth <= 768 ? 'center top' : 'center center',
            willChange: 'opacity',
          }}
        />
      </picture>

      {/* Optimized loading fallback */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-200 flex items-center justify-center z-10">
          <div className="text-gray-800 text-sm font-medium">
            Exploring the world with you...
          </div>
        </div>
      )}

      {/* Main content - optimized for mobile */}
      <div
        className={`relative z-30 text-center px-4 sm:px-6 md:px-10 max-w-6xl transition-all duration-500 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="inline-block">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white drop-shadow-2xl bg-black/50 backdrop-blur-sm rounded-lg py-3 px-6 sm:py-4 sm:px-8 md:px-12 inline-block">
            Welcome To Himachal
          </h1>
          <div className="bg-white/80 w-full rounded-bl-full rounded-br-full h-[2px]" />
        </div>

        <div className="flex flex-col items-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div className="text-sm sm:text-base md:text-lg font-medium text-white bg-black/50 backdrop-blur-sm py-2 px-4 sm:px-8 md:px-12 rounded-lg text-center">
            SHIMLA | MANALI | KULLU | KHAJJIAR | DHARAMSHALA | DALHOUSE
          </div>

          <a href="#" className="inline-block">
            <button className="px-6 sm:px-8 py-2 bg-[#63AB45] hover:bg-[#F7921E] text-white text-sm sm:text-base md:text-lg font-semibold rounded-full w-[200px] sm:w-[220px] md:w-[250px] flex items-center justify-between transition-colors duration-300 shadow-lg overflow-hidden touch-manipulation">
              <span className="pl-1">Explore More</span>
              <span className="bg-white p-2 rounded-full text-black shadow-md flex items-center justify-center transition-transform duration-200 hover:scale-110">
                <FaTelegramPlane size={20} className="sm:w-6 sm:h-6" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
