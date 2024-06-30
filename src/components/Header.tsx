import React from "react";
import header from "../assets//header.jpg";
import Navbar from "./navbar/Navbar";
const Header = () => {
  return (
    <div className="w-full h-[80vh] bg-blue-700">
      <div className=" font-tanha grid grid-cols-2 items-center ">
        <div className="flex flex-col items-start justify-evenly h-[80vh] text-white mx-auto">
          <h2 className="font-bold text-2xl font-tanha">
            هزینه طراحی وب سایت 1403
          </h2>
          <p className="font-vazir">
            اگر بزینس خودتو داری و میخوای به درآمادم بالا برسی همین الان شروع کن
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img src={header} className="w-40 h-40" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
