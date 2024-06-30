import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import { startLocal } from "../../data/LocalData";

function Detailse() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="max-w-[1320px] mx-auto rounded-lg bg-[#FFFF] shadow-lg mt-[3rem]">
      <div className="flex items-center gap-1 mt-6 mr-4 p-4">
        {startLocal.map((start, index) => (
          <span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`${
              hoveredIndex === index
                ? "text-yellow-300 transition-all duration-200 ease-in cursor-pointer"
                : "text-gray-500 transition-all duration-200 ease-in cursor-pointer"
            }`}
          >
            {start.start}
          </span>
        ))}
        <p className="mr-[1rem] text-[16px] opacity-55">به ما امتیاز بدهید</p>
      </div>

      <div className="p-7 leading-8 opacity-75">
        <p>
          شاید اولین سوالی که به ذهن هر کسی برسد این باشد که تفاوت سایت{" "}
          <span className="text-blue-700 cursor-pointer hover:text-blue-800 duration-300">
            وردپرسی
          </span>{" "}
          با سایتی که{" "}
          <span className="text-blue-700 cursor-pointer hover:text-blue-800 duration-300">
            کدنویسی
          </span>{" "}
          شده است چیست اگر بخواهیم به طور خلاصه بگوییم{" "}
          <span className="text-blue-700 cursor-pointer hover:text-blue-800 duration-300">
            وردپرس
          </span>{" "}
          یک ابزار طراحی سایت است که به ما قالب های آماده و تا حدی امکان شخصی
          سازی سایت را میدهد
        </p>

        <div className="mt-8">
          <p className="text-red-800 font-bold">
            برنامه نویسی سایت چیست و چه مزایایی نسبت به ورپرس دارد؟
          </p>
        </div>
        <ul className="list-disc">
          <li className="mt-5">
            <span className="font-bold">انعطاف‌پذیری بالا:</span> با
            برنامه‌نویسی سفارشی، شما کنترل کامل بر طراحی و عملکرد سایت خود دارید
            و می‌توانید آن را به صورت دقیق بر اساس نیازها و خواسته‌های خود تنظیم
            کنید.
          </li>
          <li className="mt-5">
            <span className="font-bold">بهینه‌سازی عملکرد:</span> سایت‌های
            برنامه‌نویسی شده به طور معمول سریع‌تر و بهینه‌تر از سایت‌های وردپرسی
            هستند زیرا فقط شامل کدهایی هستند که مورد نیاز شماست.
          </li>

          <li className="mt-5">
            <span className="font-bold">امنیت بهتر:</span> سایت‌های سفارشی
            می‌توانند از نظر امنیتی قوی‌تر باشند زیرا کدهای آنها به صورت اختصاصی
            نوشته شده و احتمال نفوذ کمتری دارند.
          </li>
          <li className="mt-5">
            <span className="font-bold">مقیاس‌پذیری:</span> در صورت نیاز به
            افزودن ویژگی‌ها یا گسترش سایت، برنامه‌نویسی سفارشی امکان گسترش و
            توسعه آسان‌تر و بدون محدودیت‌های سیستم‌های مدیریت محتوا را فراهم
            می‌کند.
          </li>
          <li className="mt-5">
            <span className="font-bold"> پشتیبانی و نگهداری:</span> با داشتن یک
            سایت برنامه‌نویسی شده، شما می‌توانید به یک تیم پشتیبانی اختصاصی
            دسترسی داشته باشید که می‌تواند به سرعت و به دقت مشکلات را حل کند و
            نیازهای شما را برآورده سازد.
          </li>
        </ul>
        <p className="font-bold mt-5">
          این مزایا نشان می‌دهند که برنامه‌نویسی سفارشی می‌تواند گزینه‌ای
          مناسب‌تر برای کسانی باشد که به دنبال یک سایت منحصر به فرد، کارآمد و
          قابل اعتماد هستند.
        </p>
      </div>

      <div>left</div>
    </div>
  );
}

export default Detailse;
