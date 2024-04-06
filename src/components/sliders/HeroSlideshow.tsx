import React from 'react'
import { sliderProps } from '@/src/common/sliderProps'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import Content from '../../data/sliders/hero-slideshow.json'

const Home1BannerSlider = () => {
  return (
    <div className="absolution-banner absolution-top-space-0">
      <Swiper
        {...sliderProps.milBannersSlider}
        className="swiper-container absolution-banner-slideshow"
      >
        {Content.slides.map((slide, key) => (
          <SwiperSlide className="swiper-slide">
            <img
              src={slide.image}
              className="absolution-background-image"
              style={{ objectPosition: 'center' }}
              data-swiper-parallax={-100}
              data-swiper-parallax-scale="1.1"
              alt="image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolution-overlay" />
      <div className="absolution-banner-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8">
              <span className="absolution-suptitle absolution-mb-60">
                <span className="absolution-light">{Content.subtitle.first}</span>{' '}
                <span className="absolution-accent">{Content.subtitle.second}</span>
              </span>
              <h1 className="absolution-mb-60">
                <span
                  dangerouslySetInnerHTML={{ __html: Content.title.first }}
                  className="absolution-uppercase absolution-light"
                />{' '}
                <span className="absolution-font-3 absolution-accent">
                  {Content.title.second}
                </span>
              </h1>
              <div className="absolution-flex-hori-center">
                <div>
                  <Link
                    href={Content.button.link}
                    className="absolution-button absolution-border absolution-light"
                  >
                    <span>{Content.button.label}</span>
                  </Link>
                </div>
                <p className="absolution-button-descr absolution-light-soft">
                  {Content.description}
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-illustration-1">
                {Content.items.map((item, key) => (
                  <div className={`absolution-item absolution-item-${key + 1}`}>
                    <div className="absolution-plus">
                      <div className="absolution-hover-window">
                        <div className="absolution-window-content">
                          <h5 className="absolution-dark absolution-mb-15">{item.title}</h5>
                          <div className="absolution-divider absolution-divider-left absolution-mb-15" />
                          <p className="absolution-text-sm">{item.text}</p>
                        </div>
                      </div>
                      <div className="absolution-item-hover">
                        <div className="absolution-plus-icon">+</div>
                        <h6 className="absolution-light">{item.label}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home1BannerSlider
