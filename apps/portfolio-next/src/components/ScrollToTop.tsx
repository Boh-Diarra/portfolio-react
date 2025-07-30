'use client';
import { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa6';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gradient-to-r from-[#FD9800] to-[#ff6b35] hover:from-[#ff6b35] hover:to-[#FD9800] text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#FD9800] focus:ring-opacity-50"
          aria-label="Retour en haut"
        >
          <FaChevronUp size={20} />
        </button>
      )}
    </div>
  );
} 