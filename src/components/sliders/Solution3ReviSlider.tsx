import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const Solution3ReviSlider = () => {
  return (
    <section className="absolution-p-0-90">
      <div
        className="absolution-deco"
        style={{ bottom: 0, right: "40%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <h2 className="absolution-mb-60">
          Industry <span className="absolution-accent">Specific IoT</span> Development
        </h2>
        <Swiper
          {...sliderProps.milReviSlider}
          className="swiper-container absolution-revi-slider absolution-mb-90"
        >
          <SwiperSlide className="swiper-slide">
            <div className="absolution-hover-card">
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                <img src="img/icons/md/12.svg" alt="icon" />
              </div>
              <h5 className="absolution-mb-30">Retail and eCommerce</h5>
              <p>
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="absolution-hover-card">
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                <img src="img/icons/md/13.svg" alt="icon" />
              </div>
              <h5 className="absolution-mb-30">Education and eLearning</h5>
              <p>
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="absolution-hover-card">
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                <img src="img/icons/md/14.svg" alt="icon" />
              </div>
              <h5 className="absolution-mb-30">Finance and Banking</h5>
              <p>
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="absolution-hover-card">
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                <img src="img/icons/md/2.svg" alt="icon" />
              </div>
              <h5 className="absolution-mb-30">Life Sciences</h5>
              <p>
                Dissuade ecstatic and properly saw entirely sir why laughter
                endeavor. In on my jointure horrible margaret.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="row align-items-center flex-sm-row-reverse">
          <div className="col-lg-6">
            <div className="absolution-adaptive-right absolution-mb-30">
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
          <div className="col-lg-6">
            <a href="#." className="absolution-link absolution-mb-30">
              <span>Talk to Our IoT Agent</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Solution3ReviSlider;
