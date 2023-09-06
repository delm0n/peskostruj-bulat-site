import React, { useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { useSelector } from "react-redux";

export default function Effective() {
  const webp = useSelector((state) => state.php.webp);
  const list = [
    {
      text: `К пескоструйному аппарату с помощью <span> быстросъёмного 
      соединения&nbsp;(1)</span> подключается компрессор.`,
    },

    {
      text: `Воздух проходит через <span>осушитель&nbsp;(2)</span> и попадает в 
      <span>бак&nbsp;(3)</span>.
       Благодаря специальному <span>крану&nbsp;(4)</span>, перекрывающему давление, 
       вы в любой момент можете отключить компрессор и направить его 
       на другие задачи. Давление по установленным параметрам 
       будет поддерживаться внутри камеры с помощью осушителя.`,
    },

    {
      text: `Песок из <span>жиклера&nbsp;(5)</span> смешивается с воздухом в 
      <span>распределительном узле&nbsp;(6)</span>. Когда воздушный поток прекращается,
       абразив достигает предельного уровня в <span>крестовине&nbsp;(7)</span> и 
       перестаёт сыпаться дальше. При повторном открытии <span>пистолета 
    &nbsp;(8)</span> по <span>шлангу&nbsp;(9)</span> снова начинает идти воздух вместе 
       с накопившимся песком. Когда пистолет закрыт, абразив не поступает
        и не забивает шланг.`,
    },

    {
      text: `Давление в системе контролируют <span>аварийные клапаны&nbsp;(10)</span>, 
      а <span>манометр&nbsp;(11)</span> показывает текущий уровень давления.`,
    },
  ];

  return (
    <section id="effective" className="effective">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">
            Ещё проще, 
            <span className="text-primary"> ещё эффективнее! </span>
          </h3>
          <p className="subtitle">Принцип работы пескоструя «Булат&nbsp;2»</p>
        </div>
        <div className="effective-wrapper">
          <div className="effective-wrapper__img">
            <LazyLoadComponent>
              <video autoPlay="autoplay" preload="none" loop="loop" muted>
                <source src={"model2/static/effective.mp4"} type="video/mp4" />
              </video>
            </LazyLoadComponent>
          </div>
          <div className="effective-wrapper__text">
            {list.map((item, idx) => (
              <div key={idx} className="text-item">
                <span className="round">{idx + 1}</span>
                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
