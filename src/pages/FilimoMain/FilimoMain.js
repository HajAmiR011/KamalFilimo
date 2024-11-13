import Menu from "../../Menu/Menu";
import Footer from "../../Footer/Footer";
import Slider from "./Slider/Slider";
import BestMovies from "./BestMovies/BestMovies";
import Devices from "./Devices/Devices";
import FreeMedia from "./FreeMedia/FreeMedia";
import PicAd from "./PicAd/PicAd";
import Questions from "./Questions/Questions";
import EndShow from "./EndShow/EndShow";
const FilimoMain = () => {
  return (
    <main className="bg-dark flex flex-col items-center">
      <Menu />
      {/* slider */}
      <div
        className="w-[100%] h-[460px] relative"
        style={{ maxWidth: "1600px" }}
      >
        <Slider />
        <div className="font-bold flex flex-col items-center absolute top-[60%] w-[100%] translate-y-[-48%] left-[50%] translate-x-[-50%] z-1 text-white gap-3">
          <h3 className="text-[orange]">با فیلیمو بی‌وقفه فیلم ببین</h3>
          <h1 className="text-[35px] mb-2">!کنترل همیشه دست توست</h1>
          <div
            className="flex w-100 items-center text-[whitesmoke] flex-column gap-2 gap-lg-4 gap-xl-5 gap-md-2 flex-md-row justify-content-md-center text-[14px] mb-3"
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
              <span>95 هزار اپیزود فیلم و سریال برای تماشا داری</span>
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
              <span>می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی</span>
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
              <span>می‌تونی یک عضو، مخصوص تماشای کودک بسازی</span>
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
          <h4 className="text-[10px] text-[#d3d9df] flex items-center gap-2">
            تخفیف ویژه برای کاربران جدید
            <svg
              viewBox="0 0 24 24"
              className="w-[18px] h-[18px] fill-[#d3d9df]"
            >
              <g id="ui-icon-giftcard" viewBox="0 0 24 24">
                <path d="M18.73 5.5h-.91a3 3 0 0 0-5.34-2.61l0 0-.46.8-.46-.8 0 0A3 3 0 0 0 6.18 5.5H4.73a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8.5A3 3 0 0 0 18.73 5.5ZM16 4.5a1 1 0 1 1-1-1A1 1 0 0 1 16 4.5Zm-8 0a1 1 0 1 1 1 1A1 1 0 0 1 8 4.5Zm-3.27 3H9.85L8.37 10.1a1 1 0 0 0 .37 1.36 1 1 0 0 0 1.37-.37L12 7.76l1.89 3.33a1 1 0 0 0 1.37.37 1 1 0 0 0 .37-1.36L14.15 7.5h4.58a1 1 0 0 1 1 1V14h-16V8.5A1 1 0 0 1 4.73 7.5Zm14 12h-14a1 1 0 0 1-1-1V17h16v1.5A1 1 0 0 1 18.73 19.5Z"></path>
              </g>
            </svg>
          </h4>
        </div>
      </div>
      {/* slider */}
      <BestMovies />
      <Devices />
      <FreeMedia />
      <PicAd />
      <Questions />
      <EndShow />
      <Footer />
    </main>
  );
};

export default FilimoMain;
