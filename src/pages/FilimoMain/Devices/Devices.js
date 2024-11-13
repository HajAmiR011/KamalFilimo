const Devices = () => {
  return (
    <div
      className="w-100 p-3 d-md-flex items-center gap-4 mb-[30px] bg-[#1b1b1b]"
      style={{ direction: "rtl", maxWidth: "1600px" }}
    >
      <section className="d-none d-md-block">
        <img src={require("../../../images/deviceLg.webp")} alt="" />
      </section>
      <article className="flex flex-col gap-4">
        <h1 className="text-white text-[16px] font-bold">
          تماشای فیلیمو با همه دستگاه‌ها
        </h1>
        <p className="p-0 text-[whitesmoke] text-[13px]">
          می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل،
          تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.
        </p>
        <img
          src={require("../../../images/deviceSm.webp")}
          alt="deviceSm"
          className="d-md-none"
        />
        <div className="flex gap-[10px] items-start">
          <div>
            <img
              src={require("../../../images/laptop.png")}
              alt="icon-laptop"
              className="w-[27px]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[whitesmoke] font-bold text-[14px]">
              کامپیوتر و لپ‌تاپ
            </h2>
            <span className="text-[aliceblue] text-[11px]">
              windows PC - MacOS - Chorom OS
            </span>
          </div>
        </div>
        <div className="flex gap-[10px] items-start">
          <div>
            <img
              src={require("../../../images/mobile.png")}
              alt="icon-mobile"
              className="w-[21px]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[whitesmoke] font-bold text-[14px]">
              موبایل و تبلت
            </h2>
            <span className="text-[aliceblue] text-[11px]">
              Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets
            </span>
          </div>
        </div>
        <div className="flex gap-[10px] items-start">
          <div>
            <img
              src={require("../../../images/game.png")}
              alt="icon-game"
              className="w-[27px]"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-[whitesmoke] font-bold text-[14px]">
              کنسول‌های بازی (Browser)
            </h2>
            <span className="text-[aliceblue] text-[11px]">
              Xbox Series S - Xbox Seris X - PS5 - PS4
            </span>
          </div>
        </div>
        <button className="btn btn-success btn-sm h-[40px] text-[11px] w-[165px] px-[10px] py-[16px] flex justify-content-center gap-1 items-center">
          <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-white">
            <g id="ui-icon-subscription" viewBox="0 0 24 24">
              <path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path>
              <path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path>
              <circle cx="16" cy="9" r="1"></circle>
              <circle cx="16" cy="15" r="1"></circle>
              <circle cx="16" cy="12" r="1"></circle>
            </g>
          </svg>
          <span>خرید اشتراک و تماشا</span>
        </button>
      </article>
    </div>
  );
};

export default Devices;
