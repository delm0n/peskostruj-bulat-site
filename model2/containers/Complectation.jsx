import React, { useState } from "react";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import Image from "../components/Image.jsx";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function Complectation() {
  const windowWidth = useWindowWidth(1024);

  const list = [
    {
      img: "comp-1",
      title: "Быстросъёмные соединения",
      decr: "Обеспечивают моментальное подсоединение компрессора к&nbsp;пескострую.",
    },

    {
      img: "comp-2",
      title: "Осушитель воздуха",
      decr: "Регулирует давление в бункере, осушает подаваемый&nbsp;воздух.",
    },

    {
      img: "comp-3",
      title: "Загрузочный бункер",
      decr: "Представляет собой ёмкость для абразива. <br> Материал — углеродистая сталь.",
    },

    {
      img: "comp-4",
      title: "Шланг подачи абразива",
      decr: "Выдерживает давление 8 атм, устойчив к кислой и щелочной среде, имеет трёхслойные напорные рукава из&nbsp;резины.",
    },

    {
      img: "comp-5",
      title: "Пистолет",
      decr: "Устройство для контроля подачи песка под&nbsp;давлением.",
    },

    {
      img: "comp-6",
      title: "Радиальный манометр",
      decr: "Прибор для измерения давления в бункере. Точность 0,25&nbsp;МПа.",
    },

    {
      img: "comp-7",
      title: "Аварийный клапан",
      decr: "Сбрасывает давление в бункере при достижении показателя в 8&nbsp;бар. Позволяет сделать работу с оборудованием безопасной.",
    },

    {
      img: "comp-8",
      title: "Кран для перекрытия давления",
      decr: "Сохраняет давление в бункере. Используется для работы без компрессора.",
    },

    {
      img: "comp-9",
      title: "Распределительный узел",
      decr: "Контролирует подачу абразива из бака, предотвращая скопление песка в шланге. Даёт возможность простой прочистки жиклера.",
    },

    {
      img: "comp-10",
      title: "Колёса",
      decr: "Позволяют <br> легко и быстро перемещать оборудование.",
    },

    {
      img: "comp-11",
      title: "Рама",
      decr: "Прочная конструкция из высококачественной углеродистой стали выдерживает нагрузку до 150&nbsp;кг.",
    },

    {
      img: "comp-12",
      title: "Керамическое сопло (2&nbsp;мм)",
      decr: "Обладает повышенной прочностью и подходит для всех видов абразива. Рассчитано на 2&nbsp;часа непрерывной работы.",
    },
  ];

  return (
    <section id="complectation" className="complectation">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
          «Булат 2» <span className="text-primary">в деталях</span> 
          </h3>
          <p className="subtitle">
          Оцените все преимущества стартовой комплектации
          </p>
        </div>

        <div className="row">
          {!windowWidth ? (
            <div className="complectation-wrapper">
              {list.map((item, idx) => (
                <div key={idx} className="complectation-item">
                  <div className="round">{idx + 1}</div>
                  <LazyLoadComponent>
                    <Image
                      srcImg={`build/images/complectation/${item.img}.png`}
                      srcSource={`build/images/complectation/${item.img}.webp`}
                      altImg={item.title.replace(/\&nbsp;/g, " ")}
                    />
                  </LazyLoadComponent>
                  <p
                    className="complectation-title"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></p>
                  <p
                    className="complectation-decr"
                    dangerouslySetInnerHTML={{ __html: item.decr }}
                  ></p>
                </div>
              ))}
            </div>
          ) : (
            <>
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                spaceBetween={30}
                autoHeight={true}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  el: ".complectation__pagination",
                }}
                navigation={{
                  prevEl: ".complectation__prev",
                  nextEl: ".complectation__next",
                }}
              >
                {list.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div key={idx} className="complectation-item">
                      <div className="round">{idx + 1}</div>
                      <Image
                        srcImg={`build/images/complectation/${item.img}-mobile.png`}
                        srcSource={`build/images/complectation/${item.img}-mobile.webp`}
                        altImg={item.title}
                      />
                      <p
                        className="complectation-title"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      ></p>
                      <p
                        className="complectation-decr"
                        dangerouslySetInnerHTML={{ __html: item.decr }}
                      ></p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="complectation__controls">
                <div className="mobile-buttons-container">
                  <button className="complectation__prev">
                    <span>
                      <img src="build/images/global/arrow-left.svg" alt="" />
                    </span>
                  </button>
                  <button className="complectation__next">
                    <span>
                      <img src="build/images/global/arrow-right.svg" alt="" />
                    </span>
                  </button>
                </div>

                <div className="complectation__pagination"></div>
              </div>
              {/* <div className="complectation__pagination"></div> */}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
