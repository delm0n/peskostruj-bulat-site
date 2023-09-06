import React, { useState } from "react";
import Image from "../components/Image.jsx";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function Performance() {
  const items = [
    {
      img: "perf-1",
      time: "7 мин.",
      text: "Очистка диска от ржавчины",
      video: "https://youtu.be/FYZQvg8XHBw",
    },

    {
      img: "perf-2",
      time: "4 мин.",
      text: "Матирование стекла",
      video: "https://youtu.be/IWg_ffByq6I",
    },

    {
      img: "perf-3",
      time: "6 мин.",
      text: "Снятие старой краски",
      video: "https://youtu.be/GOYGxFQg0QE",
    },
  ];

  return (
    <section id="performance" className="performance">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
            Высокая производительность <br /> и{" "}
            <span className="text-primary">быстрый результат </span>
          </h3>
          <p className="subtitle">
            Выполняйте любой вид работ за считанные&nbsp;минуты
          </p>
        </div>

        <div className="performance-wrapper">
          {items.map((item, idx) => (
            <a
              href={item.video}
              data-fancybox
              key={idx}
              className="performance-wrapper__item"
            >
              <LazyLoadComponent>
                <Image
                  mobil={true}
                  media={769}
                  srcImgMob={`build/images/performance/${item.img}_mobil.png`}
                  srcSourceMob={`build/images/performance/${item.img}_mobil.webp`}
                  srcImg={`build/images/performance/${item.img}.png`}
                  srcSource={`build/images/performance/${item.img}.webp`}
                  altImg={`#`}
                />
              </LazyLoadComponent>
              <div className="item-bottom">
                <div className="item-bottom__wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="29"
                    height="29"
                    viewBox="0 0 29 29"
                    fill="none"
                  >
                    <g id="Group 1171274787">
                      <circle
                        id="Ellipse 74"
                        cx="14.5"
                        cy="14.5"
                        r="14.5"
                        fill="white"
                      />
                      <path
                        id="Polygon 4"
                        d="M19.9035 13.5136C20.6617 13.9513 20.6617 15.0456 19.9035 15.4834L12.6535 19.6691C11.8953 20.1069 10.9476 19.5597 10.9476 18.6843L10.9476 10.3127C10.9476 9.43722 11.8953 8.89006 12.6535 9.32779L19.9035 13.5136Z"
                        fill="#5F7DCB"
                      />
                    </g>
                  </svg>
                  <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                </div>
                <div className="item-bottom__hover"></div>
              </div>
              <div className="item-top">
                <Image
                  srcImg={`build/images/performance/icon-time.png`}
                  srcSource={`build/images/performance/icon-time.webp`}
                  altImg={`#`}
                />
                <span dangerouslySetInnerHTML={{ __html: item.time }}></span>
              </div>
            </a>
          ))}
        </div>

        <div className="performance-decr">
          <p className="title">
            Аппарат работает под давлением 4-8 атм. Наиболее оптимальный
            режим&nbsp;для:
          </p>
          <ul>
            <li>декоративной обработки: 200-350&nbsp;л/мин;</li>
            <li>очистки и реставрации: 600-700&nbsp;л/мин.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
