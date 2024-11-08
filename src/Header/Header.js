import { Link } from "react-router-dom";
import "./header.css";
import { useEffect, useRef } from "react";
const Header = () => {
  const btn = useRef();
  const dokme = function () {
    btn.current.classList.remove("d-lg-block");
    btn.current.classList.add("hidden");
  };
  let flag = true;
  const dropMenu = () => {
    let item = document.querySelector(".dropMenuItem");
    if (flag) {
      item.classList.remove("hidden");
      item.classList.add("flex");
      flag = false;
    } else {
      item.classList.remove("flex");
      item.classList.add("hidden");
      flag = true;
    }
  };
  useEffect(() => {
    let free = document.querySelector("#free");
    let fri = document.querySelector("#fri");
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        free.classList.remove("bg-black/80");
        fri.classList.remove("border-gray-400");
        fri.classList.add("border-transparent");
      } else {
        fri.classList.remove("border-transparent");
        free.classList.add("bg-black/80");
        fri.classList.add("border-gray-400");
      }
    });
  });
  return (
    <div
      id="free"
      className="px-4 w-[100%] sticky top-[55px] z-10 transition-all duration-300 max-w-[1600px]"
    >
      <div
        id="fri"
        className="w-[100%] flex justify-between flex-row-reverse py-[16px] text-white border-t-[1px] border-transparent"
      >
        <div className="flex items-center">
          <h1>تماشای رایگان</h1>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center buttom hover:bg-[#3b3b3b]">
            <p>فیلتر</p>
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <defs>
                <g id="ui-icon-filter" viewBox="0 0 24 24">
                  <path d="M19.5 6H4.5a1 1 0 0 0 0 2h15a1 1 0 0 0 0-2Z"></path>
                  <path d="M17 11H7a1 1 0 0 0 0 2H17a1 1 0 0 0 0-2Z"></path>
                  <path d="M14.5 16h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Z"></path>
                </g>
              </defs>
              <g fill="#FFFFFF">
                <path d="M19.5 6H4.5a1 1 0 0 0 0 2h15a1 1 0 0 0 0-2Z"></path>
                <path d="M17 11H7a1 1 0 0 0 0 2H17a1 1 0 0 0 0-2Z"></path>
                <path d="M14.5 16h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2Z"></path>
              </g>
            </svg>
          </button>
          <Link to="/">
            <a className="d-lg-block d-none faal buttom" ref={btn}>
              <div onClick={() => dokme()} className="flex items-center">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <defs>
                    <g id="ui-icon-close" viewBox="0 0 24 24">
                      <path d="M13.41 12l6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59 5.71 4.29A1 1 0 0 0 4.29 5.71L10.59 12l-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L12 13.41l6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"></path>
                    </g>
                  </defs>
                  <g fill="#FFFFFF">
                    <path d="M13.41 12l6.3-6.29a1 1 0 1 0-1.42-1.42L12 10.59 5.71 4.29A1 1 0 0 0 4.29 5.71L10.59 12l-6.3 6.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L12 13.41l6.29 6.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z"></path>
                  </g>
                </svg>
                <p className="m-0">تماشای رایگان</p>
              </div>
            </a>
          </Link>
          <div
            className="buttom hover:bg-[#3b3b3b] dropMenu cursor-pointer flex items-center"
            onClick={dropMenu}
          >
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
            >
              <defs>
                <g id="ui-icon-arrow_drop_down" viewBox="0 0 24 24">
                  <path d="M12 17a1 1 0 0 1-.77-.36l-5-6A1 1 0 0 1 7 9H17a1 1 0 0 1 .77 1.64l-5 6A1 1 0 0 1 12 17Z"></path>
                </g>
              </defs>
              <g fill="#FFFFFF">
                <path d="M12 17a1 1 0 0 1-.77-.36l-5-6A1 1 0 0 1 7 9H17a1 1 0 0 1 .77 1.64l-5 6A1 1 0 0 1 12 17Z"></path>
              </g>
            </svg>
            <p className="m-0">مرتب سازی</p>
            <div className="dropMenuItem hidden">
              <ul className="bg-[#000] text-right" style={{ direction: "rtl" }}>
                <li>
                  <a href="#">پیشفرض</a>
                </li>
                <li>
                  <a href="#">تازه های فیلیمو</a>
                </li>
                <li>
                  <a href="#">جدید (سال ساخت)</a>
                </li>
                <li>
                  <a href="#">قدیمی (سال ساخت)</a>
                </li>
                <li>
                  <a href="#">بالاترین امتیاز</a>
                </li>
                <li>
                  <a href="#">امتیاز IMDB</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
