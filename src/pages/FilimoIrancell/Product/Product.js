import "./product.css";
const Product = () => {
  return (
    <>
      <h2 className="w-[100%] text-right p-4 text-white font-bold max-w-[1600px]">
        تماشای رایگان
      </h2>
      <div className="wraper mb-3">
        <div className="product">
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-1.jpg")}
                className="img-fliud"
                alt="p--1"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>7.6/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۰۳ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              لاک پشت های نینجا
            </p>
          </div>
          <div className="pro">
            <div className="image">
              <img
                src={require("../../../images/pro-2.jpg")}
                className="img-fluid"
                alt="p--2"
              />
              <div className="roposh relative">
                <div
                  className="content flex row-gap-2 text-white text-[10px] flex-col px-[3px] py-2 absolute bottom-0 right-0"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="m-0 flex gap-1 items-center font-bold flex-row-reverse w-[60px] bg-[gray] justify-center h-[20px]"
                    style={{ borderRadius: "8px" }}
                  >
                    <span>6.2/10</span>
                    <svg
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                    >
                      <defs>
                        <g id="ui-icon-imdb" viewBox="0 0 24 24">
                          <g className="b">
                            <rect y="6.83" width="2.18" height="9.99"></rect>
                            <path
                              className="c"
                              d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                            ></path>
                            <path
                              className="c"
                              d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                            ></path>
                            <path
                              className="c"
                              d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                            ></path>
                          </g>
                        </g>
                      </defs>
                      <g fill="#FFFFFF">
                        <g className="b">
                          <rect y="6.83" width="2.18" height="9.99"></rect>
                          <path
                            className="c"
                            d="M7.08 11.42l-.36-2.5c-.1-.8-.2-1.49-.3-2.09H3.27v10H5.45V10.17l.92 6.65H7.86L8.73 10v6.8h2.17v-10H7.66Z"
                          ></path>
                          <path
                            className="c"
                            d="M24 10.64a1.26 1.26 0 0 0-.23-.54 1.23 1.23 0 0 0-.56-.43 2.08 2.08 0 0 0-.87-.16 2.4 2.4 0 0 0-.9.17 2.06 2.06 0 0 0-.67.52V6.83H18.55v10h2.18V16a2 2 0 0 0 .67.55 2.3 2.3 0 0 0 .9.18 1.76 1.76 0 0 0 1-.3 1.35 1.35 0 0 0 .55-.74A5 5 0 0 0 24 14.45V11.77A9 9 0 0 0 24 10.64Zm-1.91 4.15a.55.55 0 1 1-1.09 0v-3.4a.55.55 0 0 1 1.09 0Z"
                          ></path>
                          <path
                            className="c"
                            d="M17 7.56A1.8 1.8 0 0 0 16 7a9.53 9.53 0 0 0-2.24-.17H12v10h2.91a6.79 6.79 0 0 0 1.29-.09 1.93 1.93 0 0 0 .72-.53 1.33 1.33 0 0 0 .41-.7 8.14 8.14 0 0 0 .12-1.76V10.29a14.47 14.47 0 0 0-.08-1.87A1.89 1.89 0 0 0 17 7.56Zm-1.7 6.84a.55.55 0 0 1-.54.55h-.55V8.6h.55a.55.55 0 0 1 .54.55Z"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </p>
                  <p className="m-0">انیمیشن - اکشن</p>
                  <p className="m-0">۲۰۱۷ - آمریکا - دوبله شده</p>
                </div>
              </div>
            </div>
            <p className="m-0 text-white text-[12px] text-right py-2">
              مرد عنکبوتی
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
