import React, { useState } from "react";
import Image from "../components/Image.jsx";
import { Navigation, Pagination } from "swiper";
import { useSelector, useDispatch } from "react-redux";
import { openOrder } from "../store/modalsReducer.js";
import { addMain } from "../store/dopsReducer.js";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Swiper, SwiperSlide } from "swiper/react";
export default function Sale() {
  const dispatch = useDispatch();
  const mainDops = useSelector((state) => state.dops.mainProductsState);
  const bulat2_18 = useSelector((state) => state.dops.bulat2_18.priceF + " ₽");
  const monthName = useSelector((state) => state.php.month);

  const sale = [
    {
      title: "Пескоструй <br> «Булат&nbsp;2»",
      list: [
        `<span>Широкая горловина </span>, в которую удобно <br>
          засыпать песок даже без воронки.`,

        `<span>Усовершенствованный жиклер</span>: можно <br>
          прочистить прямо во время работы.`,

        `<span>Удобная вакуум-заглушка</span> без резьбы.`,

        `<span>Эффективное быстросъёмное соединение</span>
          для подачи воздуха.`,

        `<span>Автоматический узел подачи</span>, предназначенный специально для работы с абразивами.`,
      ],
      img: "bulat-2",
      activeId: "482917",
      class: "bulat-2",
    },

    {
      title: "Пескоструй <br> «Булат»",
      list: [
        `Обычная узкая горловина. Для засыпи абразива
          требуется воронка.`,
        `Стандартный жиклер, для очистки которого необходимо прекратить работу аппарата и разобрать пескоструй.`,
        `Стандартная крышка на резьбе.`,
        `Нет быстросъёмного соединения для подачи воздуха. Необходимы дополнительные штуцеры и стягивание шланга хомутом.`,
        `Стандартный узел подачи для абразивных материалов.`,
      ],
      img: "bulat-1",
      activeId: "481364",
      class: "bulat-1",
    },
  ];

  function checkOrder(id) {
    console.log(id);

    for (let i = 0; i < mainDops.length; i++) {
      mainDops[i].selected = false;
      if (mainDops[i].id == id) {
        mainDops[i].selected = true;
      }
    }
    dispatch(addMain(mainDops));
    dispatch(openOrder(true));
  }

  return (
    <>
      <div className="content-container">
        <div className="line"></div>
      </div>
      <section id="sale" className="sale">
        <div className="content-container">
          <div className="sale-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              loop={true}
              spaceBetween={30}
              slidesPerView={"auto"}
              pagination={{
                clickable: true,
                el: ".sale__pagination",
              }}
              navigation={{
                prevEl: ".sale__slider-prev",
                nextEl: ".sale__slider-next",
              }}
              breakpoints={{
                0: {
                  spaceBetween: 20,
                },
                576: {
                  spaceBetween: 30,
                },
              }}
            >
              {sale.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className={"sale-item " + item.class}>
                    <div className="sale-item__title">
                      <h2 dangerouslySetInnerHTML={{ __html: item.title }}></h2>
                    </div>

                    <ul className="sale-item__list">
                      {item.list.map((li, idx__li) => (
                        <li
                          key={idx__li}
                          dangerouslySetInnerHTML={{ __html: li }}
                        ></li>
                      ))}
                    </ul>

                    <div className="sale-item__img">
                      <LazyLoadComponent>
                        {item.class == "bulat-2" ? (
                          <div className="discont">
                            <div className="discont-box">
                              <div className="dicount-text">
                                <div className="dicount-text__mon">
                                  <span>До конца</span>
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: monthName,
                                    }}
                                  ></span>
                                </div>

                                <p className="percent">-30%</p>
                              </div>

                              <p
                                className="price"
                                dangerouslySetInnerHTML={{ __html: bulat2_18 }}
                              ></p>
                              <Image
                                classImg="price-box"
                                srcImg={`build/images/sale/price.png`}
                                srcSource={`build/images/sale/price.webp`}
                                altImg={item.title}
                              />
                            </div>
                          </div>
                        ) : (
                          <></>
                        )}
                        <Image
                          classImg={`main`}
                          media={992}
                          mobil={true}
                          srcImg={`build/images/sale/${item.img}_mobile.png`}
                          srcSourceMob={`build/images/sale/${item.img}.webp`}
                          srcImgMob={`build/images/sale/${item.img}.png`}
                          srcSource={`build/images/sale/${item.img}_mobile.webp`}
                          altImg={item.title}
                        />
                      </LazyLoadComponent>
                    </div>

                    <button
                      onClick={() => {
                        checkOrder(item.activeId);
                      }}
                      className="btn"
                    >
                      Выбрать литраж
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="sale__slider-controls">
              <div className="sale__slider-prev">
                <span>
                  <img
                    src="build/images/global/arrow-left.svg"
                    alt="Предыдущий слайд"
                  />
                </span>
              </div>
              <div className="sale__pagination"></div>
              <div className="sale__slider-next">
                <span>
                  <img
                    src="build/images/global/arrow-right.svg"
                    alt="Следующий слайд"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
