import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution2LeftTabSlider = () => {
  return (
    <section className="absolution-p-120-60">
      <div className="absolution-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
          An Ocean Data For You
        </span>
        <h2 className="absolution-mb-90">
          Our Data <span className="absolution-accent">Ecosystem Development</span>{" "}
          Approach
        </h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="absolution-tabs-left-nav absolution-mb-60">
              <li>
                <a href="#tab-l-1" className="absolution-h4 absolution-active">
                  Starting Small
                </a>
              </li>
              <li>
                <a href="#tab-l-2" className="absolution-h4">
                  Building a Scale-Ready MVP
                </a>
              </li>
              <li>
                <a href="#tab-l-3" className="absolution-h4">
                  Improving Your Data Ecosystem Iteratively
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Swiper
              {...sliderProps.milTabsSlider}
              className="swiper-container absolution-tabs-slider absolution-mb-60"
            >
              <SwiperSlide className="swiper-slide" data-hash="tab-l-1">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div
                  data-swiper-parallax-y={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text. All the
                    Lorem Ipsum generators on the Internet tend to repeat
                    predefined chunks as necessary, making this the first true
                    generator on the Internet.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solution2LeftTabSlider;
