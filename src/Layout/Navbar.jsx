import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[20vh] flex items-center justify-around bg-blue-400 ">
      <div className="">logo</div>
      <div className=" text-white font-semibold font-vazir cursor-pointer flex items-center justify-around w-[60vw]">
        <p className="hover:text-red-500 transition-all duration-150">خدمات</p>
        <p className="hover:text-red-500 transition-all duration-150">
          قیمت ها
        </p>
        <p className="hover:text-red-500 transition-all duration-150">مقالات</p>
        <p className="hover:text-red-500 transition-all duration-150">
          نمونه کار ها
        </p>
      </div>
      <div className="w-auto flex items-center border-2 border-white rounded-md">
        <div className="bg-white p-4">
          <p>ثبت سفارش </p>
        </div>
        <div className="mx-2">
          <p>09138433385</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
