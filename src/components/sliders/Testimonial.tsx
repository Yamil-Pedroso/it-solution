import React from 'react'
import { sliderProps } from '@/src/common/sliderProps'
import { Swiper, SwiperSlide } from 'swiper/react'

import Content from '../../data/sliders/testimonial.json'

const Home1TestimonialSlider = () => {
  return (
    <section className="absolution-reviews absolution-deep-bg absolution-p-120-120">
      <div className="absolution-deco" style={{ top: 0, right: '30%' }} />
      <div className="container">
        <div className="row align-items-center absolution-mb-90">
          <div className="col-md-6 col-xl-6">
            <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
              {Content.subtitle}
            </span>
            <h2>
              {Content.title.first}{' '}
              <span className="absolution-accent">{Content.title.second}</span>{' '}
              {Content.title.third}
            </h2>
          </div>
          <div className="col-md-6 col-xl-6">
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
          className="swiper-container absolution-revi-slider"
        >
          {Content.items.map((item, key) => (
            <SwiperSlide className="swiper-slide">
              <div className="absolution-review">
                <div className="absolution-stars absolution-mb-30">
                  <img src="img/icons/sm/11.svg" alt="quote" />
                  <ul>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                    <li>
                      <i className="fas fa-star" />
                    </li>
                  </ul>
                </div>
                <p className="absolution-mb-30">{item.text}</p>
                <div className="absolution-author">
                  <div className="absolution-img-wrapper">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="absolution-name">
                    <h6 className="absolution-mb-5">{item.name}</h6>
                    <span className="absolution-text-sm">{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
export default Home1TestimonialSlider
