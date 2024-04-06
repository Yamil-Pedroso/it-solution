import React from "react";
import Content from "../../data/sections/icon-boxes.json";

const IconBoxesSection = () => {
    return (
      <section className="absolution-icon-boxes absolution-p-120-60">
        <div className="container">
          <div className="row">
            {Content.items.map((item) => (
            <div className="col-md-6 col-xl-3">
              <div className="absolution-icon-box absolution-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src={item.icon} alt="icon" />
                </div>
                <p className="absolution-text-sm absolution-mb-20">{item.subtitle}</p>
                <h5 dangerouslySetInnerHTML={{__html : item.title}} />
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default IconBoxesSection;