import { CiStar } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";

function Price() {
  return (
    <div id="price" className="max-w-[1300px] mx-auto h-auto md:h-[100vh] mb-5">
      <h2 className="text-center my-5 font-bold text-5xl">قیمت</h2>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 ">
        <div className="rounded-lg border-2 h-[80vh] bg-white">
          <div className="bg-blue-500 flex items-center justify-center p-4 rounded-b-3xl mx-10">
            <h5 className="font-semibold text-3xl text-white">پلن برنز</h5>
          </div>
          <div className="p-4">
            <ul className="flex flex-col justify-between h-[60vh]">
              <li className="flex items-center justify-between">
                {" "}
                سرعت سایت :
                <div className="flex">
                  <MdOutlineStar fill="black" className="w-5 h-5 " />
                  <MdOutlineStar fill="black" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                </div>
              </li>
              <li className="flex items-center justify-between">
                قابلیت سفارشی سازی :{" "}
                <div className="flex">
                  <MdOutlineStar fill="black" className="w-5 h-5 " />
                  <MdOutlineStar fill="black" className="w-5 h-5 " />
                  <MdOutlineStar fill="black" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                </div>{" "}
              </li>
              <li className="flex items-center justify-between">
                سئو تکنیکال <FaCheckCircle color="red" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                {" "}
                تغییر رنگ به سلیقه شما{" "}
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                اموزش کامل پنل کاربری :{" "}
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                پشتیبانی رایگان : ۱۲ ماهه
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                UI,UX : اختصاصی
                <FaCheckCircle color="red" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                زمان اجرا:
                <span>5 روز کاری</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="rounded-lg border-2 h-[80vh] bg-white">
          <div className="bg-blue-500 flex items-center justify-center p-4 rounded-b-3xl mx-10">
            <h5 className="font-semibold text-3xl text-white">پلن نقره ای</h5>
          </div>
          <div className="p-4">
            <ul className="flex flex-col justify-between h-[60vh]">
              <li className="flex items-center justify-between">
                {" "}
                سرعت سایت :
                <div className="flex">
                  <MdOutlineStar fill="black" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                </div>
              </li>
              <li className="flex items-center justify-between">
                قابلیت سفارشی سازی :{" "}
                <div className="flex">
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                </div>{" "}
              </li>
              <li className="flex items-center justify-between">
                سئو تکنیکال <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                {" "}
                تغییر رنگ به سلیقه شما{" "}
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                اموزش کامل پنل کاربری :{" "}
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                پشتیبانی رایگان : ۱۲ ماهه
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                UI,UX : اختصاصی
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                زمان اجرا:
                <span>15 روز کاری</span>
              </li>
            </ul>
          </div>
        </div>{" "}
        <div className="rounded-lg border-2 h-[80vh] bg-white">
          <div className="bg-blue-500 flex items-center justify-center p-4 rounded-b-3xl mx-10">
            <h5 className="font-semibold text-3xl text-white">پلن طلایی</h5>
          </div>
          <div className="p-4">
            <ul className="flex flex-col justify-between h-[60vh]">
              <li className="flex items-center justify-between">
                {" "}
                سرعت سایت :
                <div className="flex">
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                </div>
              </li>
              <li className="flex items-center justify-between">
                قابلیت سفارشی سازی :{" "}
                <div className="flex">
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                  <MdOutlineStar fill="orange" className="w-5 h-5 " />
                </div>{" "}
              </li>
              <li className="flex items-center justify-between">
                سئو تکنیکال <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                {" "}
                تغییر رنگ به سلیقه شما{" "}
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                اموزش کامل پنل کاربری :{" "}
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                پشتیبانی رایگان : ۱۲ ماهه
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                UI,UX : اختصاصی
                <FaCheckCircle color="green" className="w-5 h-5" />
              </li>
              <li className="flex items-center justify-between">
                زمان اجرا:
                <span>بسته به قرار داد</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
