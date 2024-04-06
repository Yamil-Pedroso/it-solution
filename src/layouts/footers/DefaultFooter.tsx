import React from 'react'
const DefaultFooter = () => {
  return (
    <footer className="absolution-dark-bg">
      <img src="img/deco/map.png" alt="background" className="absolution-footer-bg" />
      <div className="container">
        <div className="absolution-footer-content absolution-p-120-90">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 absolution-mb-30">
              <img
                src="img/logo/logo-light.png"
                alt="logo"
                className="absolution-logo absolution-mb-30"
                style={{ width: 140 }}
              />
              <p className="absolution-light-soft absolution-mb-30">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <a href="#." className="absolution-app-btn absolution-mb-5">
                <i className="fab fa-google-play" />
                <div className="absolution-app-text">
                  <span className="absolution-accent absolution-text-sm">
                    Available on the
                  </span>
                  <div className="absolution-h6">Google Play</div>
                </div>
              </a>
              <a href="#." className="absolution-app-btn">
                <i className="fab fa-apple" />
                <div className="absolution-app-text">
                  <span className="absolution-accent absolution-text-sm">
                    Download on the
                  </span>
                  <div className="absolution-h6">App Store</div>
                </div>
              </a>
            </div>
            <div className="col-xl-7 absolution-mt-60-adapt">
              <div className="row">
                <div className="col-lg-7 absolution-mb-30">
                  <h3 className="absolution-light absolution-up-font absolution-mb-30">
                    Join The <span className="absolution-accent">Absolution</span>{' '}
                    <br />
                    Experience
                  </h3>
                  <p className="absolution-light-soft">
                    Lorem ipsum dolor sit amet, consectetuer
                    <br /> adipiscing elit, sed diam nonummy.
                  </p>
                </div>
                <div className="col-lg-5 absolution-mb-30">
                  <form>
                    <input
                      className="absolution-rounded-input absolution-text-center absolution-mb-5"
                      type="text"
                      placeholder="Your email address"
                    />
                    <button className="absolution-button absolution-accent-bg absolution-fw">
                      <span>Subscribe Now</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolution-divider absolution-light" />
        <div className="absolution-footer-links">
          <ul className="absolution-social absolution-light">
            <li className="absolution-adapt-links">
              <a href="#.">Facebook</a>
              <a href="#.">FB</a>
            </li>
            <li className="absolution-adapt-links">
              <a href="#.">Instagram</a>
              <a href="#.">IG</a>
            </li>
            <li className="absolution-adapt-links">
              <a href="#.">LinkedIn</a>
              <a href="#.">IN</a>
            </li>
            <li className="absolution-adapt-links">
              <a href="#.">Twitter</a>
              <a href="#.">TW</a>
            </li>
            <li className="absolution-adapt-links">
              <a href="#.">YouTube</a>
              <a href="#.">YT</a>
            </li>
          </ul>
          <ul className="absolution-additional-links absolution-light">
            <li>
              <a href="#.">Terms &amp; Condition</a>
            </li>
            <li>
              <a href="#.">Privacy Policy</a>
            </li>
            <li>
              <a href="#.">Sitemap</a>
            </li>
          </ul>
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
export default DefaultFooter
