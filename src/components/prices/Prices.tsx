import React from "react";

import pricee from "../../assets/worker/price.jpg";

function Prices() {
  return (
    <div className="max-w-[1300px] mx-auto mt-9">
      <h1 className="text-xl mb-4 text-center lg:text-start">
        هزینه طراحی و کدنویسی سایت چقدره؟
      </h1>
      <p className="leading-8 text-sm md:text-[17px] text-center lg:text-start">
        طراحی و کدنویسی یک سایت حرفه‌ای می‌تواند سرمایه‌گذاری بزرگی باشد که
        تاثیرات مثبت زیادی بر کسب‌وکار شما دارد. هزینه‌های این فرایند بسته به
        نیازها و انتظارات شما می‌تواند متفاوت باشد، اما برای درک بهتر ارزش این
        موضوع با ما تماس بگیرید
      </p>

      <div className="flex justify-center">
        <img
          src={pricee}
          alt="/"
          className="img rounded-lg mt-7 lg:w-[600px] w-[330px]"
        />
      </div>
    </div>
  );
}

export default Prices;
