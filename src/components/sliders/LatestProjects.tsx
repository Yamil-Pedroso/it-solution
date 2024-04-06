import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderProps } from '../../common/sliderProps'

import SectionData from '../../data/sliders/latest-projects.json'

const LatestProjects = ({ projects }: any) => {
  return (
    <section className="absolution-works absolution-p-120-90">
      <div className="absolution-deco" style={{ top: 0, right: '40%' }} />
      <div className="container">
        <div className="row align-items-center absolution-mb-60-adapt">
          <div className="col-md-6 col-xl-6">
            <h2 className="absolution-mb-30">{SectionData.title}</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="absolution-adaptive-right">
              <div className="absolution-slider-nav absolution-mb-30">
                <div className="absolution-slider-btn-prev absolution-works-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="absolution-h6">Prev</span>
                </div>
                <div className="absolution-slider-btn-next absolution-works-next">
                  <span className="absolution-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Swiper
          {...sliderProps.latestProjectSlider}
          className="swiper-container absolution-works-slider absolution-mb-90"
        >
          {projects &&
            projects
              .slice(0, SectionData.numOfItems)
              .map((item: any, key: any) => (
                <SwiperSlide className="swiper-slide">
                  <Link href="project" className="absolution-card">
                    <div className="absolution-cover-frame">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="absolution-description">
                      <div className="absolution-card-title">
                        <h4 className="absolution-mb-20">{item.title}</h4>
                        <h6>
                          by: <span className="absolution-accent">{item.author}</span>
                        </h6>
                      </div>
                      <div className="absolution-card-text">
                        <p>{item.short}</p>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
        </Swiper>

        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6">
            <Link
              href={SectionData.button1.link}
              className="absolution-link absolution-mb-30"
            >
              <span>{SectionData.button1.label}</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="absolution-adaptive-right">
              <Link
                href={SectionData.button2.link}
                className="absolution-button absolution-border absolution-mb-30"
              >
                <span>{SectionData.button2.label}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LatestProjects
