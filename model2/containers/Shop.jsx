import React, { useEffect } from "react";
import axios from "axios";

function Shops() {
  useEffect(() => {
    setTimeout(() => {
      getShops();
    }, 1000);
  });
  //получение списка магазинов для карты внизу сайта
  async function getShops() {
    await axios
      .get("https://apispn.ru/json/shops/")
      .then(function (response) {
        // handle success
        let citiesJSON = JSON.parse(response.data);

        // создание карты с метками
        let script = document.createElement("script");
        script.setAttribute("async", "");
        script.type = "text/javascript";
        script.src = "https://api-maps.yandex.ru/2.1/?lang=ru_RU";
        document.querySelector("body").appendChild(script);

        script.onload = function () {
          ymaps.ready(function () {
            let myMap = new ymaps.Map("shop-map", {
              center: [55.75222, 37.61556],
              zoom: 10,
              controls: ["zoomControl"],
            });

            citiesJSON.forEach(function (inx) {
              let city = inx.city;
              inx.shops.forEach(function (shop) {
                let mark = new ymaps.Placemark(
                  shop.coords,
                  {
                    hasHint: true,
                    hintContent: "Градус Хаус в г. " + city + ", " + shop.name,
                  },
                  {
                    // Необходимо указать данный тип макета.
                    iconLayout: "default#image",

                    // Своё изображение иконки метки.
                    iconImageHref:
                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzkiIGhlaWdodD0iOTUiIHZpZXdCb3g9IjAgMCA3OSA5NSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZF8yNzVfMTU0NikiPgo8cGF0aCBkPSJNNjMuMzMyIDI0LjM2OTJDNjMuMzMyIDM1LjQ2MjMgNDguNzA3IDU1LjIxMTUgNDIuMjk0NSA2My4zNkM0MC43NTcgNjUuMzAxOSAzNy45MDcgNjUuMzAxOSAzNi4zNjk1IDYzLjM2QzI5Ljg0NDUgNTUuMjExNSAxNS4zMzIgMzUuNDYyMyAxNS4zMzIgMjQuMzY5MkMxNS4zMzIgMTAuOTEwMyAyNi4wNzcgMCAzOS4zMzIgMEM1Mi41ODIgMCA2My4zMzIgMTAuOTEwMyA2My4zMzIgMjQuMzY5MloiIGZpbGw9IiM1RjdEQ0IiLz4KPC9nPgo8Y2lyY2xlIGN4PSIzOS4zMzMzIiBjeT0iMjMuNzMxOCIgcj0iOS4zMzMzMyIgZmlsbD0id2hpdGUiLz4KPGRlZnM+CjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZF8yNzVfMTU0NiIgeD0iMC4zMzIwMzEiIHk9IjAiIHdpZHRoPSI3OCIgaGVpZ2h0PSI5NC44MjAzIiBmaWx0ZXJVbml0cz0idXNlclNwYWNlT25Vc2UiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiI+CjxmZUZsb29kIGZsb29kLW9wYWNpdHk9IjAiIHJlc3VsdD0iQmFja2dyb3VuZEltYWdlRml4Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHk9IjE1Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjcuNSIvPgo8ZmVDb21wb3NpdGUgaW4yPSJoYXJkQWxwaGEiIG9wZXJhdG9yPSJvdXQiLz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMC4zNzI1NDkgMCAwIDAgMCAwLjQ5MDE5NiAwIDAgMCAwIDAuNzk2MDc4IDAgMCAwIDAuMTkgMCIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluMj0iQmFja2dyb3VuZEltYWdlRml4IiByZXN1bHQ9ImVmZmVjdDFfZHJvcFNoYWRvd18yNzVfMTU0NiIvPgo8ZmVCbGVuZCBtb2RlPSJub3JtYWwiIGluPSJTb3VyY2VHcmFwaGljIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18yNzVfMTU0NiIgcmVzdWx0PSJzaGFwZSIvPgo8L2ZpbHRlcj4KPC9kZWZzPgo8L3N2Zz4K",

                    // Размеры метки.
                    iconImageSize: [48, 65],

                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-5, -38],
                  }
                );

                mark.events.add("click", function (e) {
                  myMap.hint.open(
                    shop.coords,
                    " Градус Хаус в г. " + city + ", " + shop.name
                  );
                });

                myMap.geoObjects.add(mark);
              });
            });
          });
        };
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  return (
    <section className="shops">
      <div className="content-container">
        <div className="shops__title-box">
          <h3 className="shops__heading">
            Наши магазины
            <br />— теперь и сервисные центры
          </h3>
          <p className="shops__subtitle">В них вы сможете:</p>
        </div>

        <div className="shops__row">
          <ul className="shops__list">
            <li className="shops__item">
              Приобрести трубогибы, станки холодной ковки, пескоструйные
              аппараты и множество других товаров для хобби.
            </li>
            <li className="shops__item">
              Оформить заявку на самовывоз и забрать товар, купленный в
              интернет-магазине.
            </li>
          </ul>
          <ul className="shops__list">
            <li className="shops__item">Оформить скидочную карту.</li>
            <li className="shops__item">
              Сдать товар по гарантии, оформить возврат или обмен <br /> без
              лишней бюрократии.
            </li>
            <li className="shops__item">Получить консультацию специалистов.</li>
          </ul>
        </div>
      </div>
      <div className="shops__wrapper">
        <div id="shop-map"></div>
      </div>
    </section>
  );
}

export default Shops;
