import React from 'react'
const Footer2 = () => {
  return (
    <footer className="absolution-dark-bg">
      <img src="img/deco/map.png" alt="background" className="absolution-footer-bg" />
      <div className="container">
        <div className="absolution-footer-content">
          <div className="row align-items-center absolution-p-120-60">
            <div className="col-xl-6 absolution-mb-60">
              <h3 className="absolution-light absolution-mb-15">
                Join The <span className="absolution-accent">Absolution</span>{' '}
                Experience
              </h3>
              <p className="absolution-light-soft">
                Duis autem vel eum iriure dolor in hendrerit in vulputate.
              </p>
            </div>
            <div className="col-xl-6 absolution-mb-60">
              <form className="absolution-subscribe-form">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="absolution-button absolution-accent-bg">
                  Subscribe Now
                </button>
              </form>
            </div>
          </div>
          <div className="absolution-divider absolution-light" />
          <div className="row justify-content-between absolution-p-120-60">
            <div className="col-md-3 col-lg-3 col-xl-3 absolution-mb-30">
              <img
                src="img/logo/logo-light.png"
                alt="logo"
                className="absolution-logo absolution-mb-60"
                style={{ width: 140 }}
              />
              <p
                className="absolution-light absolution-light-soft"
                style={{ marginBottom: 45 }}
              >
                2307 Beverley Rd Brooklyn, <br />
                New York 11226 USA.
              </p>
              <ul className="absolution-simple-list absolution-mb-15">
                <li className="absolution-light">
                  <span className="absolution-accent">+07</span>&nbsp;
                  <span className="absolution-light-soft">0 002 00 05</span>
                </li>
                <li>
                  <span className="absolution-accent">info</span>
                  <span className="absolution-light absolution-light-soft">
                    @mydomain.com
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-lg-7 col-xl-7">
              <div className="row justify-content-end">
                <div className="col-md-4 col-lg-4 absolution-mb-60">
                  <h4 className="absolution-list-title absolution-light absolution-mb-60">Social</h4>
                  <ul className="absolution-hover-link-list absolution-light">
                    <li>
                      <a href="#.">Facebook</a>
                    </li>
                    <li>
                      <a href="#.">Instagram</a>
                    </li>
                    <li>
                      <a href="#.">LinkedIn</a>
                    </li>
                    <li>
                      <a href="#.">Twitter</a>
                    </li>
                    <li>
                      <a href="#.">YouTube</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 absolution-mb-60">
                  <h4 className="absolution-list-title absolution-light absolution-mb-60">
                    Support
                  </h4>
                  <ul className="absolution-hover-link-list absolution-light">
                    <li>
                      <a href="#.">Documentation</a>
                    </li>
                    <li>
                      <a href="#.">Support</a>
                    </li>
                    <li>
                      <a href="#.">FAQs</a>
                    </li>
                    <li>
                      <a href="#.">Download</a>
                    </li>
                    <li>
                      <a href="#.">Sitemap</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 absolution-mb-60">
                  <h4 className="absolution-list-title absolution-light absolution-mb-60">Links</h4>
                  <ul className="absolution-hover-link-list absolution-light">
                    <li>
                      <a href="#.">About Us</a>
                    </li>
                    <li>
                      <a href="#.">Terms &amp; condition</a>
                    </li>
                    <li>
                      <a href="#.">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#.">Partners</a>
                    </li>
                    <li>
                      <a href="#.">Press</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolution-footer-bottom">
        <div className="container">
          <p className="absolution-text-sm absolution-light">© Absolution 2023.</p>
          <p className="absolution-text-sm absolution-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
export default Footer2
