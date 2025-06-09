import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaPaperPlane } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../assets/logo.svg';
import { useLocation } from 'react-router-dom';

// Constants moved outside component to prevent recreation
const DESTINATION_MAP = {
  ladakh: [
    'Leh Ladakh Expedition',
    'Leh Ladakh Tour Package From Delhi',
    'Leh Ladakh Tour Package From Srinagar',
    'Spiti Fill Circuit, Shimla to Manali Road Trip From Delhi',
    'Spiti Valley with Chandratal',
    'Winter Spiti Valley',
    'Ladakh Bike Tour Package',
    'Leh Ladakh Bike Package From Delhi',
    'Leh to Leh With Umling La Bike Trip',
  ],
  kashmir: [
    'Kashmir Honeymoon Packages',
    'Glimpses of Kashmir',
    'Paradise Kashmir',
    'Kashmir Family Packages',
    'Kashmir With Vaishno Devi',
    'Best of Kashmir',
  ],
  default: [
    'Shimla Manali Honeymoon Package from Delhi',
    'Manali Honeymoon Package from Delhi',
    'Jibhi-Tirthan Valley-Kasol-Manali Tour',
    'Tour of Himachal Pradesh with Amritsar',
    'Incredible Himachal',
    'Himalayan Journey with Taj',
    'Shimla Manali Tour by Volvo',
    'Manali Tour by Volvo',
    'Dharamshala Dalhousie Volvo Package',
  ],
};

const FORM_INPUTS = [
  { label: 'Full Name', id: 'fullname', type: 'text' },
  { label: 'Email address', id: 'email', type: 'email' },
  { label: 'Mobile no', id: 'mobile', type: 'text' },
  { label: 'City', id: 'city', type: 'text' },
];

const INITIAL_FORM_DATA = {
  destination: '',
  fullname: '',
  email: '',
  mobile: '',
  city: '',
};

// Custom Toast Component - Memoized
const CustomToast = memo(({ t, onDismiss }) => (
  <div
    className={`bg-white w-[95vw] sm:w-[100vw] max-w-[90%] sm:max-w-sm rounded-xl shadow-lg border border-gray-300 p-4 mt-20 ${
      t.visible ? 'animate-enter' : 'animate-leave'
    } fixed sm:top-16 top-[70px] ${
      window.innerWidth < 640 ? 'left-1/2 -translate-x-1/2' : 'right-6'
    } z-[9999]`}
  >
    <div className="flex justify-between items-center mb-2">
      <img
        src={logo}
        alt="Logo"
        className="w-32 h-10 object-contain"
        loading="lazy"
      />
      <button onClick={onDismiss} aria-label="Close notification">
        <IoMdClose className="text-xl text-gray-600 hover:text-black transition" />
      </button>
    </div>
    <hr className="mb-3" />
    <div className="text-[18px] text-gray-700 leading-relaxed text-center sm:text-left">
      <p className="font-bold text-black text-[22px]">
        We've received your request.
      </p>
      <p className="text-[17px]">
        Our representative will contact you shortly.
        <br />
        For urgent assistance, call{' '}
        <span className="font-semibold text-green-600">8580787896</span> or
        email{' '}
        <span className="font-semibold text-green-600">
          info@onismtourhimachal.in
        </span>
      </p>
    </div>
  </div>
));

CustomToast.displayName = 'CustomToast';

// Form Input Component - Memoized
const FormInput = memo(({ label, id, type, value, onChange }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      id={id}
      name={id}
      type={type}
      required
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
    />
  </div>
));

FormInput.displayName = 'FormInput';

// Main Component
const QuoteFormModal = memo(() => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const location = useLocation();

  // Memoize destination options based on path
  const destinationOptions = useMemo(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('ladakh') || path.includes('spiti')) {
      return DESTINATION_MAP.ladakh;
    } else if (path.includes('kashmir')) {
      return DESTINATION_MAP.kashmir;
    }
    return DESTINATION_MAP.default;
  }, [location.pathname]);

  // Show modal with delay - only run once
  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []); // Empty dependency array - only run once

  // Memoized handlers
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const showSuccessToast = useCallback(() => {
    toast.custom((t) => (
      <CustomToast t={t} onDismiss={() => toast.dismiss(t.id)} />
    ));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      if (isSubmitting) return;
      setIsSubmitting(true);

      // Track conversion
      if (typeof window !== 'undefined' && window.gtag_report_conversion) {
        window.gtag_report_conversion('AW-11046863854/hV0qCNud6YoaEO6Hx5Mp');
      }

      const formDataToSend = new FormData();
      formDataToSend.append(
        'access_key',
        '1e7b0b82-9182-425f-9ce2-6968f20db5d1'
      );
      formDataToSend.append('subject', 'New Form Submission from Website');
      formDataToSend.append('from_name', 'Onism Tour');

      // Append form data
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formDataToSend,
        });

        const result = await response.json();

        if (result.success) {
          showSuccessToast();
          setShowModal(false);
          setFormData(INITIAL_FORM_DATA);
        } else {
          toast.error(result.message || 'Form submission failed');
        }
      } catch (error) {
        console.error('Form Error:', error);
        toast.error('Something went wrong! Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting, showSuccessToast]
  );

  // Don't render modal if not shown
  if (!showModal) {
    return <Toaster position="top-right" />;
  }

  return (
    <>
      <Toaster position="top-right" />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        onClick={handleCloseModal}
      >
        <div
          className="bg-white w-full max-w-lg mx-4 rounded-xl shadow-2xl relative font-sans transform transition-all"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-black text-2xl z-10 p-1 rounded-full hover:bg-gray-100 transition-colors"
            onClick={handleCloseModal}
            aria-label="Close modal"
          >
            <IoMdClose />
          </button>

          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Get Free Quotes
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Destination Select */}
              <div>
                <label
                  htmlFor="destination"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Destination
                </label>
                <select
                  id="destination"
                  name="destination"
                  required
                  value={formData.destination}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                >
                  <option value="">Choose your Destination</option>
                  {destinationOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Form Inputs */}
              {FORM_INPUTS.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={formData[input.id]}
                  onChange={handleInputChange}
                />
              ))}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`mt-6 w-full ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-orange-500'
                } transition-colors text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 text-lg duration-300`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Enquiry
                    <span className="bg-white text-green-600 p-2 rounded-full">
                      <FaPaperPlane size={14} />
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
});

QuoteFormModal.displayName = 'QuoteFormModal';

export default QuoteFormModal;
