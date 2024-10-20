import { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-10 transition-all duration-300 ease-in-out ${
        showButton ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <button
        className="flex items-center justify-center w-12 h-12 rounded-full bg-gold-200 text-white hover:bg-gold-300"
        onClick={handleClick}
      >
        <FaChevronUp />
      </button>
    </div>
  );
}

export default ScrollToTopButton;