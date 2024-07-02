import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

function BtnShow() {
  const [show, setShow] = useState(false);

  const upWindow = () => {
    window.scrollBy(0, -400);
  };

  const upWindow2 = () => {
    window.scrollBy(0, -1700);
  };

  return (
    <div className="mt-[7rem] flex justify-center">
      <div className="border-[1px] relative flex border-blue-500 rounded-l-2xl rounded-2xl">
        <button
          onClick={upWindow}
          className="w-[174px] hidden md:block text-blue-500 h-[29px] rounded-2xl border-blue-600 text-sm"
        >
          مشاهده نمونه کارها
        </button>
        <button
          onClick={upWindow2}
          className="w-[174px] md:hidden text-blue-500 h-[29px] rounded-2xl border-blue-600 text-sm"
        >
          مشاهده نمونه کارها
        </button>
        <button
          onClick={() => setShow(true)}
          className="w-[127px] h-[29px] text-white bg-[#3266CF] rounded-2xl"
        >
          ثبت درخواست
        </button>
      </div>

      {show && (
        <div
          className={`absolute rounded-lg transition-all duration-200 ease-in flex flex-col justify-center items-center xl:bottom-[32rem] md:bottom-[22rem] bg-white border w-[310px] h-[90px]`}
        >
          <a href="tel:09138433385" className="number">
            09138433385
          </a>
          <div className="border-t-[1px] border-gray-300 w-full"></div>
          <a href="tel:09354378110" className="number">
            09354378110
          </a>
          <IoMdClose
            onClick={() => setShow(false)}
            size={22}
            className="absolute top-0 left-0 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
}

export default BtnShow;
