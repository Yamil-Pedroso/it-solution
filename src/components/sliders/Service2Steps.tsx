import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Service2Steps = () => {
  return (
    <section className="absolution-deep-bg absolution-p-120-0">
      <div className="container">
        <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
          Our Enterprise
        </span>
        <h2 className="absolution-mb-120">
          How We <span className="absolution-accent">Deliver Our UI/UX</span> Design
          Services
        </h2>
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container absolution-tabs-slider"
        >
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="absolution-hori-box absolution-mb-60">
                  <h3>Discovery</h3>
                </div>
                <div className="row absolution-mb-60">
                  <div className="col-lg-6">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet. It
                      uses a dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="absolution-button absolution-border absolution-mb-15 absolution-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
                <a href="#." className="absolution-link absolution-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="absolution-circle-illustration absolution-with-dots absolution-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="absolution-circle-bg" />
                  <div className="absolution-image-frame">
                    <img src="img/faces/t5.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="absolution-hori-box absolution-mb-60">
                  <h3>Validate</h3>
                </div>
                <div className="row absolution-mb-60">
                  <div className="col-lg-6">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet. It
                      uses a dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="absolution-button absolution-border absolution-mb-15 absolution-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
                <a href="#." className="absolution-link absolution-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="absolution-circle-illustration absolution-with-dots absolution-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="absolution-circle-bg" />
                  <div className="absolution-image-frame">
                    <img src="img/faces/t4.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab3">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="absolution-hori-box absolution-mb-60">
                  <h3>Design</h3>
                </div>
                <div className="row absolution-mb-60">
                  <div className="col-lg-6">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet. It
                      uses a dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="absolution-button absolution-border absolution-mb-15 absolution-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
                <a href="#." className="absolution-link absolution-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="absolution-circle-illustration absolution-with-dots absolution-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="absolution-circle-bg" />
                  <div className="absolution-image-frame">
                    <img src="img/faces/t3.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab4">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="absolution-hori-box absolution-mb-60">
                  <h3>Improve</h3>
                </div>
                <div className="row absolution-mb-60">
                  <div className="col-lg-6">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      Internet tend to repeat predefined chunks as necessary,
                      making this the first true generator on the Internet. It
                      uses a dictionary of over 200 Latin words, combined with a
                      handful of model sentence structures, to generate Lorem
                      Ipsum which looks reasonable.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="absolution-button absolution-border absolution-mb-15 absolution-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
                <a href="#." className="absolution-link absolution-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="absolution-circle-illustration absolution-with-dots absolution-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="absolution-circle-bg" />
                  <div className="absolution-image-frame">
                    <img src="img/faces/t2.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="absolution-tab-buttons absolution-mt-60-adapt">
          <a className="absolution-active" href="#tab1">
            <span>Discovery</span>
          </a>
          <a href="#tab2">
            <span>Validate</span>
          </a>
          <a href="#tab3">
            <span>Design</span>
          </a>
          <a href="#tab4">
            <span>Improve</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Service2Steps;
