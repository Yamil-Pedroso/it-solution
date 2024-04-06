import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../../data/sliders/events.json";

const Home2EventsSlider = () => {
  return (
    <section className="absolution-events absolution-deep-bg absolution-p-120-120">
      <div className="absolution-deco" style={{ top: 0, right: "20%" }} />
      <div className="container">
        <div className="row align-items-end absolution-mb-60-adapt">
          <div className="col-md-4 col-xl-4">
            <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
              {Content.subtitle}
            </span>
            <h2 className="absolution-mb-30">{Content.title}</h2>
          </div>
          <div className="col-md-5 col-xl-5">
            <p className="absolution-mb-30">
              {Content.text}
            </p>
          </div>
          <div className="col-md-3 col-xl-3">
            <div className="absolution-adaptive-right absolution-mb-30">
              <div className="absolution-slider-nav">
                <div className="absolution-slider-btn-prev absolution-events-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="absolution-h6">Prev</span>
                </div>
                <div className="absolution-slider-btn-next absolution-events-next">
                  <span className="absolution-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milEventsSlider}
          className="swiper-container absolution-events-slider"
        >
          {Content.items.map((item, key) => (
          <SwiperSlide className="swiper-slide">
            <Link href={item.link} className="absolution-card-2">
              <div className="absolution-cover-frame">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="absolution-description">
                <ul className="absolution-speakers">
                  {item.speakers.map((element, key) => (
                  <li className="absolution-speaker">
                    <img src={element.image} alt={element.alt} />
                  </li>
                  ))}
                </ul>
                <div className="absolution-card-title">
                  <p className="absolution-category absolution-text-sm absolution-mb-15">
                    {item.category}
                  </p>
                  <h4>{item.title}</h4>
                </div>
              </div>
            </Link>
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
export default Home2EventsSlider;
