// Updated QuoteFormModal.js with Analytics
import { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { IoMdClose } from 'react-icons/io';
import { FaPaperPlane } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../assets/logo.svg';
import { useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import {
  trackFormSubmission,
  trackCustomEvent,
  trackPhoneClick,
  trackEmailClick,
} from '../utils/analytics';

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

// Custom Toast Component - Memoized with Analytics
const CustomToast = memo(({ t, onDismiss }) => {
  // Track when phone number is clicked in toast
  const handlePhoneClick = useCallback(() => {
    trackPhoneClick('8580787896', 'success_toast');
  }, []);

  // Track when email is clicked in toast
  const handleEmailClick = useCallback(() => {
    trackEmailClick('info@onismtourhimachal.in', 'success_toast');
  }, []);

  return (
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
          <a
            href="tel:8580787896"
            onClick={handlePhoneClick}
            className="font-semibold text-green-600 hover:underline cursor-pointer"
          >
            8580787896
          </a>{' '}
          or email{' '}
          <a
            href="mailto:info@onismtourhimachal.in"
            onClick={handleEmailClick}
            className="font-semibold text-green-600 hover:underline cursor-pointer"
          >
            info@onismtourhimachal.in
          </a>
        </p>
      </div>
    </div>
  );
});

CustomToast.displayName = 'CustomToast';

// Form Input Component - Memoized with Analytics
const FormInput = memo(({ label, id, type, value, onChange }) => {
  // Track when user starts filling specific fields
  const handleFocus = useCallback(() => {
    trackCustomEvent('form_field_focus', {
      event_category: 'form_interaction',
      field_name: id,
      form_name: 'quote_request_modal',
    });
  }, [id]);

  return (
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
        onFocus={handleFocus}
        className="w-full border border-gray-300 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
      />
    </div>
  );
});

FormInput.displayName = 'FormInput';

// Main Component
const QuoteFormModal = memo(() => {
  const { showModal, closeModal, openModal } = useModal();
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

  // Show modal with delay - only run once on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      openModal();
      // Track modal display
      trackCustomEvent('modal_displayed', {
        event_category: 'modal',
        modal_type: 'quote_form',
        page_path: location.pathname,
        delay_seconds: 2,
      });
    }, 2000);
    return () => clearTimeout(timer);
  }, [openModal, location.pathname]);

  // Memoized handlers
  const handleCloseModal = useCallback(() => {
    // Track modal close
    trackCustomEvent('modal_closed', {
      event_category: 'modal',
      modal_type: 'quote_form',
      close_method: 'close_button',
    });
    closeModal();
  }, [closeModal]);

  const handleBackdropClick = useCallback(() => {
    // Track modal close via backdrop
    trackCustomEvent('modal_closed', {
      event_category: 'modal',
      modal_type: 'quote_form',
      close_method: 'backdrop_click',
    });
    closeModal();
  }, [closeModal]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  // Track destination selection
  const handleDestinationChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (value) {
      trackCustomEvent('destination_selected', {
        event_category: 'form_interaction',
        destination: value,
        form_location: 'quote_modal',
      });
    }
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

      // Track form submission start
      trackCustomEvent('form_submission_started', {
        event_category: 'form_interaction',
        form_name: 'quote_request_modal',
        destination: formData.destination,
      });

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
          // Track successful form submission
          trackFormSubmission({
            form_name: 'quote_request_modal',
            form_location: 'modal_popup',
            destination: formData.destination,
            form_data: {
              has_email: !!formData.email,
              has_phone: !!formData.mobile,
              has_city: !!formData.city,
              page_path: location.pathname,
            },
          });

          // Track successful lead generation
          trackCustomEvent('lead_generated', {
            event_category: 'conversion',
            lead_source: 'quote_form_modal',
            destination: formData.destination,
            value: 1,
          });

          showSuccessToast();
          closeModal();
          setFormData(INITIAL_FORM_DATA);
        } else {
          // Track form submission error
          trackCustomEvent('form_submission_error', {
            event_category: 'form_error',
            error_type: 'api_error',
            error_message: result.message || 'Unknown error',
          });
          toast.error(result.message || 'Form submission failed');
        }
      } catch (error) {
        console.error('Form Error:', error);

        // Track network/technical error
        trackCustomEvent('form_submission_error', {
          event_category: 'form_error',
          error_type: 'network_error',
          error_message: error.message,
        });

        toast.error('Something went wrong! Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, isSubmitting, showSuccessToast, closeModal, location.pathname]
  );

  // Don't render modal if not shown
  if (!showModal) {
    return <Toaster position="top-right" />;
  }

  return (
    <>
      <Toaster position="top-right" />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-all duration-300 ease-out"
        onClick={handleBackdropClick}
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
                  onChange={handleDestinationChange}
                  onFocus={() =>
                    trackCustomEvent('form_field_focus', {
                      event_category: 'form_interaction',
                      field_name: 'destination',
                      form_name: 'quote_request_modal',
                    })
                  }
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
                onClick={() => {
                  if (!isSubmitting) {
                    trackCustomEvent('form_submit_button_clicked', {
                      event_category: 'form_interaction',
                      form_name: 'quote_request_modal',
                      destination: formData.destination,
                    });
                  }
                }}
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
