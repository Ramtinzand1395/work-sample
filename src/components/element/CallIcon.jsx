import React, { useState } from "react";
import { FiPhoneCall } from "react-icons/fi";

function CallIcon() {
  const [showNumbers, setShowNumbers] = useState(false);

  const handleIconClick = () => {
    setShowNumbers(!showNumbers);
  };

  return (
    <div className="fixed right-[0.3rem] bottom-[3rem]">
      <div className="icon-container" onClick={handleIconClick}>
        <div className="pulse-ring"></div>
        <div className="icon relative cursor-pointer">
          <FiPhoneCall size={22} />
        </div>
      </div>
      {showNumbers && (
        <div
          className={` w-[200px] absolute bg-white flex flex-col top-[-1.3rem] ${
            showNumbers ? "right-[-0.3rem]" : "right-0"
          } p-4 rounded-lg items-center`}
        >
          <a href="tel:09138433385" className="number">
            09138433385
          </a>
          <div className="border-t-[1px] border-gray-300 w-full"></div>
          <a href="tel:09354378110" className="number">
            09354378110
          </a>
          <button
            onClick={() => setShowNumbers(false)}
            className="font-tanha bg-blue-300 rounded-md text-gray-800 w-full"
          >
            بستن
          </button>
        </div>
      )}
    </div>
  );
}

export default CallIcon;
