import Link from "next/link";
import Content from "../../data/sections/call-to-action.json";
import React from "react";

const CallToActionSection = () => {
    return (

        <section className="absolution-call-to-action absolution-p-120-120">
            <div
                className="absolution-deco absolution-deco-accent"
                style={{ top: 0, left: "12%" }}
            />
            <img
                src={Content.bg_image}
                className="absolution-background-image"
                style={{ objectPosition: "center" }}
                alt="image"
            />
            <div className="absolution-overlay" />
            <div className="container">
                <div className="absolution-cta-content">
                <span className="absolution-suptitle absolution-light-soft absolution-suptitle-2 absolution-mb-30">
                    {Content.subtitle}
                </span>
                <h2 className="absolution-h1 absolution-light absolution-mb-30">
                    {Content.title.first} <span className="absolution-accent">{Content.title.second}</span> {Content.title.third}
                </h2>
                <Link href={Content.link} className="absolution-link">
                    <span className="absolution-light">{Content.button}</span>
                    <i className="fas fa-arrow-right" />
                </Link>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;