import React from 'react'
import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const About = () => {
  return (
    <Layouts>
      <PageBanner pageName={"About us"} pageTitle={"Enterprise"} />
      {/* call to action */}
      <section className="absolution-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="absolution-mb-60">
                Lorem ipsum dolor sit amet,{" "}
                <span className="absolution-accent">consectetur adipiscing elit</span>,
                sed do eiusmod tempor incididunt ut labor aliqua.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="absolution-adaptive-right">
                <a
                  href="#."
                  className="absolution-button absolution-border absolution-mr-15 absolution-mb-30"
                >
                  <span>Talk To an Expert</span>
                </a>
                <a href="#." className="absolution-button-with-label absolution-mb-60">
                  <div className="absolution-button absolution-border absolution-icon-button">
                    <span>
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <span className="absolution-dark">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* about */}
      <section className="absolution-deep-bg absolution-p-120-60">
        <div className="absolution-deco" style={{ top: 0, left: "35%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 absolution-mb-60">
              <div className="absolution-circle-illustration">
                <div className="absolution-circle-bg" />
                <div className="absolution-image-frame">
                  <img src="img/faces/t3.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                Firm Overview
              </span>
              <h2 className="absolution-mb-50">
                We Specialize in <br />
                <span className="absolution-accent">Transforming Your Idea</span> or
                Business in The Current
                <br /> Digital Era.
              </h2>
              <p className="absolution-mb-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="absolution-check-icon-list absolution-mb-60">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="absolution-dark">
                        Quis suspendisse ultrices gravida.
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="absolution-dark">
                        Consectetur adipiscing elit.
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="absolution-dark">
                        Quis suspendisse ultrices gravida.
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="absolution-dark">
                        Consectetur adipiscing elit.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5">
                  <Link href="team-single" className="absolution-post-sm absolution-mb-60">
                    <div className="absolution-cover-frame">
                      <img src="img/faces/1.jpg" alt="cover" />
                    </div>
                    <div className="absolution-description">
                      <h4 className="absolution-font-3 absolution-accent">Jane Meldrum</h4>
                      <p className="absolution-text-sm">CEO &amp; Co-Founder</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* counters */}
      <section className="absolution-p-120-60">
        <div className="absolution-deco" style={{ top: 0, left: "25%" }} />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="absolution-h1">
                8<span className="absolution-accent">+</span>
              </div>
              <h6 className="absolution-mb-60">Years Experience</h6>
              <h2 className="absolution-mb-60">
                We Run All Kinds of IT Services That Vow Your Success
              </h2>
            </div>
            <div className="col-lg-6">
              <h3 className="absolution-mb-60">
                Accelerate <span className="absolution-accent">Innovation</span> with
                world class tech teams We’ll match you to an entire{" "}
                <span className="absolution-accent">Remote Technology</span>
              </h3>
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="absolution-mb-30">
                    <span className="absolution-accent">16+</span>&nbsp; Software
                    Development
                  </h6>
                  <div className="absolution-divider absolution-divider-left absolution-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="absolution-mb-30">
                    <span className="absolution-accent">3+</span>&nbsp; Years Client
                    Engagement
                  </h6>
                  <div className="absolution-divider absolution-divider-left absolution-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="absolution-mb-30">
                    <span className="absolution-accent">360+</span>&nbsp; App
                    Development
                  </h6>
                  <div className="absolution-divider absolution-divider-left absolution-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="absolution-mb-30">
                    <span className="absolution-accent">520+</span>&nbsp; Web
                    Development
                  </h6>
                  <div className="absolution-divider absolution-divider-left absolution-mb-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* partners */}
      <div className="absolution-partners absolution-p-120-90">
        <div className="container">
          <div className="absolution-partners-frame">
            <a href="#.">
              <img src="img/partners/1.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/3.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/4.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/5.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/6.png" alt="partner" />
            </a>
          </div>
        </div>
      </div>
      {/* partners end */}
      {/* about */}
      <section className="absolution-deep-bg absolution-p-120-60">
        <div className="absolution-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 absolution-mb-60">
              <div className="absolution-circle-illustration">
                <div className="absolution-circle-bg" />
                <div className="absolution-image-frame">
                  <img src="img/faces/t2.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 absolution-mb-60">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                IT Enterprise
              </span>
              <h2 className="absolution-mb-50">Our Mission</h2>
              <p className="absolution-mb-50">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose. There are many variations of
                passages majority.
              </p>
              <ul className="absolution-simple-list">
                <li>Accelerate innovation.</li>
                <li>With world class tech teams.</li>
                <li>Our all service offerings to enhance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* features */}
      <section className="absolution-p-120-120">
        <div className="container">
          <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
            Discover Our Company
          </span>
          <h2 className="absolution-mb-120">Why Work With Us</h2>
          <div className="absolution-divider" />
          <div className="absolution-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="absolution-mb-30">Top Expertise</h4>
              </div>
              <div className="col-xl-6">
                <p className="absolution-box-text absolution-mb-30">
                  Et iusto odio dignissim qui blandit praesent luptatum zzril
                  delenit. Duis autem vel eum iriure dolor in hendrerit in
                  vulputate velit esse molestie consequat, vel illum dolore eu
                  feugiat nulla facilisis at vero eros et accumsan.
                </p>
              </div>
            </div>
          </div>
          <div className="absolution-divider" />
          <div className="absolution-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="absolution-mb-30">Quality Management</h4>
              </div>
              <div className="col-xl-6">
                <p className="absolution-box-text absolution-mb-30">
                  Facilisis at vero eros et accumsan et iusto odio dignissim.
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla qui blandit praesent luptatum zzril delenit.
                </p>
              </div>
            </div>
          </div>
          <div className="absolution-divider" />
          <div className="absolution-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="absolution-mb-30">Utmost Flexibility</h4>
              </div>
              <div className="col-xl-6">
                <p className="absolution-box-text absolution-mb-30">
                  Dolore eu feugiat nulla facilisis at. Quis autem vel eum
                  iriure dolor in hendrerit in vulputate velit esse molestie
                  consequat, vel illum vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril delenit.
                </p>
              </div>
            </div>
          </div>
          <div className="absolution-divider" />
          <div className="absolution-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="absolution-mb-30">Agility</h4>
              </div>
              <div className="col-xl-6">
                <p className="absolution-box-text absolution-mb-30">
                  Duis autem vel eum iriure dolor in hendrerit in vulputate
                  velit esse molestie consequat, vel illum dolore eu feugiat
                  nulla facilisis at vero eros et accumsan et iusto odio
                  dignissim qui blandit praesent luptatum zzril.
                </p>
              </div>
            </div>
          </div>
          <div className="absolution-divider" />
          <div className="absolution-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="absolution-mb-30">Innovation</h4>
              </div>
              <div className="col-xl-6">
                <p className="absolution-box-text absolution-mb-30">
                  Blandit praesent luptatum zzril. Duis autem vel eum iriure
                  dolor in hendrerit in vulputate velit esse molestie consequat,
                  vel illum dolore eu feugiat nulla facilisis at vero eros et
                  accumsan et iusto odio dignissim qui delenit.
                </p>
              </div>
            </div>
          </div>
          <div className="absolution-divider" />
        </div>
      </section>
      {/* features end */}
      {/* features */}
      <section className="absolution-deep-bg absolution-p-120-60">
        <div className="absolution-deco" style={{ top: 0, right: "25%" }} />
        <div className="container">
          <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
            For Enterprise
          </span>
          <h2 className="absolution-mb-120">
            We Live by <span className="absolution-accent">Powerful</span> Values
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="absolution-icon-box-2 absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">We Are</h4>
                  <p className="absolution-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="absolution-icon-box-2 absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">We Deep Dive</h4>
                  <p className="absolution-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="absolution-icon-box-2 absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">We Take</h4>
                  <p className="absolution-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="absolution-icon-box-2 absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">We Value</h4>
                  <p className="absolution-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="absolution-icon-box-2 absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">We Believe</h4>
                  <p className="absolution-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="absolution-icon-box-2 absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">We Say “We”</h4>
                  <p className="absolution-box-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features end */}
      {/* contact */}
      {/* contact */}
      <ContactForm />
    </Layouts>
  );
};
export default About;
