// src/utils/analytics.js

/**
 * Analytics utility functions for ONISM Tour website
 * These functions integrate with Google Analytics 4 (GA4)
 */

// Check if gtag is available
const isGtagAvailable = () => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

/**
 * Track email clicks
 * @param {string} emailAddress - The email address that was clicked
 * @param {string} location - Where the email link was clicked from (e.g., 'header', 'footer', 'contact-page')
 */
export const trackEmailClick = (
  emailAddress = 'info@onismtourhimachal.in',
  location = 'unknown'
) => {
  if (!isGtagAvailable()) {
    console.warn('Google Analytics not available');
    return;
  }

  try {
    window.gtag('event', 'email_click', {
      event_category: 'contact',
      event_label: `${emailAddress}_${location}`,
      custom_parameter_1: emailAddress,
      custom_parameter_2: location,
      value: 1,
    });

    console.log(
      `Analytics: Email click tracked - ${emailAddress} from ${location}`
    );
  } catch (error) {
    console.error('Error tracking email click:', error);
  }
};

/**
 * Track phone number clicks
 * @param {string} phoneNumber - The phone number that was clicked
 * @param {string} location - Where the phone link was clicked from (e.g., 'header', 'footer', 'contact-page')
 */
export const trackPhoneClick = (phoneNumber, location = 'unknown') => {
  if (!isGtagAvailable()) {
    console.warn('Google Analytics not available');
    return;
  }

  try {
    window.gtag('event', 'phone_call', {
      event_category: 'contact',
      event_label: `${phoneNumber}_${location}`,
      custom_parameter_1: phoneNumber,
      custom_parameter_2: location,
      value: 1,
    });

    console.log(
      `Analytics: Phone click tracked - ${phoneNumber} from ${location}`
    );
  } catch (error) {
    console.error('Error tracking phone click:', error);
  }
};

/**
 * Track package/tour inquiries and clicks
 * @param {string} packageName - Name of the package/tour
 * @param {string} action - Type of action (e.g., 'view', 'inquiry', 'book_now', 'details_click')
 * @param {Object} additionalData - Additional data about the package
 */
export const trackPackageClick = (
  packageName,
  action = 'click',
  additionalData = {}
) => {
  if (!isGtagAvailable()) {
    console.warn('Google Analytics not available');
    return;
  }

  try {
    const eventData = {
      event_category: 'package_interaction',
      event_label: `${packageName}_${action}`,
      custom_parameter_1: packageName,
      custom_parameter_2: action,
      value: 1,
      ...additionalData,
    };

    window.gtag('event', 'package_click', eventData);

    // Also track as booking inquiry if it's a booking-related action
    if (['inquiry', 'book_now', 'contact_for_booking'].includes(action)) {
      window.gtag('event', 'booking_inquiry', {
        event_category: 'engagement',
        event_label: packageName,
        custom_parameter_1: packageName,
        custom_parameter_2: action,
        value: 1,
      });
    }

    console.log(
      `Analytics: Package click tracked - ${packageName} (${action})`
    );
  } catch (error) {
    console.error('Error tracking package click:', error);
  }
};

/**
 * Track form submissions
 * @param {Object} formData - Form submission data
 * @param {string} formData.form_name - Name of the form
 * @param {string} formData.form_location - Where the form was submitted from
 * @param {string} formData.destination - Selected destination package
 * @param {Object} formData.form_data - The submitted form data
 */
export const trackFormSubmission = ({
  form_name = 'quote_request',
  form_location = 'unknown',
  destination = '',
  form_data = {},
}) => {
  if (!isGtagAvailable()) {
    console.warn('Google Analytics not available');
    return;
  }

  try {
    const eventData = {
      event_category: 'form_submission',
      event_label: `${form_name}_${form_location}`,
      form_name,
      form_location,
      destination,
      ...form_data,
    };

    window.gtag('event', 'form_submit', eventData);

    // Also track as lead generation if it contains contact info
    if (form_data.email || form_data.phone) {
      window.gtag('event', 'generate_lead', {
        event_category: 'lead_generation',
        event_label: form_name,
        value: 1,
        currency: 'INR',
      });
    }

    console.log(
      `Analytics: Form submission tracked - ${form_name} from ${form_location}`
    );
  } catch (error) {
    console.error('Error tracking form submission:', error);
  }
};

/**
 * Convenience functions for common use cases
 */

// Email tracking shortcuts
export const trackHeaderEmailClick = () =>
  trackEmailClick('info@onismtourhimachal.in', 'header');
export const trackFooterEmailClick = () =>
  trackEmailClick('info@onismtourhimachal.in', 'footer');
export const trackContactPageEmailClick = () =>
  trackEmailClick('info@onismtourhimachal.in', 'contact_page');

// Phone tracking shortcuts
export const trackHeaderPhoneClick = (phoneNumber = '+91-8580787596') =>
  trackPhoneClick(phoneNumber, 'header');
export const trackFooterPhoneClick = (phoneNumber = '+91-8580787596') =>
  trackPhoneClick(phoneNumber, 'footer');
export const trackContactPagePhoneClick = (phoneNumber = '+91-8580787596') =>
  trackPhoneClick(phoneNumber, 'contact_page');

// Package tracking shortcuts
export const trackKashmirPackageClick = (action = 'click') =>
  trackPackageClick('Kashmir Tour Package', action);
export const trackLadakhPackageClick = (action = 'click') =>
  trackPackageClick('Ladakh Trip Package', action);
export const trackHimachalPackageClick = (action = 'click') =>
  trackPackageClick('Himachal Valley Tour', action);

/**
 * Generic function to track any custom event
 * @param {string} eventName - Name of the event
 * @param {Object} eventData - Event data object
 */
export const trackCustomEvent = (eventName, eventData = {}) => {
  if (!isGtagAvailable()) {
    console.warn('Google Analytics not available');
    return;
  }

  try {
    window.gtag('event', eventName, eventData);
    console.log(`Analytics: Custom event tracked - ${eventName}`, eventData);
  } catch (error) {
    console.error('Error tracking custom event:', error);
  }
};

/**
 * Track page views (useful for SPA navigation)
 * @param {string} pagePath - The page path
 * @param {string} pageTitle - The page title
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (!isGtagAvailable()) {
    console.warn('Google Analytics not available');
    return;
  }

  try {
    window.gtag('config', 'G-F63P384BWQ', {
      page_path: pagePath,
      page_title: pageTitle,
    });

    console.log(`Analytics: Page view tracked - ${pagePath}`);
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};
