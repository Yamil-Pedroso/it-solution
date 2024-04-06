import React from "react";
import Content from "../../data/sections/about.json";

const AboutSection = () => {
    return (
      <section className="absolution-about absolution-p-120-60">
        <div className="absolution-deco" style={{ top: 0, right: "10%" }} />
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-xl-5">
              <div className="absolution-about-illustration absolution-mb-60">
                <div className="absolution-image-frame">
                  <img src={Content.image} alt={Content.title} />
                </div>
                <div className="absolution-window">
                  <ul className="absolution-speakers">
                    {Content.speakers.map((item, key) => (
                    <li className="absolution-speaker">
                      <img src={item.image} alt={item.alt} />
                    </li>
                    ))}
                  </ul>
                  <div className="absolution-window-bottom">
                    <h3>{Content.rating.value}</h3>
                    <div>
                      <ul className="absolution-stars">
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
                      <p className="absolution-text-sm">{Content.rating.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-6">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                {Content.subtitle}
              </span>
              <h2 className="absolution-mb-30">{Content.title}</h2>
              <p className="absolution-mb-30">
                {Content.text}
              </p>
              <ul className="absolution-simple-list absolution-mb-60">
                {Content.list.map((item, key) => (
                <li>{item.value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>        
    );
};

export default AboutSection;