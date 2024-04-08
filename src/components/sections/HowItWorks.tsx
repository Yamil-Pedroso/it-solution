import { createElement } from "react";
import * as FaIcons from "react-icons/fa";
import Content from "../../data/sections/how-it-works.json";

const HowItWorksSection = () => {
  
  return (
    <section className="absolution-how-it-works absolution-deep-bg absolution-p-120-90">
      <div className="absolution-deco" style={{ top: 0, right: "20%" }} />
      <div
        className="absolution-deco"
        style={{ bottom: 0, left: "30%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
          {Content.subtitle}
        </span>
        <h2 className="absolution-mb-90" style={{ color: "#fff" }}>
          {Content.title.first}{" "}
          <span className="absolution-accent">{Content.title.second}</span>{" "}
          {Content.title.third}
        </h2>
        <div className="row">
          {Content.items.map((item, key) => (
            <div className="col-md-6 col-xl-3" key={`how-it-works-i-${key}`}>
              <div className="absolution-mb-60">
                <div className="absolution-icon-box-head absolution-mb-30">
                  <div className="absolution-icon-frame absolution-icon-frame-sm absolution-icon-created">
                  {createElement(FaIcons[item.icon], { style: { fontSize: '2rem' } })}
                  </div>
                  <h5>{item.name}</h5>
                </div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row align-items-center" style={{ color: "#fff" }}>
          <div className="col-md-6 col-xl-6">
            <a
              href={Content.button1.link}
              className="absolution-link absolution-mb-30"
            >
              <span>{Content.button1.label}</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="absolution-adaptive-right">
              <a
                href={Content.button2.link}
                className="absolution-button absolution-border absolution-mb-30"
              >
                <span>{Content.button2.label}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
