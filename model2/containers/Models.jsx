import React, { useState, useEffect } from "react";
import Image from "../components/Image.jsx";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector, useDispatch } from "react-redux";
import { addMain } from "../store/dopsReducer.js";
import { openOrder } from "../store/modalsReducer.js";
import { Transition } from "react-transition-group";
import useWindowWidth from "../hooks/useWindowWidth.jsx";


function Models() {
  const dispatch = useDispatch();
  const mainDops = useSelector((state) => state.dops.mainProductsState);
  const bulat2_18 = useSelector((state) => state.dops.bulat2_18);
  const bulat2_24 = useSelector((state) => state.dops.bulat2_24);
  const bulat2_30 = useSelector((state) => state.dops.bulat2_30);
  const windowWidth = useWindowWidth(991);

  const bulat1_27 = useSelector((state) => state.dops.bulat1_27);
  const bulat1_35 = useSelector((state) => state.dops.bulat1_35);
  const bulat1_40 = useSelector((state) => state.dops.bulat1_40);


  const models = [
    {
      modelsList: [
    {
      id: 482917,
      title: "18 литров",
      list: [
        "<b>Высота:</b> 810 мм",
        "<b>Длина шланга:</b> 2,5&nbsp;м",
        "<b>Сопло:</b> 2 мм",
        "<b>Вес:</b> 8,2&nbsp;кг",
      ],
      price: bulat2_18.priceF,
      oldPrice: bulat2_18.oldPriceF,
    },
    {
      id: 482918,
      title: "24 литра",
      list: [
        "<b>Высота:</b> 870&nbsp;мм",
        "<b>Длина шланга:</b> 2,5&nbsp;м",
        "<b>Сопло:</b> 2 мм",
        "<b>Вес:</b> 9,5&nbsp;кг",
      ],
      price: bulat2_24.priceF,
      oldPrice: bulat2_24.oldPriceF,
    },
    {
      id: 482919,
      title: "30 литров",
      list: [
        "<b>Высота:</b> 960&nbsp;мм",
        "<b>Длина шланга:</b> 2,5&nbsp;м",
        "<b>Сопло:</b> 2 мм",
        "<b>Вес:</b> 10,9&nbsp;кг",
      ],
      price: bulat2_30.priceF,
      oldPrice: bulat2_30.oldPriceF,
    },
  ],
  activeTab: true ,
  
img: 'bulat-2'
    }
    ,

    {
      modelsList: [
    {
      id: 481364,
      title: "27 литров",
      list: [
        "<b>Высота:</b> 730 мм",
        "<b>Длина шланга:</b> 2,5&nbsp;м",
        "<b>Сопло:</b> 2 мм",
        "<b>Вес:</b> 13,8&nbsp;кг",
      ],
      price: bulat1_27.priceF,
      oldPrice: bulat1_27.oldPriceF,
    },
    {
      id: 481365,
      title: "35 литров",
      list: [
        "<b>Высота:</b> 830&nbsp;мм",
        "<b>Длина шланга:</b> 2,5&nbsp;м",
        "<b>Сопло:</b> 2 мм",
        "<b>Вес:</b> 15,4&nbsp;кг",
      ],
      price: bulat1_35.priceF,
      oldPrice: bulat1_35.oldPriceF,
    },
    {
      id: 481366,
      title: "40 литров",
      list: [
        "<b>Высота:</b> 930&nbsp;мм",
        "<b>Длина шланга:</b> 2,5&nbsp;м",
        "<b>Сопло:</b> 2 мм",
        "<b>Вес:</b> 16,5&nbsp;кг",
      ],
      price: bulat1_40.priceF,
      oldPrice: bulat1_40.oldPriceF,
    },
  ], activeTab: false,
  img: 'bulat-1'
    }
  ]

  // const modelsList2 = ;
  // const modelsList1 = ;
  const [tab, setTab] = useState(true);

  function checkOrder(id) {
    for (let i = 0; i < mainDops.length; i++) {
      mainDops[i].selected = false;
      if (mainDops[i].id == id) {
        mainDops[i].selected = true;
      }
    }
    dispatch(addMain(mainDops));
    dispatch(openOrder(true));
  }

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <section id="models" className="models">
      <div className="content-container">
        <div className="title-box">
          <h2 className="title">
            Закажите пескоструй «БУЛАТ&nbsp;2»
            <br />
            <span className="text-primary">напрямую от производителя </span>
          </h2>
        </div>

        <div className="models-button">
          <div
            className={tab ? "button-tab button-tab--active" : "button-tab"}
            onClick={() => setTab(true)}
          >
            Булат 2
          </div>
          <div
            className={!tab ? "button-tab button-tab--active" : "button-tab"}
            onClick={() => setTab(false)}
          >
            Булат
          </div>
        </div>


        {!windowWidth ? (
        <div className="models-wrapper">
        {models.map((model__item, index) => ( 
          <Transition key={index} in={tab == model__item.activeTab } timeout={duration}>
            {(state) => (
              <div className={` fade-container ${state}`}>
                <div className="wrapper"
                >
                  {model__item.modelsList.map((model, idx) => (
                    <div key={model.title}>
                      <div className="models__img-wrap">
                        <Image
                          srcImgMob={`build/images/models/${model__item.img}-${
                            idx + 1
                          }.png`}
                          srcSourceMob={`build/images/models/${model__item.img}-${
                            idx + 1
                          }.webp`}
                          mobil={true}
                          media={575}
                          srcImg={`build/images/models/${model__item.img}-${
                            idx + 1
                          }_mobile.png`}
                          srcSource={`build/images/models/${model__item.img}-${
                            idx + 1
                          }_mobile.webp`}
                          altImg={model.title}
                        />
                        <div className="models__title-box">
                          <p
                            className="models__title"
                            dangerouslySetInnerHTML={{ __html: model.title }}
                          ></p>
                        </div>
                      </div>
                      <div className="models__text-wrap">
                        <ul className="models__list">
                          {model.list.map((el, id) => (
                            <li
                              key={id}
                              className="models__list-item"
                              dangerouslySetInnerHTML={{ __html: el }}
                            ></li>
                          ))}
                        </ul>
                        <div className="offer-box">
                        <div className="models__price-wrap">
                          <p className="models__price">
                            <span>{model.price}</span> руб.
                          </p>
                          <p className="models__oldPrice">
                            <span>{model.oldPrice}</span> руб.
                          </p>
                        </div>

                        <button
                          onClick={() => checkOrder(model.id)}
                          className="btn btn-anim"
                        >
                          Заказать
                        </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="models__pagination"></div>
              </div>
            )}
          </Transition>
        ))}

          
          {/* <Transition in={!tab} timeout={duration}>
            {(state) => (
              <div className={` fade-container ${state}`}>
                <div
                >
                  {modelsList1.map((model, idx) => (
                    <div key={model.title}>
                      <div className="models__img-wrap">
                        <Image
                          srcImgMob={`build/images/models/bulat-1-${
                            idx + 1
                          }.png`}
                          srcSourceMob={`build/images/models/bulat-1-${
                            idx + 1
                          }.webp`}
                          mobil={true}
                          media={575}
                          srcImg={`build/images/models/bulat-1-${
                            idx + 1
                          }_mobile.png`}
                          srcSource={`build/images/models/bulat-1-${
                            idx + 1
                          }_mobile.webp`}
                          altImg={model.title}
                        />
                        <div className="models__title-box">
                          <p
                            className="models__title"
                            dangerouslySetInnerHTML={{ __html: model.title }}
                          ></p>
                        </div>
                      </div>
                      <div className="models__text-wrap">
                        <ul className="models__list">
                          {model.list.map((el, id) => (
                            <li
                              key={id}
                              className="models__list-item"
                              dangerouslySetInnerHTML={{ __html: el }}
                            ></li>
                          ))}
                        </ul>
                        <div className="models__price-wrap">
                          <p className="models__price">
                            <span>{model.price}</span> руб.
                          </p>
                          <p className="models__oldPrice">
                            <span>{model.oldPrice}</span> руб.
                          </p>
                        </div>
                        <button
                          onClick={() => checkOrder(model.id)}
                          className="btn btn-anim"
                        >
                          Заказать
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="models__pagination2"></div>
              </div>
            )}
          </Transition> */}
        </div>) : (
        <div className="models-wrapper">
          <Transition in={tab} timeout={duration}>
            {(state) => (
              <div className={` fade-container ${state}`}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  loop={false}
                  spaceBetween={30}
                  autoHeight={true}
                  slidesPerView={"auto"}
                  pagination={{
                    clickable: true,
                    el: ".models__pagination",
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
                  {models[0].modelsList.map((model, idx) => (
                    <SwiperSlide key={model.title}>
                      <div className="models__img-wrap">
                        <Image
                          srcImgMob={`build/images/models/bulat-2-${
                            idx + 1
                          }.png`}
                          srcSourceMob={`build/images/models/bulat-2-${
                            idx + 1
                          }.webp`}
                          mobil={true}
                          media={575}
                          srcImg={`build/images/models/bulat-2-${
                            idx + 1
                          }_mobile.png`}
                          srcSource={`build/images/models/bulat-2-${
                            idx + 1
                          }_mobile.webp`}
                          altImg={model.title}
                        />
                        <div className="models__title-box">
                          <p
                            className="models__title"
                            dangerouslySetInnerHTML={{ __html: model.title }}
                          ></p>
                        </div>
                      </div>
                      <div className="models__text-wrap">
                        <ul className="models__list">
                          {model.list.map((el, id) => (
                            <li
                              key={id}
                              className="models__list-item"
                              dangerouslySetInnerHTML={{ __html: el }}
                            ></li>
                          ))}
                        </ul>
                        <div className="models__price-wrap">
                          <p className="models__price">
                            <span>{model.price}</span> руб.
                          </p>
                          <p className="models__oldPrice">
                            <span>{model.oldPrice}</span> руб.
                          </p>
                        </div>
                        <button
                          onClick={() => checkOrder(model.id)}
                          className="btn btn-anim"
                        >
                          Заказать
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="models__pagination"></div>
              </div>
            )}
          </Transition>

          <Transition in={!tab} timeout={duration}>
            {(state) => (
              <div className={` fade-container ${state}`}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  loop={false}
                  spaceBetween={30}
                  autoHeight={true}
                  slidesPerView={"auto"}
                  pagination={{
                    clickable: true,
                    el: ".models__pagination2",
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
                  {models[1].modelsList.map((model, idx) => (
                    <SwiperSlide key={model.title}>
                      <div className="models__img-wrap">
                        <Image
                          srcImgMob={`build/images/models/bulat-1-${
                            idx + 1
                          }.png`}
                          srcSourceMob={`build/images/models/bulat-1-${
                            idx + 1
                          }.webp`}
                          mobil={true}
                          media={575}
                          srcImg={`build/images/models/bulat-1-${
                            idx + 1
                          }_mobile.png`}
                          srcSource={`build/images/models/bulat-1-${
                            idx + 1
                          }_mobile.webp`}
                          altImg={model.title}
                        />
                        <div className="models__title-box">
                          <p
                            className="models__title"
                            dangerouslySetInnerHTML={{ __html: model.title }}
                          ></p>
                        </div>
                      </div>
                      <div className="models__text-wrap">
                        <ul className="models__list">
                          {model.list.map((el, id) => (
                            <li
                              key={id}
                              className="models__list-item"
                              dangerouslySetInnerHTML={{ __html: el }}
                            ></li>
                          ))}
                        </ul>
                        <div className="models__price-wrap">
                          <p className="models__price">
                            <span>{model.price}</span> руб.
                          </p>
                          <p className="models__oldPrice">
                            <span>{model.oldPrice}</span> руб.
                          </p>
                        </div>
                        <button
                          onClick={() => checkOrder(model.id)}
                          className="btn btn-anim"
                        >
                          Заказать
                        </button>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                <div className="models__pagination2"></div>
              </div>
            )}
          </Transition>
        </div>)
}
      </div>
    </section>
  );
}

export default Models;
