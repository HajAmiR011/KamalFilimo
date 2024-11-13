const EndShow = () => {
  return (
    <div
      className="relative w-100 h-[400px]"
      style={{
        maxWidth: "1600px",
        background:
          "radial-gradient(100% 410.68% at 100% 100%,rgba(0,0,0,0) 0,rgba(0,29,13,.54) 53.55%,rgba(0,0,0,0) 100%)",
      }}
    >
      <div className="font-bold flex flex-col items-center absolute top-[50%] w-[100%] translate-y-[-50%] left-[50%] translate-x-[-50%] gap-[18px]">
        <img
          src={require("../../../images/logo_EndShow.png")}
          alt=""
          className="mb-[40px]"
        />
        <div
          className="flex w-100 items-center text-[#bbbbbb] flex-column gap-3 gap-lg-4 gap-xl-5 gap-md-2 flex-md-row justify-content-md-center text-[14px] mb-4"
          style={{ direction: "rtl" }}
        >
          <div className="flex gap-2 items-center">
            <span className="bg-[rgba(28,181,97,.24)] d-flex justify-center items-center w-[18px] h-[18px] rounded-[50%]">
              <svg
                viewBox="0 0 24 24"
                className="w-[14px] h-[14px] fill-[#1cb561]"
              >
                <g id="ui-icon-check" viewBox="0 0 24 24">
                  <path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path>
                </g>
              </svg>
            </span>
            <span>هزاران فیلم و سریال خارجی (دوبله و زیرنویس)</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-[rgba(28,181,97,.24)] d-flex justify-center items-center w-[18px] h-[18px] rounded-[50%]">
              <svg
                viewBox="0 0 24 24"
                className="w-[14px] h-[14px] fill-[#1cb561]"
              >
                <g id="ui-icon-check" viewBox="0 0 24 24">
                  <path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path>
                </g>
              </svg>
            </span>
            <span>هزاران انیمیشن و کارتون برای کودکان</span>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-[rgba(28,181,97,.24)] d-flex justify-center items-center w-[18px] h-[18px] rounded-[50%]">
              <svg
                viewBox="0 0 24 24"
                className="w-[14px] h-[14px] fill-[#1cb561]"
              >
                <g id="ui-icon-check" viewBox="0 0 24 24">
                  <path d="M9.77 18.73a1 1 0 0 1-.71-.29L4.3 13.71a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l4 3.95 8.54-10.6A1 1 0 1 1 19.78 6.9L10.54 18.36a1 1 0 0 1-.72.37Z"></path>
                </g>
              </svg>
            </span>
            <span>پشتیبانی 24 ساعته برای راهنمایی شما</span>
          </div>
        </div>
        <button className="btn btn-success btn-lg text-[15px] w-[285px] py-[17px] justify-content-center flex gap-2 items-center">
          <span>خرید اشتراک و تماشا</span>
          <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] fill-white">
            <g id="ui-icon-subscription" viewBox="0 0 24 24">
              <path d="M19 4H5A3 3 0 0 0 2 7V17a3 3 0 0 0 3 3H19a3 3 0 0 0 3-3V7A3 3 0 0 0 19 4Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7A1 1 0 0 1 5 6H19a1 1 0 0 1 1 1Z"></path>
              <path d="M12.4 11 9 8.74A1.25 1.25 0 0 0 7 9.79v4.42A1.26 1.26 0 0 0 9 15.27l3.44-2.21A1.26 1.26 0 0 0 12.4 11Z"></path>
              <circle cx="16" cy="9" r="1"></circle>
              <circle cx="16" cy="15" r="1"></circle>
              <circle cx="16" cy="12" r="1"></circle>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EndShow;
