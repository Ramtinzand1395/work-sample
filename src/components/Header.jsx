import header from "../assets/header.png";
const Header = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center ">
      <div className=" grid grid-cols-2 items-center mx-2">
        <div className="flex flex-col items-start justify-evenly h-[50vh] md:h-[80vh] text-white mx-auto">
          <h2 className="font-bold text-base whitespace-nowrap md:text-2xl text-black ">
            هزینه طراحی وب سایت 1403
          </h2>
          <p className="text-black md:text-lg text-xs">
            اگر بزینس خودتو داری و میخوای به درآمادم بالا برسی همین الان شروع کن
          </p>
          <div className="flex items-center justify-around w-full">
            <div className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">ثبت سفارش</span>
            </div>
            <div className="relative inline-flex items-center justify-start px-6 py-4 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group">
              <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
                لیست قیمت ها
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <img src={header} className="w-full h-full " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
