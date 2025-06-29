import { useState, useEffect, useCallback } from 'react';
import heroImage from '../assets/Hero2.avif';
import { FaTelegramPlane } from 'react-icons/fa';
import { trackLadakhPackageClick } from '../utils/analytics';
const HeroSection2 = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleLadakhClick = useCallback(() => {
    trackLadakhPackageClick('hero_section_explore', {
      button_text: 'Explore More',
      section: 'main_hero',
      component: 'HeroSection',
    });
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = heroImage;

    img.onload = () => {
      setImageLoaded(true);
      setTimeout(() => setShowContent(true), 100);
    };

    img.onerror = () => {
      setImageLoaded(true);
      setShowContent(true);
    };
  }, []);

  return (
    <div
      className={`relative w-full h-screen flex items-center justify-center transition-all duration-500 ease-out ${
        imageLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        backgroundImage: imageLoaded ? `url(${heroImage})` : 'none',
        backgroundColor: imageLoaded ? 'transparent' : '#1a1a1a',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="animate-pulse text-white text-xl">Loading...</div>
        </div>
      )}

      <div className="absolute inset-0" />

      <div
        className={`relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-6xl transition-all duration-700 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h1 className="text-4xl bg-black/40 backdrop-blur-sm sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl bg-opacity-40 rounded-lg py-4 px-12 inline-block">
          Welcome To Ladakh & Spiti
        </h1>
        <div className="bg-white w-full rounded-bl-full rounded-br-full h-[2px]"></div>

        <div className="flex flex-col items-center gap-6 mt-4 sm:mt-6">
          <div className="text-lg sm:text-xl md:text-lg font-medium text-white bg-black/40 backdrop-blur-sm py-2 px-12 rounded-lg text-center">
            LEH | KHARDUNGLA | PANGONG | NUBRA | SPITI | KAZA
          </div>

          <button
            onClick={handleLadakhClick}
            className="px-6 sm:px-8 py-2 bg-[#63AB45] hover:bg-[#F7921E] text-white text-sm sm:text-lg font-semibold rounded-full w-[220px] sm:w-[250px] flex items-center justify-between transition-all duration-300 delay-150 hover:delay-150 shadow-lg mx-auto overflow-hidden"
          >
            <span className="pl-1">Explore More</span>
            <span className="bg-white p-2 rounded-full text-black shadow-md flex items-center justify-center transition-all duration-300 delay-200 hover:scale-110">
              <FaTelegramPlane size={25} />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
