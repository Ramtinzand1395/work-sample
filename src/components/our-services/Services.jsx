const Services = () => {
  return (
    <div id="services" className="w-full h-max">
      <div className="">
        <h3 className="font-bold font-vazir text-center text-4xl my-4 ">
          خدمات
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-auto container">
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">طراحی قالب</h4>
          <p>
            شامل ساخت یک قالب منحصر به فرد و شخصی‌سازی آن بر اساس نیازها و سلیقه
            مشتری است.
          </p>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">سفارشی‌ سازی قالب</h4>
          <p>
            این خدمات شامل تغییرات و اصلاحات در قالب‌های آماده وردپرس به منظور
            سازگاری با نیازها و طرح مورد نظر مشتری می‌شود.
          </p>
        </div>{" "}
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">بهینه‌ سازی سایت</h4>
          <p>
            بهینه ‌سازی سایت برای موتورهای جستجو به منظور بهبود رتبه‌بندی سایت
            در نتایج جستجو و جذب ترافیک آنلاین
          </p>
        </div>{" "}
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">پشتیبانی و نگهداری</h4>
          <p>
            ارائه خدمات پشتیبانی فنی، به‌روزرسانی و نگهداری سایت به منظور حفظ
            عملکرد و امنیت سایت.
          </p>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">داشبور سفارشی</h4>
          <p>
            با توجه به نیاز های مشتری اضافه و یا تغییر پنل ادمین و ارائه کلی
            اطلاعات وب سایت
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Services;
