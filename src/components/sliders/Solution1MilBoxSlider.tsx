import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution1MilBoxSlider = () => {
  return (
    <section className="absolution-awards">
      <div className="row m-0">
        <div className="col-xl-6 p-0 absolution-relative">
          <img
            src="img/photo/14.jpg"
            className="absolution-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax-scale="1.1"
            alt="image"
          />
          <div className="absolution-overlay absolution-gradient-bg" />
          <div className="absolution-fake-container absolution-p-120-120">
            <Swiper
              {...sliderProps.milBoxSlider}
              className="swiper-container absolution-box-slider absolution-mb-120"
            >
              <SwiperSlide className="swiper-slide">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <h3 className="absolution-light absolution-mb-120">
                    AI Solutions To Analyze and Understand The{" "}
                    <span className="absolution-accent">Physical World</span>
                  </h3>
                  <div className="absolution-hori-box absolution-mb-30">
                    <div className="absolution-mr-15">
                      <div className="absolution-icon-frame absolution-light absolution-icon-frame-md">
                        <img src="img/icons/md/10.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="absolution-light">Facial Recognition</h5>
                  </div>
                  <p className="absolution-light-soft">
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    endeavor. In on my jointure horrible margaret suitable he
                    followed speedily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <h3 className="absolution-light absolution-mb-120">
                    Industry Specific AI Consulting and{" "}
                    <span className="absolution-accent">Development</span>
                  </h3>
                  <div className="absolution-hori-box absolution-mb-30">
                    <div className="absolution-mr-15">
                      <div className="absolution-icon-frame absolution-light absolution-icon-frame-md">
                        <img src="img/icons/md/11.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="absolution-light">Artificial Intelligence</h5>
                  </div>
                  <p className="absolution-light-soft">
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    endeavor. In on my jointure horrible margaret suitable he
                    followed speedily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <h3 className="absolution-light absolution-mb-120">
                    AI Solutions To Analyze and Understand The{" "}
                    <span className="absolution-accent">Physical World</span>
                  </h3>
                  <div className="absolution-hori-box absolution-mb-30">
                    <div className="absolution-mr-15">
                      <div className="absolution-icon-frame absolution-light absolution-icon-frame-md">
                        <img src="img/icons/md/10.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="absolution-light">Facial Recognition</h5>
                  </div>
                  <p className="absolution-light-soft">
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    endeavor. In on my jointure horrible margaret suitable he
                    followed speedily.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <h3 className="absolution-light absolution-mb-120">
                    Industry Specific AI Consulting and{" "}
                    <span className="absolution-accent">Development</span>
                  </h3>
                  <div className="absolution-hori-box absolution-mb-30">
                    <div className="absolution-mr-15">
                      <div className="absolution-icon-frame absolution-light absolution-icon-frame-md">
                        <img src="img/icons/md/11.svg" alt="icon" />
                      </div>
                    </div>
                    <h5 className="absolution-light">Artificial Intelligence</h5>
                  </div>
                  <p className="absolution-light-soft">
                    Dissuade ecstatic and properly saw entirely sir why laughter
                    endeavor. In on my jointure horrible margaret suitable he
                    followed speedily.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="absolution-slider-nav">
              <div className="absolution-slider-btn-prev absolution-box-prev absolution-light">
                <i className="fas fa-arrow-left" />
                <span className="absolution-h6">Prev</span>
              </div>
              <div className="absolution-slider-btn-next absolution-box-next absolution-light">
                <span className="absolution-h6">Next</span>
                <i className="fas fa-arrow-right" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-6 p-0 absolution-relative"
          style={{ overflow: "hidden" }}
        >
          <img
            src="img/photo/14.jpg"
            className="absolution-background-image"
            style={{ objectPosition: "center" }}
            data-swiper-parallax-scale="1.1"
            alt="image"
          />
          <div className="absolution-overlay absolution-with-deco absolution-super-light" />
        </div>
      </div>
    </section>
  );
};
export default Solution1MilBoxSlider;
