import React from "react";
import Content from "../../data/sections/awards.json";

const AwardsSection = () => {
    const awardsItems = [] as any;

    Content.items.forEach((item, index) => {
      let itemClass = 'absolution-awards-box absolution-gradient-bg';
      if ((index+1) % 2 == 0 ) {
        itemClass += ' absolution-box-2';
      }
      if (index == (Content.items.length - 1) ){
        itemClass += ' absolution-pb-60-adapt';
      }
      let newobj = Object.assign({}, item, { "boxClass": itemClass });
      awardsItems.push(newobj);
    });

    return (
      <section className="absolution-awards">
        <div className="row m-0">
          <div className="col-xl-6 p-0 absolution-relative">
            <img
              src={Content.bg_image}
              className="absolution-background-image"
              style={{ objectPosition: "center" }}
              data-swiper-parallax-scale="1.1"
              alt="image"
            />
            <div className="absolution-overlay" />
            <div className="absolution-fake-container">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-light absolution-mb-30">
                {Content.subtitle}
              </span>
              <h2 className="absolution-light absolution-mb-30">
                {Content.title.first} <span className="absolution-accent">{Content.title.second}</span> {Content.title.third}
              </h2>
              <p className="absolution-light-soft absolution-mb-30">
                {Content.description}
              </p>
              <a href={Content.button.link} className="absolution-link">
                <span className="absolution-light">{Content.button.label}</span>
                <i className="fas fa-arrow-right" />
              </a>
            </div>
          </div>
          <div className="col-xl-6 p-0">
            <div className="row m-0">
              {awardsItems.map((item: any, key: any) => (
              <div className="col-md-6 col-xl-6 p-0">
                <div className={item.boxClass}>
                  <div className="absolution-icon-box absolution-center">
                    <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                      <img src="img/icons/md/6l.svg" alt="icon" />
                    </div>
                    <h5 className="absolution-light absolution-mb-20">{item.name}</h5>
                    <p className="absolution-text-sm absolution-light-soft">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>      
    );
};

export default AwardsSection;