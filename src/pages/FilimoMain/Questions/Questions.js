import { useRef } from "react";
import "./question.css";
const Questions = () => {
  const test = useRef();
  const test1 = useRef();
  const test2 = useRef();
  const test3 = useRef();
  let flag = true;
  let flag1 = true;
  let flag2 = true;
  let flag3 = true;
  const btn = () => {
    if (flag) {
      test.current.classList.remove("hidden");
      test.current.classList.add("block");
      flag = false;
    } else {
      test.current.classList.remove("block");
      test.current.classList.add("hidden");
      flag = true;
    }
  };
  const btn1 = () => {
    if (flag1) {
      test1.current.classList.remove("hidden");
      test1.current.classList.add("block");
      flag1 = false;
    } else {
      test1.current.classList.remove("block");
      test1.current.classList.add("hidden");
      flag1 = true;
    }
  };
  const btn2 = () => {
    if (flag2) {
      test2.current.classList.remove("hidden");
      test2.current.classList.add("block");
      flag2 = false;
    } else {
      test2.current.classList.remove("block");
      test2.current.classList.add("hidden");
      flag2 = true;
    }
  };
  const btn3 = () => {
    if (flag3) {
      test3.current.classList.remove("hidden");
      test3.current.classList.add("block");
      flag3 = false;
    } else {
      test3.current.classList.remove("block");
      test3.current.classList.add("hidden");
      flag3 = true;
    }
  };
  return (
    <div
      className="questions w-100 flex flex-col justify-center md:py-[60px] md:px-[80px] lg:px-[120px]"
      style={{ maxWidth: "1600px" }}
    >
      <div className="head mb-[32px]">
        <h2 className="font-bold text-white text-center mb-[10px]">
          سوالات متداول
        </h2>
        <span className="text-[#bbbbbb] text-[12px] d-block text-center">
          سوال شایع دیگر کاربران شاید برای شما پیش امده باشد
        </span>
      </div>
      <div
        className="w-100 flex flex-col gap-[6px]"
        style={{ direction: "rtl" }}
      >
        <div className="p-3 w-100 bg-[#2b2b2b] text-white rounded-[8px] flex flex-col gap-3 border-1 border-white/50">
          <div
            className="flex justify-between font-semibold text-[15px] items-center cursor-pointer"
            onClick={() => {
              btn1();
            }}
          >
            <span>آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟</span>
            <span>+</span>
          </div>
          <div className="text-[13px] text-[#bbbbbb] hidden" ref={test1}>
            بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن
            فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر،
            هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و
            هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات
            بیشتر می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و{" "}
            دانلود از طریق اپلیکیشن را تماشا کنید.
          </div>
        </div>
        <div className="p-3 w-100 bg-[#2b2b2b] text-white rounded-[8px] flex flex-col gap-3 border-1 border-white/50">
          <div
            className="flex justify-between font-semibold text-[15px] items-center cursor-pointer"
            onClick={() => {
              btn2();
            }}
          >
            <span>آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟</span>
            <span>+</span>
          </div>
          <div className="text-[13px] text-[#bbbbbb] hidden" ref={test2}>
            بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن
            فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر،
            هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و
            هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات
            بیشتر می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و{" "}
            دانلود از طریق اپلیکیشن را تماشا کنید.
          </div>
        </div>
        <div className="p-3 w-100 bg-[#2b2b2b] text-white rounded-[8px] flex flex-col gap-3 border-1 border-white/50">
          <div
            className="flex justify-between font-semibold text-[15px] items-center cursor-pointer"
            onClick={() => {
              btn3();
            }}
          >
            <span>آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟</span>
            <span>+</span>
          </div>
          <div className="text-[13px] text-[#bbbbbb] hidden" ref={test3}>
            بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن
            فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر،
            هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و
            هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات
            بیشتر می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و{" "}
            دانلود از طریق اپلیکیشن را تماشا کنید.
          </div>
        </div>
        <div className="p-3 w-100 bg-[#2b2b2b] text-white rounded-[8px] flex flex-col gap-3 border-1 border-white/50">
          <div
            className="flex justify-between font-semibold text-[15px] items-center cursor-pointer"
            onClick={() => {
              btn();
            }}
          >
            <span>آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟</span>
            <span>+</span>
          </div>
          <div className="text-[13px] text-[#bbbbbb] hidden" ref={test}>
            بله، شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن
            فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر،
            هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و
            هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات
            بیشتر می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و{" "}
            دانلود از طریق اپلیکیشن را تماشا کنید.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
