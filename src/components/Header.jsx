import header from "../assets/header.jpg";
const Header = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <div className=" grid grid-cols-2 items-center ">
        <div className="flex flex-col items-start justify-evenly h-[80vh] text-white mx-auto">
          <h2 className="font-bold text-2xl text-black ">هزینه طراحی وب سایت 1403</h2>
          <p className="text-black">
            اگر بزینس خودتو داری و میخوای به درآمادم بالا برسی همین الان شروع کن
          </p>
        </div>
        <div className="">
          <img src={header} className="w-full h-full " alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
