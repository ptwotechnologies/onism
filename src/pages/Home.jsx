import React, { Suspense, lazy, memo, useState, useEffect } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';

// Lazy load components that are below the fold
const TravelPackages = lazy(() => import('../component/card/cardSection1'));
const CardSectionTwo = lazy(() => import('../component/card/cardSection2'));
const CardSectionThree = lazy(() => import('../component/card/cardSection3'));
const WhyChooseUs = lazy(() => import('../component/whyChooseUs'));
const TestimonialSection = lazy(() =>
  import('../component/Testimonial/Testimonial')
);
const Adventure = lazy(() => import('../component/Adventure'));
const ImageSlider = lazy(() => import('../component/carousel/carousel2'));
const PopularActivities = lazy(() => import('../component/PopulatActivities'));

// Import above-the-fold components normally
import HeroSection from '../component/HeroSection';
import Form from '../component/Form';
import FloatingButtons from '../component/FloatingButtons';
import ScrollToTop from '../component/ScrollToTop';

const Home = memo(() => {
  const [heroLoaded, setHeroLoaded] = useState(false);

  // Listen for hero section load completion
  useEffect(() => {
    const checkHeroLoaded = () => {
      const heroElement = document.querySelector('[data-hero-loaded]');
      if (heroElement) {
        setHeroLoaded(true);
      }
    };

    // Check immediately and then periodically
    checkHeroLoaded();
    const interval = setInterval(checkHeroLoaded, 100);

    // Fallback timeout
    const timeout = setTimeout(() => {
      setHeroLoaded(true);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="">
      {/* Above the fold - load immediately */}
      <HeroSection onLoad={() => setHeroLoaded(true)} />
      <Form />
      <ScrollToTop />
      <FloatingButtons />

      {/* Below the fold - lazy load only after hero is loaded */}
      {heroLoaded && (
        <Suspense
          fallback={
            <div className="min-h-[200px] flex items-center justify-center">
              <LoadingSpinner />
            </div>
          }
        >
          <TravelPackages />
          <CardSectionTwo />
          <CardSectionThree />
          <PopularActivities />
          <WhyChooseUs />
          <TestimonialSection />
          <Adventure />
          <ImageSlider />
        </Suspense>
      )}
    </div>
  );
});

Home.displayName = 'Home';
export default Home;
