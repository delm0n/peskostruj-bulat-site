import React, { useState, useMemo, useEffect } from "react";
import Dropdown from "../components/Dropdown.jsx";
import { addMainKit } from "../store/kitReducer";
import { useSelector, useDispatch } from "react-redux";
import KitDopItem from "./KitDopItem.jsx";
import KitMainImg from "./KitMainImg.jsx";
import KitDopImg from "./KitDopImg.jsx";
import { openTape } from "../store/modalsReducer.js";
import KitTapeImg from "./KitTapeImg.jsx";
import { Transition } from "react-transition-group";
import { addRassrochka } from "../store/dopsReducer.js";
import useWindowWidth from "../hooks/useWindowWidth.jsx";

function Kit() {
  const dispatch = useDispatch();
  const dops = useSelector((state) => state.kit.dopsState);
  const mainDops = useSelector((state) => state.kit.mainProductsState);

  const rassrochka = useSelector((state) => state.dops.rassrochka);
  const kitTape = useSelector((state) => state.kit.kitTapeState);
  const totalPriceKitTape = useSelector((state) => state.kit.totalPriceKitTape);
  const totalOldPriceKitTape = useSelector(
    (state) => state.kit.totalOldPriceKitTape
  );
  const [totalPrice, setTotalPrice] = useState(0);
  const windowWidth = useWindowWidth(767);
  const csrf = document.querySelector('.form-order_hidden [name="csrf"]').value;

  useMemo(() => {
    setTotalPrice(
      totalPriceKitTape +
        mainDops.reduce((sum, item) => {
          if (item.selected) {
            return sum + item.price;
          }
          return sum;
        }, 0) +
        dops.reduce((sum, item) => {
          if (item.selected) {
            return sum + item.price;
          }
          return sum;
        }, 0)
    );
  }, [dops, mainDops, totalPriceKitTape]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="kit">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
            Сделайте работу пескоструя
            <span className="text-primary"> ещё&nbsp;эффективнее</span>
          </h3>
          <p className="subtitle">Вместе с полезными дополнениями</p>
        </div>

        <div className="kit__box">
          <div className="kit__block-list">
            <ul className="kit__list">
              {dops.map((item, index) => (
                <KitDopItem item={item} index={index} key={item.id} />
              ))}
            </ul>
          </div>
          <div className="kit__block-images">
            <div className="kit__images">
              {dops.map((item) => (
                <KitDopImg item={item} key={item.id} />
              ))}

              {mainDops.map((item, index) => (
                <KitMainImg key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
          <div className="kit__block-form">
            <div className="kit__form form-kit">
              <h3 className="form-kit__heading">Заказ</h3>
              <Dropdown
                classItem="form-kit__dropdown"
                payload={addMainKit}
                mainDops={mainDops}
              />
              <ul className="form-kit__list">
                {dops.map((item) => (
                  <React.Fragment key={item.id}>
                    {item.selected ? (
                      <li className="form-kit__item">
                        <span className="form-kit__item-name">
                          <span
                            dangerouslySetInnerHTML={{ __html: item.name }}
                          ></span>
                        </span>
                        <span className="form-kit__item-price">
                          {item.priceF} руб.
                        </span>
                      </li>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
                {kitTape.map((item) => (
                  <React.Fragment key={item.id}>
                    {item.selected ? (
                      <li className="form-kit__item">
                        <span className="form-kit__item-name">
                          <span
                            dangerouslySetInnerHTML={{ __html: item.name }}
                          ></span>
                        </span>
                        <span className="form-kit__item-price">
                          {item.price * item.count.toLocaleString()} руб.
                        </span>
                      </li>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                ))}
              </ul>

              <div className="form-kit__total-price">
                Итого к оплате:
                <span>{totalPrice.toLocaleString()} ₽</span>
              </div>
              <form onSubmit={handleSubmit} className="spnForm">
                <div className="form-kit__inputs">
                  <input
                    className="input form-kit__name"
                    type="text"
                    name="name"
                    placeholder="Имя"
                  />
                  <input
                    className="input"
                    type="text"
                    name="phone"
                    placeholder="+7 (___)-___-__-__"
                  />
                </div>
                <div className="form-kit__block-bottom">
                  <p className="form-kit__info">
                    Менеджеры свяжутся с вами в ближайшее время для уточнения
                    деталей заказа
                  </p>
                  <div className="form-kit__block-order">
                    <label className="checkbox-v2 form-kit__rassrochka">
                      <input
                        checked={rassrochka}
                        onChange={() => dispatch(addRassrochka(!rassrochka))}
                        className="checkbox-v2__disabled"
                        type="checkbox"
                      />
                      <span className="checkbox-v2__active"></span>
                      <span className="checkbox-v2__name">
                        Покупка в рассрочку
                      </span>
                    </label>
                    <button
                      className="form-kit__btn btn btn-anim"
                      type="submit"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Kit;
