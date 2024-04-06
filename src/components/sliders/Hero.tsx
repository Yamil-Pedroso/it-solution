import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../../data/sliders/hero.json";

const Home2BannerSlider = () => {
  return (
    <div className="absolution-banner absolution-top-space-100">
      <div
        className="absolution-deco absolution-deco-accent"
        style={{ top: 0, left: "12%" }}
      />
      <Swiper
        {...sliderProps.milBannersSlider}
        className="swiper-container absolution-banner-slider"
      >
        {Content.items.map((item, key) => (
        <SwiperSlide className="swiper-slide">
          <img
            src={item.image}
            className="absolution-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax-scale="1.1"
            alt="image"
          />
          <div className="absolution-overlay" />
          <div
            className="absolution-banner-content-2"
            data-swiper-parallax-y={300}
            data-swiper-parallax-duration={600}
            data-swiper-parallax-opacity={0}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center absolution-text-center">
                <div className="col-xl-8">
                  <span className="absolution-suptitle absolution-mb-60">
                    <span className="absolution-light">{item.subtitle.first}</span>{" "}
                    <span className="absolution-accent">{item.subtitle.second}</span>
                  </span>
                  <h1 className="absolution-mb-50">
                    {item.title.map((element, key) => (
                    <>
                      { element.accent == "0" &&
                      <span dangerouslySetInnerHTML={{__html : element.string}} className="absolution-uppercase absolution-light" />
                      }
                      { element.accent == "1" &&
                      <span dangerouslySetInnerHTML={{__html : element.string}} className="absolution-font-3 absolution-accent" />
                      }
                      {" "}
                    </>
                    ))}
                  </h1>
                  <p className="absolution-light-soft absolution-mb-60">
                    <span dangerouslySetInnerHTML={{__html : item.text}} />
                  </p>
                  <div className="absolution-buttons-frame absolution-buttons-frame-center">
                    { item.button1.enable == "1" &&
                    <a href={item.button1.link} className="absolution-button absolution-accent-bg">
                      <span>{item.button1.label}</span>
                    </a>
                    }
                    { item.button2.enable == "1" &&
                    <a href={item.button2.link} className="absolution-button-with-label">
                      <div className="absolution-button absolution-border absolution-icon-button absolution-light">
                        <span>
                          <i className="fas fa-play" />
                        </span>
                      </div>
                      <span className="absolution-light">{item.button2.label}</span>
                    </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolution-banner-nav">
        <div className="container">
          <div className="absolution-banner-button absolution-banner-prev">
            <i className="fas fa-arrow-left" />
          </div>
          <div className="absolution-banner-button absolution-banner-next">
            <i className="fas fa-arrow-right" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home2BannerSlider;
