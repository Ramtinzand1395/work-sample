import { useEffect, useState } from "react";
import logo from "../assets/js.png";
const Navbar = () => {
  const [navState, setNavState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);
  return (
    <div
      className={`fixed top-0 w-full h-[10vh] flex items-center justify-around transition-all duration-200 z-40  ${
        navState ? "bg-blue-700 bg-opacity-80" : "bg-blue-400"
      }`}
    >
      <div className="">
        <img src={logo} className="w-10 h-10" alt="" />
      </div>
      <div className=" text-white text-xl font-vazir cursor-pointer flex items-center justify-around w-[60vw]">
        <div className="w-full flex items-center justify-around ">
          <div className=" text-white cursor-pointer flex items-center justify-around w-[60vw]">
            <a href="#services">
              <p className="hover:text-red-500 transition-all duration-150">
                خدمات
              </p>
            </a>
            <a href="#price">
              <p className="hover:text-red-500 transition-all duration-150">
                قیمت ها
              </p>
            </a>
            <p className="hover:text-red-500 transition-all duration-150">
              مقالات
            </p>
            <p className="hover:text-red-500 transition-all duration-150">
              نمونه کار ها
            </p>
          </div>
        </div>
      </div>
      <div className="w-auto flex items-center border-2 border-white rounded-md">
        <div className="bg-white p-4">
          <p className="text-blue-500 font-semibold font-tanha">ثبت سفارش </p>
        </div>
        <div className="mx-2 flex flex-col ">
          <p className="hover:text-white cursor-pointer text-white font-semibold">
            09138433385
          </p>
          <p className="hover:text-white cursor-pointer text-white font-semibold">
            09138433385
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
