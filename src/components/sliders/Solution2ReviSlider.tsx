import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution2ReviSlider = () => {
  return (
    <section className="absolution-p-120-90">
      <div className="absolution-deco" style={{ top: 0, right: "20%" }} />
      <div className="container">
        <div className="row align-items-end absolution-mb-90">
          <div className="col-md-6 col-xl-7">
            <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
              An Ocean Data For You
            </span>
            <h2>
              Our Big Data Development Solutions to{" "}
              <span className="absolution-accent">Power Your Business</span>
            </h2>
          </div>
          <div className="col-md-6 col-xl-5">
            <div className="absolution-adaptive-right absolution-mt-60-adapt">
              <div className="absolution-slider-nav">
                <div className="absolution-slider-btn-prev absolution-revi-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="absolution-h6">Prev</span>
                </div>
                <div className="absolution-slider-btn-next absolution-revi-next">
                  <span className="absolution-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milReviSlider}
          className="swiper-container absolution-revi-slider absolution-mb-90"
        >
          <SwiperSlide className="swiper-slide">
            <div className="absolution-hover-card">
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                <img src="img/icons/md/12.svg" alt="icon" />
              </div>
              <h5 className="absolution-mb-30">Retail and eCommerce</h5>
              <p>
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="absolution-hover-card">
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                <img src="img/icons/md/13.svg" alt="icon" />
              </div>
              <h5 className="absolution-mb-30">Education and eLearning</h5>
              <p>
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="absolution-hover-card">
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                <img src="img/icons/md/14.svg" alt="icon" />
              </div>
              <h5 className="absolution-mb-30">Finance and Banking</h5>
              <p>
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="absolution-hover-card">
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="absolution-mb-30">Life Sciences</h5>
              <p>
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Solution2ReviSlider;
