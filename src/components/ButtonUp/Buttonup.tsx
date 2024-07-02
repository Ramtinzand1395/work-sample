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
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed left-[2rem] bottom-[3rem] bg-blue-400 flex justify-center items-center h-[59px] w-[59px] rounded-[100%]"
        >
          <FaArrowUp size={22} color="white" />
        </button>
      )}
    </div>
  );
};

export default Buttonup;
