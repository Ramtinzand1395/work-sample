import React from "react";

import coding from "../assets/images/footer.jpg";

function Footer() {
  return (
    <div className="h-[300px] bg-black/80 mt-[4rem] max-w-[1420px] mx-auto">
      <div className="flex lg:justify-between justify-center max-w-[1300px] mx-auto">
        <div className="w-[300px] flex flex-col items-center justify-center h-[300px]">
          <h1 className="text-xl text-white">طراحی و کدنویسی در جوانان سایت</h1>
          <p className="text-white text-center leading-[50px]">
            ما در جوانان سایت الویت را بر رضایت شما میبینیم و سعی ما بر ارائه
            دادن خدماتی ارزات,با کیفیت و سریع به مارفرما است
          </p>

          <div className="flex items-center gap-3 text-white font-bold mt-4">
            <p>تماس با ما:</p>
            <a href="tel:09138433385" className="">
              09138433385
            </a>
            <a href="tel:09354378110" className="">
              09354378110
            </a>
            {/* javananweb0098 */}
          </div>
        </div>

        <div className="lg:flex flex-col hidden items-center justify-center">
          <ul className="text-white font-bold">
            <li className="mt-4">خدمات:</li>
            <li className="mt-4">مشاوره رایگان</li>
            <li className="mt-4">طراحی</li>
            <li className="mt-4">کدنویسی اختصاصی</li>
            <li className="mt-4">ساخت صفحات شخصی و وبسایت</li>
            <li className="mt-4">سایت های فروگاهی</li>
          </ul>
        </div>

        <div className="lg:flex flex-col items-center  hidden justify-center">
          <img className="w-[400px] rounded-lg" src={coding} alt="/" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
