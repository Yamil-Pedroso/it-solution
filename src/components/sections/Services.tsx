import React from "react";
import Content from "../../data/sections/services.json";

const ServicesSection = () => {
  return (
    <section className="absolution-services absolution-p-120-90">
      <div className="absolution-deco" style={{ top: 0, right: "20%" }} />
      <div className="container">
        <h2 className="absolution-mb-30">
          {Content.title.first} <span className="absolution-accent">{Content.title.second}</span>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            <h4 className="absolution-mb-60 absolution-mt-30">{Content.column1.heading}</h4>
            <div className="absolution-divider absolution-divider-left" />
            {Content.column1.items.map((item, key) => (
            <div key={`services-1-i-${key}`}>
              {key > 0 &&
              <div className="absolution-divider absolution-divider-left" />
              }
              <div className="absolution-service-item">
                <div className="absolution-service-icon">
                  <div className="absolution-icon-frame absolution-icon-frame-md">
                    <img src={item.icon} alt="icon" />
                  </div>
                </div>
                <div className="absolution-service-text">
                  <h5 className="absolution-mb-30">
                    <span className="absolution-accent">{item.num}</span> {item.name}
                  </h5>
                  <p>
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
            ))}
          </div>
          <div className="col-lg-6 col-xl-6">
            <h4 className="absolution-mb-60 absolution-mt-30">{Content.column2.heading}</h4>
            <div className="absolution-divider absolution-divider-left" />
            {Content.column2.items.map((item, key) => (
            <div key={`services-2-i-${key}`}>
              {key > 0 &&
              <div className="absolution-divider absolution-divider-left" />
              }
              <div className="absolution-service-item">
                <div className="absolution-service-icon">
                  <div className="absolution-icon-frame absolution-icon-frame-md">
                    <img src={item.icon} alt="icon" />
                  </div>
                </div>
                <div className="absolution-service-text">
                  <h5 className="absolution-mb-30">
                    <span className="absolution-accent">{item.num}</span> {item.name}
                  </h5>
                  <p>
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

export default ServicesSection;