import React from 'react'
import { sliderProps } from '@/src/common/sliderProps'
import { Swiper, SwiperSlide } from 'swiper/react'

import Content from '../../data/sliders/services.json'

const Home2ServicesSlider = () => {
  return (
    <section className="absolution-services absolution-deep-bg absolution-p-120-90">
      <div className="absolution-deco" style={{ top: 0, right: '20%' }} />
      <div className="container">
        <div className="row align-items-center absolution-mb-90">
          <div className="col-md-6 col-xl-6">
            <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
              {Content.subtitle}
            </span>
            <h2>{Content.title}</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="absolution-adaptive-right absolution-mt-60-adapt">
              <div className="absolution-slider-nav">
                <div className="absolution-slider-btn-prev absolution-services-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="absolution-h6">Prev</span>
                </div>
                <div className="absolution-slider-btn-next absolution-services-next">
                  <span className="absolution-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milServicesSlider}
          className="swiper-container absolution-services-slider"
        >
          {Content.items.map((item, key) => (
            <SwiperSlide className="swiper-slide">
              <div className="absolution-hover-card">
                <h4 className="absolution-mb-30">{item.name}</h4>
                <p className="absolution-mb-50">{item.text}</p>
                <div className="absolution-divider absolution-divider-left absolution-mb-50" />
                <ul className="absolution-simple-list absolution-mb-50">
                  {item.list.map((element, key) => (
                    <li>{element.value}</li>
                  ))}
                </ul>
                <a href={item.link} className="absolution-link">
                  <span>{item.button}</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default Home2ServicesSlider
