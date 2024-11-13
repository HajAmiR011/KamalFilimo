import SwiperFree from "./SwiperFree/SwiperFree";
import "./SwiperFree/swiperFree.css";
const FreeMedia = () => {
  return (
    <div
      style={{ direction: "rtl", maxWidth: "1600px" }}
      className="salam w-[100%] py-[20px] sm:px-3 md:px-[20px] lg:px-[40px] xl:px-[60px]"
    >
      <h2 className="text-white text-[17px] mb-[32px] font-bold">
        محتواهای رایگان
      </h2>
      <div className="Wrap w-[100%]">{<SwiperFree />}</div>
    </div>
  );
};

export default FreeMedia;
