import React from "react";
import Content from "../../data/sections/skills.json";

const SkillsSection = () => {
    return (
        <section className="absolution-skills absolution-p-120-90">
            <div className="container">
                <div className="row align-items-end absolution-mb-90">
                    <div className="col-xl-6">
                    <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                        {Content.subtitle}
                    </span>
                    <h2>
                        {Content.title.first} <span className="absolution-accent">{Content.title.second}</span> <span dangerouslySetInnerHTML={{__html : Content.title.third}} />
                    </h2>
                    </div>
                    <div className="col-xl-6">
                    <p className="absolution-mt-60-adapt">
                        {Content.description}
                    </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    {Content.items.map((item, key) => (
                    <div className="col-md-6 col-xl-3" key={`skills-i-${key}`}>
                        <h6 className="absolution-mb-30">{item.label}</h6>
                        <div className="absolution-skill-frame absolution-mb-60">
                            <div className="absolution-skill-track">
                            <div className="absolution-skill-prog" style={{ width: item.value+"%" }} />
                            </div>
                            <div className="absolution-text-sm">{item.value}%</div>
                        </div>
                    </div>
                    ))}

                    <div className="col-md-6 col-xl-3 absolution-text-center">
                    <a href={Content.button.link} className="absolution-link absolution-mb-30">
                        <span>{Content.button.label}</span>
                        <i className="fas fa-arrow-right" />
                    </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;