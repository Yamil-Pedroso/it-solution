import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const Service3NavTabs = () => {
  return (
    <section className="absolution-p-120-60">
      <div className="absolution-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
          All Devices
        </span>
        <h2 className="absolution-mb-90">
          <span className="absolution-accent">End-to-End</span> Mobile Development
          Services
        </h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="absolution-tabs-left-nav absolution-mb-60">
              <li>
                <a href="#tab-l-1" className="absolution-h4 absolution-active">
                  Discovery &amp; R&amp;D
                </a>
              </li>
              <li>
                <a href="#tab-l-2" className="absolution-h4">
                  UX/UI Design
                </a>
              </li>
              <li>
                <a href="#tab-l-3" className="absolution-h4">
                  Development
                </a>
              </li>
              <li>
                <a href="#tab-l-4" className="absolution-h4">
                  QA
                </a>
              </li>
              <li>
                <a href="#tab-l-5" className="absolution-h4">
                  Launch
                </a>
              </li>
              <li>
                <a href="#tab-l-6" className="absolution-h4">
                  Maintenance &amp; Support
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
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="absolution-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="absolution-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="absolution-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="absolution-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="absolution-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="absolution-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-4">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="absolution-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="absolution-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-5">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="absolution-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="absolution-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-6">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="absolution-mb-30">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                    </p>
                  </div>
                  <Link href="about" className="absolution-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service3NavTabs;
