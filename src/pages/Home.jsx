import React, { Suspense, lazy, memo } from 'react';
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
  return (
    <div className="">
      {/* Above the fold - load immediately */}
      <HeroSection />
      <Form />
      <ScrollToTop />
      <FloatingButtons />

      {/* Below the fold - lazy load */}
      <Suspense fallback={<LoadingSpinner />}>
        <TravelPackages />
        <CardSectionTwo />
        <CardSectionThree />
        <PopularActivities />
        <WhyChooseUs />
        <TestimonialSection />
        <Adventure />
        <ImageSlider />
      </Suspense>
    </div>
  );
});

Home.displayName = 'Home';
export default Home;
