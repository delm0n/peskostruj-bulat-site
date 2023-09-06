import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useSelector } from "react-redux";
import useWindowWidth from "../hooks/useWindowWidth.jsx";
import { Transition } from "react-transition-group";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Model from "../components/Model.jsx";

function Gallery() {
  const windowWidth = useWindowWidth(768);
  const webp = useSelector((state) => state.php.webp);
  // const [galleryItem, setGalleryItem] = useState([
  //   {
  //     id: 4,
  //     active: true,

  //   },
  // ]);

  const item = {
    name: "bulat",
    gallery: [1, 2, 3, 4],
    galleryMobile: [1, 2, 4, 8],
  };

  function changeTab(index) {
    setGalleryItem((prev) => {
      for (let i = 0; i < prev.length; i++) {
        prev[i].active = false;
      }
      prev[index].active = true;
      return JSON.parse(JSON.stringify(prev));
    });
  }

  return (
    <section className="gallery">
      <div className="content-container">
        <div className="title-box">
          <h3 className="title">Реальные фото пескоструя «Булат&nbsp;2»</h3>
        </div>
        <LazyLoadComponent>
          <div className="gallery__grid">
            {windowWidth ? (
              <div className={`gallery__wrapper `}>
                <Swiper
                  modules={[Navigation, Pagination]}
                  loop={true}
                  slidesPerView={1}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                    el: `.gallery-pagination-${item.name}`,
                  }}
                  navigation={{
                    prevEl: `.gallery-prev-${item.name}`,
                    nextEl: `.gallery-next-${item.name}`,
                  }}
                >
                  {item.galleryMobile.map((itemGallery, i) => (
                    <SwiperSlide key={i}>
                      <div
                        data-fancybox="gallery"
                        data-src={
                          webp == "webp"
                            ? `build/images/gallery/gallery_${item.name}-${
                                i + 1
                              }-mob-big.webp`
                            : `build/images/gallery/gallery_${item.name}-${
                                i + 1
                              }-mob-big.png`
                        }
                        className="gallery__img"
                      >
                        <picture>
                          <source
                            srcSet={`build/images/gallery/gallery_${
                              item.name
                            }-${i + 1}-mob.webp`}
                            type="image/webp"
                          />
                          <img
                            src={`build/images/gallery/gallery_${item.name}-${
                              i + 1
                            }-mob.jpg`}
                            alt="#"
                          />
                        </picture>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="gallery__controls">
                  <button className={`gallery__prev gallery-prev-${item.name}`}>
                    <span>
                      <img src="build/images/global/arrow-left.svg" alt="" />
                    </span>
                  </button>
                  <div
                    className={`gallery__pagination gallery-pagination-${item.name}`}
                  ></div>
                  <button className={`gallery__next gallery-next-${item.name}`}>
                    <span>
                      <img src="build/images/global/arrow-right.svg" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className={`gallery__box `}>
                {item.gallery.map((itemGallery, i) => (
                  <div
                    key={i}
                    data-fancybox={`gallery-${item.id}`}
                    data-src={
                      webp == "webp"
                        ? `build/images/gallery/gallery_${item.name}-${
                            i + 1
                          }-big.webp`
                        : `build/images/gallery/gallery_${item.name}-${
                            i + 1
                          }-big.jpg`
                    }
                    className={`gallery__item-${i + 1}`}
                  >
                    <picture>
                      <source
                        srcSet={`build/images/gallery/gallery_${item.name}-${
                          i + 1
                        }.webp`}
                        type="image/webp"
                      />
                      <img
                        src={`build/images/gallery/gallery_${item.name}-${
                          i + 1
                        }.jpg`}
                        alt="#"
                      />
                    </picture>
                  </div>
                ))}
              </div>
            )}

            <div className="gallery__model">
              <div className="gallery__model-img">
                <img
                  src={`build/images/gallery/3d-icon.${
                    webp == "webp" ? "webp" : "png"
                  }`}
                  alt="#"
                />
              </div>
              <div className="model3d">
                <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                  <ambientLight />
                  <Suspense fallback={null}>
                    <Stage
                      preset="rembrandt"
                      intensity={1}
                      shadows={false}
                      environment="city"
                    >
                      <Model />
                    </Stage>
                    <OrbitControls />
                  </Suspense>
                </Canvas>
              </div>
            </div>
          </div>
        </LazyLoadComponent>
      </div>
    </section>
  );
}

export default Gallery;
