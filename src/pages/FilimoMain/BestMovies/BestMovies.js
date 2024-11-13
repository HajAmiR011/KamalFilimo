import "./movie.css";
const BestMovies = () => {
  return (
    <div
      className="w-[100%] h-[324px] p-2 mb-[40px]"
      style={{ maxWidth: "1600px", direction: "rtl" }}
    >
      <h2 className="text-white text-[17px] font-bold my-4 titlee">
        محبوب‌ترین‌های فیلیمو
      </h2>
      <div className="w-100 flex justify-center overflow-auto py-2">
        <div className="wrraper flex w-[975px]">
          <img src={require("../../../images/pro-1.webp")} alt="" />
          <img src={require("../../../images/pro-2.webp")} alt="" />
          <img src={require("../../../images/pro-2.webp")} alt="" />
          <img src={require("../../../images/pro-2.webp")} alt="" />
          <img src={require("../../../images/pro-1.webp")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BestMovies;
