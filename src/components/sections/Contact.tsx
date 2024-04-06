import React from "react";
import Content from "../../data/sections/contact.json";

const ContactSection = () => {
  return (
    <section className="absolution-contact absolution-gradient-bg absolution-p-120-0">
      <div
        className="absolution-deco absolution-deco-accent"
        style={{ top: 0, right: "10%" }}
      />
      <div className="container">
        <h2 className="absolution-light absolution-mb-90">
          {Content.title.first} <span className="absolution-accent">{Content.title.second}</span>
        </h2>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="absolution-input-frame absolution-mb-30">
                <label>
                  <span className="absolution-light">Name</span>
                  <span className="absolution-accent">Required</span>
                </label>
                <input type="text" placeholder="Enter Your Name Here" />
              </div>
              <div className="absolution-input-frame absolution-mb-30">
                <label>
                  <span className="absolution-light">Email Adress</span>
                  <span className="absolution-accent">Required</span>
                </label>
                <input type="email" id="email" placeholder="Your Email" />
              </div>
              <div className="absolution-input-frame absolution-mb-60">
                <label>
                  <span className="absolution-light">Phone</span>
                  <span className="absolution-light-soft">Optional</span>
                </label>
                <input type="number" placeholder="Your Phone" />
              </div>
              <div className="absolution-attach-frame absolution-mb-60">
                <i className="fas fa-paperclip" />
                <label className="absolution-custom-file-input">
                  <span>Attach your file</span>
                  <input type="file" id="absolution-file-input" />
                </label>
                <p className="absolution-text-sm absolution-light-soft">up to 20MB</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="absolution-input-frame absolution-mb-30">
                <label>
                  <span className="absolution-light">Email Adress</span>
                  <span className="absolution-accent">Required</span>
                </label>
                <textarea placeholder="Your Message" defaultValue={""} />
              </div>
              <p className="absolution-text-sm absolution-light-soft absolution-mb-15">
                We will process your personal information in accordance with
                our Privacy Policy.
              </p>
              <div className="absolution-checbox-frame absolution-mb-60">
                <input
                  className="absolution-checkbox"
                  id="checkbox-1"
                  type="checkbox"
                  defaultValue="value"
                />
                <label htmlFor="checkbox-1" className="absolution-text-sm absolution-light">
                  I would like to be contacted with news and updates about
                  your{" "}
                  <a href="#." className="absolution-accent">
                    events and services
                  </a>
                </label>
              </div>
            </div>
            <div className="col-12">
              <button className="absolution-button absolution-accent-bg absolution-fw">
                <span>Send Message Now</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;