import React, { Suspense, lazy, memo } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';

// Lazy load below-the-fold components
const CardSection7 = lazy(() => import('../component/card/cardSection7'));
const CardSection8 = lazy(() => import('../component/card/cardSection8'));
const WhyChooseUs = lazy(() => import('../component/whyChooseUs'));
const TestimonialSection = lazy(() =>
  import('../component/Testimonial/Testimonial3')
);
const Adventure = lazy(() => import('../component/Adventure'));
const ImageSlider = lazy(() => import('../component/carousel/carousel3'));

// Import above-the-fold components normally
import HeroSection3 from '../component/HeroSection3';
import Form from '../component/Form';
import FloatingButtons from '../component/FloatingButtons';
import ScrollToTop from '../component/ScrollToTop';

const Kashmir = memo(() => {
  return (
    <div>
      {/* Above the fold */}
      <HeroSection3 />
      <Form />
      <ScrollToTop />
      <FloatingButtons />

      {/* Below the fold */}
      <Suspense fallback={<LoadingSpinner />}>
        <CardSection7 />
        <CardSection8 />
        <WhyChooseUs />
        <TestimonialSection />
        <Adventure />
        <ImageSlider />
      </Suspense>
    </div>
  );
});

Kashmir.displayName = 'Kashmir';
export default Kashmir;
