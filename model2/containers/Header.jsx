import React, { useState } from "react";
import { openOrder } from "../store/modalsReducer.js";
import {useSelector, useDispatch } from "react-redux";
import Image from "../components/Image.jsx";
import HeaderTop from "./HeaderTop.jsx";
function Header() {
  const dispatch = useDispatch();
  const bulat2_18 = useSelector((state) => state.dops.bulat2_18);


  const [links, setLinks] = useState([
    { name: "Преимущества", to: "reasons", duration: 1000, offset: 0 },
    { name: "Отзывы", to: "customers", duration: 1000, offset: 0 },
    { name: "Доставка и оплата", to: "rassrochka", duration: 1000, offset: 0 },
    { name: "О производителе", to: "quality", duration: 1000, offset: 0 },
  ]);

  const features = [
    {
      title: "Бесперебойная работа",
      subtitle: "Отсоединяйте компрессор без потери&nbsp;давления",
    },

    {
      title: "Удобная воронка для абразива",
      subtitle: "Засыпайте песок без лишних&nbsp;приспособлений",
    },

    {
      title: "От дерева до металла",
      subtitle: "Обрабатывайте начисто любые&nbsp;поверхности",
    },

    {
      title: "Всё в комплекте",
      subtitle:
        "Готов к работе сразу после получения. Докупать ничего&nbsp;не&nbsp;нужно",
    },
  ];

  return (
    <header className="header">
      <HeaderTop
        classItem={"header__top"}
        links={links}
        phone={"8 800 250 59 32"}
        phoneLink={88002505932}
      />
      <div className="header__hero header-hero">
        <div className="content-container">
          <div className="header-wrapper">
            <div className="header-wrapper__model">
              <div className="change-model">
                <p className="title-change">Выберите модель пескоструя:</p>

                <div id="dropmodel" className="dropmodel">
                  <div className="dropmodel__header">
                    <p className="dropmodel__item">Булат 2</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="9"
                      viewBox="0 0 16 9"
                      fill="none"
                    >
                      <path
                        id="Arrow 40"
                        d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34314C15.4616 1.95262 15.4616 1.31946 15.0711 0.928931C14.6805 0.538407 14.0474 0.538407 13.6569 0.928931L8 6.58579L2.34314 0.928933C1.95262 0.538409 1.31946 0.538409 0.928931 0.928934C0.538407 1.31946 0.538407 1.95262 0.928931 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <ul className="dropmodel__list">
                    <li>
                      <a className="dropmodel__item" href="/">
                        Булат
                      </a>
                    </li>
                    <li className="dropmodel__item">Булат 2</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="header-wrapper__title">
              <h1>
                Единственный автоматический <br />
                <span className="text-primary">Пескоструй «булат 2» </span>
              </h1>
              <h2>Двойная эффективность с обновлённой конструкцией аппарата</h2>
            </div>

            <div className="header-wrapper__features">
              {features.map((el, idx) => (
                <div key={idx} className="features-item">
                  <h3 dangerouslySetInnerHTML={{ __html: el.title }}></h3>
                  <p dangerouslySetInnerHTML={{ __html: el.subtitle }}></p>
                </div>
              ))}
            </div>

            <div className="header-wrapper__img">
              <Image
                classImg={`main`}
                media={769}
                mobil={true}
                srcImg={`build/images/header/main_mobile.png`}
                srcSourceMob={`build/images/header/main.webp`}
                srcImgMob={`build/images/header/main.png`}
                srcSource={`build/images/header/main_mobile.webp`}
                altImg={`item.title}`}
              />
            </div>

            <div className="header-wrapper__offer">
              <button
                onClick={() => dispatch(openOrder(true))}
                className="header-hero__btn-order btn btn-anim"
              >
                Заказать
              </button>

              <div className="line-header"></div>

              <div className="prices">
                <div className="old">
                  <span className="pricenew"> {bulat2_18.oldPriceF} руб. </span>{" "}
                  <span className="discount">-20%</span>
                </div>
                <div className="new">{bulat2_18.priceF} руб.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
