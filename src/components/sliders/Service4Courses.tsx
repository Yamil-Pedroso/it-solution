import React from "react";
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Service4Courses = () => {
  return (
    <section className="absolution-courses absolution-p-120-90">
      <div className="absolution-deco" style={{ top: 0, right: "40%" }} />
      <div className="container">
        <div className="row align-items-center absolution-mb-60-adapt">
          <div className="col-md-6 col-xl-6">
            <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
              Unlimited Training
            </span>
            <h2 className="absolution-mb-30">Latest Courses</h2>
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
          className="swiper-container absolution-courses-slider absolution-mb-30"
        >
          <SwiperSlide className="swiper-slide">
            <a href="#." className="absolution-card">
              <div className="absolution-cover-frame absolution-mb-15">
                <img src="img/blog/1.jpg" alt="project" />
              </div>
              <div className="absolution-description">
                <div className="absolution-fw-descr">
                  <div className="absolution-card-top">
                    <ul className="absolution-bages absolution-mb-15">
                      <li className="absolution-dark">Security</li>
                      <li className="absolution-dark">Team</li>
                    </ul>
                    <div className="absolution-stars absolution-mb-15">
                      <span className="absolution-dark">4.5</span>
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
                  <h4 className="absolution-mb-15">Cibersecurity Premium</h4>
                  <p className="absolution-text-sm absolution-mb-15">John Stone</p>
                  <div className="absolution-text-lg absolution-bold absolution-accent">Free</div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="#." className="absolution-card">
              <div className="absolution-cover-frame absolution-mb-15">
                <img src="img/projects/2.jpg" alt="project" />
              </div>
              <div className="absolution-description">
                <div className="absolution-fw-descr">
                  <div className="absolution-card-top">
                    <ul className="absolution-bages absolution-mb-15">
                      <li className="absolution-dark">Security</li>
                      <li className="absolution-dark">Team</li>
                    </ul>
                    <div className="absolution-stars absolution-mb-15">
                      <span className="absolution-dark">4.5</span>
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
                  <h4 className="absolution-mb-15">Cibersecurity Premium</h4>
                  <p className="absolution-text-sm absolution-mb-15">John Stone</p>
                  <div className="absolution-text-lg absolution-dark absolution-bold">$22.99 us</div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="#." className="absolution-card">
              <div className="absolution-cover-frame absolution-mb-15">
                <img src="img/projects/1.jpg" alt="project" />
              </div>
              <div className="absolution-description">
                <div className="absolution-fw-descr">
                  <div className="absolution-card-top">
                    <ul className="absolution-bages absolution-mb-15">
                      <li className="absolution-dark">Security</li>
                      <li className="absolution-dark">Team</li>
                    </ul>
                    <div className="absolution-stars absolution-mb-15">
                      <span className="absolution-dark">4.5</span>
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
                  <h4 className="absolution-mb-15">Cibersecurity Premium</h4>
                  <p className="absolution-text-sm absolution-mb-15">John Stone</p>
                  <div className="absolution-text-lg absolution-bold">
                    <s className="absolution-text-sm">$15.99 us</s> &nbsp;{" "}
                    <span className="absolution-accent">$50.99 us</span>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <a href="#." className="absolution-card">
              <div className="absolution-cover-frame absolution-mb-15">
                <img src="img/blog/3.jpg" alt="project" />
              </div>
              <div className="absolution-description">
                <div className="absolution-fw-descr">
                  <div className="absolution-card-top">
                    <ul className="absolution-bages absolution-mb-15">
                      <li className="absolution-dark">Security</li>
                      <li className="absolution-dark">Team</li>
                    </ul>
                    <div className="absolution-stars absolution-mb-15">
                      <span className="absolution-dark">4.5</span>
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
                  <h4 className="absolution-mb-15">Cibersecurity Premium</h4>
                  <p className="absolution-text-sm absolution-mb-15">John Stone</p>
                  <div className="absolution-dark absolution-bold">19.99 us$</div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default Service4Courses;
