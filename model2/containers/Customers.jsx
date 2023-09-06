import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import CustomersItem from "./CustomersItem.jsx";
import ModalReview from "../components/ModalReview.jsx";
import { useDispatch } from "react-redux";
import { openReview } from "../store/modalsReducer.js";
function Customers() {
  const dispatch = useDispatch();
  const [customersList, setCustomersList] = useState([
    {
      title: "Сергей Скворцов, г.&nbsp;Санкт-Петербург",
      prof: "Владелец мастерской",
      text: `— Очень доволен комплектацией, все есть для полного запуска, осталось только купить песок и подключить к компрессору. проверял в деле на старых штампах от ВАЗо. за 2 часа отпесочил 4 диска и отправил на покраску. пескоструй и не плюется песком. едиственное расход песка оказался больше чем я думал. но так то всё нормально.`,
    },
    {
      title: "Макар Сысолятин, г.&nbsp;Звенигород",
      prof: "Самозанятый",
      text: `— 👌 хороший аппарат достойного качества.Работает, что еще надо. Пришел в срок, упакован хорошо.Заценил крышка для загрузки песка, нигде такого еще не встречал. Удобный в сборке и ничего не нужно раскручивать для засыпания песка💪💪💪.`,
    },
    {
      title: "Денис Блинов, г.&nbsp;Нытва",
      prof: "Гравировщик",
      text: `— ВСЕ ОТЛИЧНО!!!!мне в мастерской очень пригадилась возможность настраивать давление, её опробовал в первый же день... всей комадой разбирались.`,
    },
    {
      title: "Кирилл Кочергин, г.&nbsp;Омск",
      prof: "Фермер",
      text: `— ✊✊✊ Здрасьте. вчера забрал с пункта выдачи.все нормально. увидел сопло в комплекте и уж подумал что ошиблись😄. а потом еще раз перечитал инфу и так чето обрадовался.мелочь а приятно.`,
    },

    {
      title: "Станислав Оленников, г.&nbsp;Самара",
      prof: "Сотрудник автосервиса",
      text: `— сравнивал с предыдущей версией Булата`,
      textTwo: `— производительность стопудово выше . и это ощущается.`,
      textTree: `— Во-вторых песок не забивается . способ прочистки и продувки шланга продуман хорошо.`,
    },

    {
      title: "Дмитрий Чуданов, г.&nbsp;Смоленск",
      prof: "Ремонтник",
      text: `— Аппарат простой в работе и проблем не создает. Пришел хорошо запакованый, в объёмной пупырке. Не мятый, не гнутый.`,
      textTwo: `— Уже кстати пользовался им на рестоврации ворот.`,
    },
  ]);
  const [sendedReview, setSendedReview] = useState(false);

  return (
    <section id="customers" className="customers">
      <div className="content-container">
        <div className="title-box">
          <h2 className="title">
            Отзывы первых обладателей пескоструйного аппарата «Булат&nbsp;2»
          </h2>
        </div>
        <div className="row">
          <div className="customers__slider-block">
            <div className="customers__slider">
              <Swiper
                modules={[Navigation, Pagination]}
                loop={true}
                slidesPerView={"auto"}
                spaceBetween={20}
                navigation={{
                  prevEl: ".customers__slider-prev",
                  nextEl: ".customers__slider-next",
                }}
                pagination={{
                  clickable: true,
                  el: ".customers__pagination",
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                  },
                }}
              >
                {customersList.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <CustomersItem img={idx + 1} item={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="customers__slider-controls">
              <div className="customers__slider-prev">
                <span>
                  <img
                    src="build/images/global/arrow-left.svg"
                    alt="Предыдущий слайд"
                  />
                </span>
              </div>
              <div className="customers__slider-next">
                <span>
                  <img
                    src="build/images/global/arrow-right.svg"
                    alt="Следующий слайд"
                  />
                </span>
              </div>
            </div>
            <div className="customers__pagination"></div>
          </div>
          <div className="customers__btn-wrap">
            <button
              disabled={sendedReview}
              onClick={() => dispatch(openReview(true))}
              className="btn"
            >
              Оставить отзыв
            </button>
          </div>
        </div>
      </div>
      <ModalReview setSendedReview={setSendedReview} />
    </section>
  );
}

export default Customers;
