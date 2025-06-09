import { Suspense, lazy, memo } from 'react';
import LoadingSpinner from '../component/LoadingSpinner';

// Lazy load below-the-fold components
const CardSection5 = lazy(() => import('../component/card/cardSection5'));
const CardSection6 = lazy(() => import('../component/card/cardSection6'));
const WhyChooseUs = lazy(() => import('../component/whyChooseUs'));
const TestimonialSection = lazy(() =>
  import('../component/Testimonial/Testimonial2')
);
const Adventure = lazy(() => import('../component/Adventure'));
const ImageSlider = lazy(() => import('../component/carousel/carousel1'));

// Import above-the-fold components normally
import HeroSection2 from '../component/HeroSection2';
import Form from '../component/Form';
import FloatingButtons from '../component/FloatingButtons';
import ScrollToTop from '../component/ScrollToTop';
import Footer from '../component/Footer';

const LadakhAndSpiti = memo(() => {
  return (
    <div>
      {/* Above the fold */}
      <HeroSection2 />
      <Form />
      <ScrollToTop />
      <FloatingButtons />

      {/* Below the fold */}
      <Suspense fallback={<LoadingSpinner />}>
        <CardSection5 />
        <CardSection6 />
        <WhyChooseUs />
        <TestimonialSection />
        <Adventure />
        <ImageSlider />
        <Footer />
      </Suspense>
    </div>
  );
});

LadakhAndSpiti.displayName = 'LadakhAndSpiti';
export default LadakhAndSpiti;
