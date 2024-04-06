import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Content from "../../data/sliders/courses.json";

const Home2Courses = () => {
  return (
    <section className="absolution-courses absolution-deep-bg absolution-p-120-120">
      <div className="absolution-deco" style={{ top: 0, right: "40%" }} />
      <div
        className="absolution-deco"
        style={{ bottom: 0, right: "15%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <div className="row align-items-center absolution-mb-60-adapt">
          <div className="col-md-6 col-xl-6">
            <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
              {Content.subtitle}
            </span>
            <h2 className="absolution-mb-30">{Content.title}</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="absolution-adaptive-right">
              <div className="absolution-slider-nav absolution-mb-30">
                <div className="absolution-slider-btn-prev absolution-courses-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="absolution-h6">Prev</span>
                </div>
                <div className="absolution-slider-btn-next absolution-courses-next">
                  <span className="absolution-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milCoursesSlider}
          className="swiper-container absolution-courses-slider absolution-mb-90"
        >
          {Content.items.map((item, key) => (
          <SwiperSlide className="swiper-slide">
            <a href="#." className="absolution-card">
              <div className="absolution-cover-frame absolution-mb-15">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="absolution-description">
                <div className="absolution-fw-descr">
                  <div className="absolution-card-top">
                    <ul className="absolution-bages absolution-mb-15">
                      {item.tags.map((tag) => (
                      <li className="absolution-dark">{tag}</li>
                      ))}
                    </ul>
                    <div className="absolution-stars absolution-mb-15">
                      <span className="absolution-dark">{item.rating}</span>
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
                        <li className="absolution-empty">
                          <i className="fas fa-star" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="absolution-divider absolution-divider-left absolution-mb-20" />
                  <h4 className="absolution-mb-15">{item.title}</h4>
                  <p className="absolution-text-sm absolution-mb-15">{item.author}</p>
                  { item.price.format == 'free' &&
                  <div className="absolution-text-lg absolution-bold absolution-accent">{item.price.value}</div>
                  }
                  { item.price.format == 'default' &&
                  <div className="absolution-text-lg absolution-dark absolution-bold">{item.price.value}</div>
                  }
                  { item.price.format == 'sale' &&
                  <div className="absolution-text-lg absolution-bold">
                    <s className="absolution-text-sm">{item.price.old}</s> &nbsp;{" "}
                    <span className="absolution-accent">{item.price.value}</span>
                  </div>
                  }
                </div>
              </div>
            </a>
          </SwiperSlide>
          ))}
        </Swiper>
        
        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6">
            <a href={Content.button.link} className="absolution-link">
              <span>{Content.button.label}</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home2Courses;
