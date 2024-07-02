const Services = () => {
  return (
    <section id="services" className="w-full h-max">
      <div>
        <h3 className="font-bold font-vazir text-center text-4xl my-4">
          خدمات ویژه ما
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-2 md:mx-auto container">
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">طراحی قالب‌های منحصربه‌فرد</h4>
          <p>
            با ما قالبی بی‌نظیر و شخصی‌سازی شده دریافت کنید که دقیقاً بر اساس نیازها و سلیقه شما طراحی شده است.
          </p>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">تضمین قیمت و کیفیت</h4>
          <p>
            با ارائه تغییرات حرفه‌ای و اصلاحات ویژه در وب سایت شما, ما بهترین کیفیت را با مناسب‌ترین قیمت تضمین می‌کنیم.
          </p>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">بهینه‌سازی سایت برای موتورهای جستجو</h4>
          <p>
            ارتقاء رتبه سایت شما در نتایج جستجو و جذب بیشتر ترافیک آنلاین با تکنیک‌های حرفه‌ای ما.
          </p>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">پشتیبانی و نگهداری مستمر</h4>
          <p>
            خدمات پشتیبانی فنی، به‌روزرسانی و نگهداری سایت برای حفظ عملکرد بهینه و امنیت بالای سایت شما.
          </p>
        </div>
        <div className="bg-blue-200 p-4 rounded-lg text-blue-900 h-[30vh] flex items-start justify-around flex-col">
          <h4 className="font-bold text-2xl mb-2">داشبورد سفارشی برای مدیریت آسان</h4>
          <p>
            پنل ادمین سفارشی و جامع با توجه به نیازهای شما، برای دسترسی آسان به تمامی اطلاعات وب سایت.
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default Services;
