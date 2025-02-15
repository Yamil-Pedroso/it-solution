import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const clickedTabsSliderButton = event => {
  const buttons = document.querySelectorAll('.absolution-tab-buttons a');
  buttons.forEach((button) => {
    button.classList.remove('absolution-active');
  });

  event.currentTarget.classList.toggle('absolution-active');
}

const Solution1About = () => {
  return (
    <section className="absolution-deep-bg absolution-p-120-0">
      <div className="container">
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
                  <div className="absolution-mr-15">
                    <div className="absolution-icon-frame absolution-icon-frame-md">
                      <img src="img/icons/md/2.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Machine Learning</h5>
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
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="absolution-hori-box absolution-mb-60">
                  <div className="absolution-mr-15">
                    <div className="absolution-icon-frame absolution-icon-frame-md">
                      <img src="img/icons/md/1.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Deep Learning</h5>
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
                  <div className="absolution-mr-15">
                    <div className="absolution-icon-frame absolution-icon-frame-md">
                      <img src="img/icons/md/11.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Natural Language</h5>
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
          <SwiperSlide className="swiper-slide" data-hash="tab4">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="absolution-hori-box absolution-mb-60">
                  <div className="absolution-mr-15">
                    <div className="absolution-icon-frame absolution-icon-frame-md">
                      <img src="img/icons/md/3.svg" alt="icon" />
                    </div>
                  </div>
                  <h5>Computer Vision</h5>
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
        </Swiper>
        <div className="absolution-tab-buttons absolution-mt-60-adapt">
          <a href="#tab1" className="absolution-active" onClick={clickedTabsSliderButton}>
            <span>Machine Learning</span>
          </a>
          <a href="#tab2" onClick={clickedTabsSliderButton}>
            <span>Deep Learning</span>
          </a>
          <a href="#tab3" onClick={clickedTabsSliderButton}>
            <span>Natural Language</span>
          </a>
          <a href="#tab4" onClick={clickedTabsSliderButton}>
            <span>Computer Vision</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Solution1About;
