import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const Buttonup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed transition-all duration-200 ease-out left-[0.3rem] bottom-[3rem] bg-blue-400 flex justify-center items-center h-[59px] w-[59px] rounded-[100%]"
        >
          <FaArrowUp size={22} color="white" />
        </button>
      )}
    </div>
  );
};

export default Buttonup;
