import "./picAd.css";
const PicAd = () => {
  return (
    <div
      className="w-100 show flex flex-col justify-center flex-md-row items-center px-[10px] pt-[42px] gap-5"
      style={{ maxWidth: "1600px" }}
    >
      <article
        style={{ direction: "rtl" }}
        className="content flex flex-col gap-[14px]"
      >
        <h2 className="text-white font-bold text-[20px]">
          دنیایی متنوع از فیلم و کارتون‌های کودکانه
        </h2>
        <p className="text-[#bbbbbb] p-0 mb-2 text-[13px]">
          ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای
          امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به
          بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
        </p>
        <div className="flex gap-[10px]">
          <button className="btn btn-light text-[11px] btn-sm rounded-[8px] font-bold py-[10px] px-[16px] h-[38px]">
            فیلیمو کودک بساز
          </button>
          <button className="btn btn-light text-[11px] btn-sm rounded-[8px] font-bold py-[10px] px-[16px] h-[38px]">
            تماشای فیلیمو کودک
          </button>
        </div>
      </article>
      <section className="w-[420px] size">
        <img
          src={require("../../../images/bg-kids.webp")}
          alt="show"
          className="img-fluid"
        />
      </section>
    </div>
  );
};

export default PicAd;
