import React from "react";
import { useSelector } from "react-redux";
function Footer({ btn }) {
  const year = useSelector((state) => state.php.year);
  return (
    <footer className="footer">
      <div className="content-container">
        <div className="footer__row">
          <div className="footer__column-logo">
            <div className="footer__logo">
              <span className="footer__logo-name">
                <picture>
                  <source
                    srcSet="build/images/global/footer-logo.webp"
                    type="image/webp"
                  />
                  <img
                    src="build/images/global/footer-logo.png"
                    alt="helicon"
                  />
                </picture>
              </span>
              <span className="footer__logo-border"></span>
              <span className="footer__logo-info">
                Официальный сайт производителя
              </span>
            </div>
            <a className="footer__phone" href="tel:88002505932">
              8 800 250 59 32
            </a>
            <span className="footer__text">Телефон горячей линии</span>
          </div>
          <div className="footer__column-info">
            <p className="footer__info">
              <span>ИНН:</span> 432500888349
              <br />
              <span>ОГРНИП:</span> 314744919000039
            </p>
            <p className="footer__info">
              <span>Адрес почтовый (фактический):</span>
              <br />
              610006, г. Киров, Октябрьский пр-т, д. 24
            </p>
            <p className="footer__info">
              <span>Для корреспонденции: </span>
              610000, а/я 154
            </p>
          </div>
          <div className="footer__column-links">
            <ul className="footer__list">
              <li className="footer__item">
                <a className="footer__link" href="">
                  Политика конфиденциальности
                </a>
              </li>
              <li className="footer__item">
                <a className="footer__link" href="">
                  Договор оферты
                </a>
              </li>
            </ul>
            <button className="footer__btn btn">{btn.text}</button>
          </div>
        </div>
      </div>

      <div className="footer__border" />
      <div className="content-container">
        <p className="footer__copyright">
          © 2010 - {year} peskostruj-bulat-official.ru Все права защищены.
          <br />
          Использование материалов разрешено только с согласия правообладателей.
          Полное или частичное копирование сайта запрещено и преследуется по
          закону.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
