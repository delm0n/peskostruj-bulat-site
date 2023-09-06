import React, { useState } from "react";
import { useSelector } from "react-redux";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import Image from "../components/Image.jsx";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export default function Reasons() {
  const webp = useSelector((state) => state.php.webp);
  const windowWidth = useWindowWidth(1024);

  let [counter, setCounter] = useState(0);

  function setSwiperIndex(index) {
    setCounter(index);
  }

  const reasons = [
    {
      title: `Упрощённая загрузка <br>
            абразива`,
      decr: `Если горлышко на баке маленькое и узкое, наполнить бункер абразивом и ничего 
            не просыпать возможно только с помощью воронки. Благодаря чашеобразной форме пескоструя «Булат 2» абразив
             попадает внутрь без дополнительных приспособлений.`,
      list: ["Воронка больше не потребуется!"],
      img: "reasons-1",
      video: "reasons-1",
    },

    {
      title: `Крышка удерживается <br>
      за счёт вакуума в бункере`,
      decr: ``,
      list: [
        "Никакого дребезжания и песка в резьбе.",
        "Герметичное и плотное соединение.",
        "Крышка не изнашивается и не ломается (однако при необходимости её легко заменить на новую).",
        "Бункер заполняется абразивом ещё быстрее и удобнее.",
      ],
      img: "reasons-2",
    },

    {
      title: `Распределительный узел <br> подачи песка`,
      decr: `Песок, который подаётся через жиклер, смешивается с воздухом в распределительном узле.
       Когда воздушный поток прекращается, абразив достигает предельного уровня в крестовине и перестаёт 
       сыпаться дальше. При повторном открытии пистолета по шлангу снова начинает идти воздух, подхватывая скопившийся песок.`,
      list: [
        "Если пистолет закрыт, абразив не скапливается и не забивает шланг.",
      ],
      img: "reasons-3",
      video: "reasons-3",
    },

    {
      title: `Двойная система <br>
      регулировки давления`,
      decr: `«Булат 2» позволяет регулировать давление сразу в двух местах: в баке и самой системе.`,
      list: [
        "Бак контролируется при помощи крана, который фиксирует уже имеющееся давление в бункере и не позволит воздуху выйти наружу впустую.",
        "Давление в системе регулируется через осушитель.",
      ],
      img: "reasons-4",
    },

    {
      title: `Совершенство в деталях`,
      decr: `Пескоструйный аппарат работает под давлением 4–8 атм, что требует особых
      мер безопасности. В конструкции
      «Булат 2» используются:`,
      list: [
        "Сертифицированный спускной клапан на 8 атм, ГОСТ 31294–2005.",
        "Манометр на 10 атм, класс точности — 2,5.",
      ],
      img: "reasons-5",
    },

    {
      title: `Осушитель воздуха`,
      decr: `На пескоструй «Булат 2» установлен осушитель воздуха AFR-2000. Он собирает конденсат в специальную ёмкость. Песок остаётся сухим, и аппарат не «плюётся».`,
      list: [
        "Работает при температуре 5–60°С.",
        "Выдерживает давление до 10 атм.",
      ],
      img: "reasons-6",
    },

    {
      title: `Керамическое сопло в комплекте`,
      decr: `В комплекте с пескоструйным аппаратом идёт керамическое сопло диаметром 2 мм, которое рассчитано на 1–2 часа работы.`,
      list: [
        "Повышенная износостойкость.",
        "Подходит для всех абразивов.",
        "Крепится под прижимную гайку.",
        "С помощью конического диффузора равномерно распределяет абразив по рабочей поверхности.",
      ],
      img: "reasons-7",
    },

    {
      title: `Запатентованная конструкция`,
      decr: `Конструкция запатентована и не имеет аналогов на российском рынке.`,
      list: [
        "Гарантия качества от завода-производителя.",
        "Уникальный аппарат.",
      ],
      img: "reasons-8",
    },
  ];

  return (
    <section id="reasons" className="reasons">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
            Лучшие конструкторские <br />
            <span className="text-primary">решения 2023 года</span>
          </h3>
          <p className="subtitle">
            8 причин выбрать обновлённый пескоструй «Булат&nbsp;2»
          </p>
        </div>
        <div className="row">
          <Swiper
            modules={[Navigation, Pagination]}
            loop={true}
            spaceBetween={30}
            autoHeight={true}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".reasons__pagination",
            }}
            navigation={{
              prevEl: ".reasons__prev",
              nextEl: ".reasons__next",
            }}
            onSwiper={(swiper) =>
              setSwiperIndex((counter = swiper.realIndex + 1))
            }
            onSlideChange={(swiper) =>
              setSwiperIndex((counter = swiper.realIndex + 1))
            }
          >
            {reasons.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="reasons-item">
                  <div className="reasons-item__img">
                    {item.video ? (
                      <>
                        <Image
                          classImg={`video-img`}
                          srcImg={`build/images/reasons/${item.img}.png`}
                          srcSource={`build/images/reasons/${item.img}.webp`}
                          altImg={item.title}
                        />
                        <LazyLoadComponent>
                          <video
                            autoPlay="autoplay"
                            preload="none"
                            loop="loop"
                            muted
                            poster={
                              `build/images/reasons/${item.img}.` +
                              (webp == "webp" ? "webp" : "png")
                            }
                          >
                            <source
                              src={`model2/static/${item.video}.mp4`}
                              type="video/mp4"
                            />
                          </video>
                        </LazyLoadComponent>
                      </>
                    ) : (
                      <Image
                        media={575}
                        mobil={true}
                        srcImgMob={`build/images/reasons/${item.img}.png`}
                        srcSource={`build/images/reasons/${item.img}_mobile.webp`}
                        srcImg={`build/images/reasons/${item.img}_mobile.png`}
                        srcSourceMob={`build/images/reasons/${item.img}.webp`}
                        altImg={item.title}
                      />
                    )}
                  </div>
                  <div className="reasons-item__content-container">
                    <div className="reasons-item__content">
                      {!windowWidth ? (
                        <div className="reasons-item__number">
                          <p> {idx + 1} </p>
                        </div>
                      ) : (
                        ""
                      )}
                      <h4 dangerouslySetInnerHTML={{ __html: item.title }}></h4>
                      {item.decr ? (
                        <p
                          className="decr"
                          dangerouslySetInnerHTML={{ __html: item.decr }}
                        ></p>
                      ) : (
                        ""
                      )}

                      {item.list.length ? (
                        <ul>
                          {item.list.map((li, idx2) => (
                            <li
                              key={idx2}
                              dangerouslySetInnerHTML={{ __html: li }}
                            ></li>
                          ))}
                        </ul>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="reasons__controls">
            <div className={`reasons__prev`}>
              <span>
                <img src="build/images/global/arrow-left.svg" alt="" />
              </span>
            </div>

            {!windowWidth ? (
              <div className={`reasons__pagination`}></div>
            ) : (
              <div className="reasons-item__number">
                <p> {counter}</p>
              </div>
            )}

            <div className={`reasons__next`}>
              <span>
                <img src="build/images/global/arrow-right.svg" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
