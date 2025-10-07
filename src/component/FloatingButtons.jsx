import { useEffect, useState } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const FloatingButtons = () => {
  const [showButtons, setShowButtons] = useState(false);

  // Show after scrolling down 100px
  useEffect(() => {
    const handleScroll = () => {
      setShowButtons(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButtons && (
        <div className="fixed bottom-5 right-5 flex flex-col items-center gap-3 z-50">
          {/* WhatsApp */}
          <a
            href="https://wa.link/5bi0km" // replace with your WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 animate-pulse hover:bg-green-600 p-3 rounded-full shadow-lg transition"
          >
            <FaWhatsapp size={25} className="text-white text-xl" />
          </a>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="bg-green-500 hover:bg-green-600 p-3 rounded-full shadow-lg transition"
          >
            <FaArrowUp size={25} className="text-white text-xl" />
          </button>
        </div>
      )}
    </>
  );
};

export default FloatingButtons;
