import React from 'react'
import Layouts from '@/src/layouts/Layouts'
import Link from 'next/link'
const Event = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="absolution-banner-sm-3">
        <img
          src="img/photo/13.jpg"
          className="absolution-background-image"
          style={{ objectPosition: 'center' }}
          data-swiper-parallax={-100}
          data-swiper-parallax-scale="1.1"
          alt="image"
        />
        <div className="absolution-overlay" />
        <div className="absolution-banner-content">
          <div className="container absolution-relative">
            <div className="row justify-content-between">
              <div className="col-xl-6">
                <span className="absolution-suptitle absolution-light absolution-suptitle-2 absolution-mb-30">
                  Our Latest News
                </span>
                <h2 className="absolution-light absolution-mb-60">
                  Technical <span className="absolution-accent">Controls</span> To Stop
                  Social Engineering
                </h2>
                <ul className="absolution-simple-list absolution-mb-50">
                  <li>
                    <span className="absolution-light">Thursday, Jul. 20, 2023</span>
                  </li>
                  <li>
                    <span className="absolution-light">2:00 pm ET - 11:00 am PT</span>
                  </li>
                </ul>
                <p className="absolution-light-soft absolution-mb-120">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida risus commodo viverra
                  maecenas.
                </p>
              </div>
              <div className="col-xl-5 absolution-relative">
                <form className="absolution-event-form">
                  <h4 className="absolution-mb-60 absolution-text-center">
                    Reserve Your Spot
                  </h4>
                  <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                    <label className="absolution-h6 absolution-dark">
                      <span>First Name</span>
                      <span className="absolution-accent">Required</span>
                    </label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                    <label className="absolution-h6 absolution-dark">
                      <span>Last Name</span>
                      <span className="absolution-accent">Required</span>
                    </label>
                    <input type="text" placeholder="Doe" />
                  </div>
                  <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                    <label className="absolution-h6 absolution-dark">
                      <span>Company Name</span>
                      <span className="absolution-dark-soft">Optional</span>
                    </label>
                    <input type="text" placeholder="Agency Designs Inc." />
                  </div>
                  <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                    <label className="absolution-h6 absolution-dark">
                      <span>Email Address</span>
                      <span className="absolution-accent">Required</span>
                    </label>
                    <input type="email" placeholder="email@mydomain.com" />
                  </div>
                  <p className="absolution-text-sm absolution-mb-30">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi. Nam liber tempor cum
                    soluta nobis eleifend option congue nihil imperdiet doming
                    id quod mazim placerat facer possim assum.
                  </p>
                  <div className="absolution-checbox-frame absolution-dark-input absolution-mb-30">
                    <input
                      className="absolution-checkbox"
                      id="checkbox-1"
                      type="checkbox"
                      defaultValue="value"
                    />
                    <label htmlFor="checkbox-1" className="absolution-text-sm">
                      I agree to receive other communications from{' '}
                      <span className="absolution-accent">Absolution.</span>
                    </label>
                  </div>
                  <p className="absolution-text-sm absolution-mb-30">
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi.
                  </p>
                  <Link href="contact" className="absolution-button absolution-border absolution-fw">
                    <span>Submit Now</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolution-banner-panel">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <h6>
                Digital <span className="absolution-accent">Transformation</span>{' '}
                Services &amp; Why It Matters Webinar
              </h6>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* description */}
      <section className="absolution-p-120-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <p className="absolution-mb-60">
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit
                esse molestie consequat, vel illum dolore eu feugiat nulla
                facilisis at vero eros et accumsan et iusto odio dignissim qui
                blandit praesent luptatum zzril delenit augue duis dolore te
                feugait nulla facilisi. Nam liber tempor cum soluta nobis
                eleifend option congue nihil imperdiet doming id quod mazim
                placerat facer possim assum.
              </p>
              <h4 className="absolution-mb-60">In This Session, We'll Talk About:</h4>
              <ul className="absolution-check-icon-list absolution-mb-60">
                <li className="absolution-mb-30">
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="absolution-dark">New Multichannel TTPs</span>
                </li>
                <li className="absolution-mb-30">
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="absolution-dark">
                    The role of Natural Language Understanding
                  </span>
                </li>
                <li className="absolution-mb-30">
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="absolution-dark">
                    Augmenting Security Training with Defensive Layers
                  </span>
                </li>
                <li>
                  <img src="img/icons/sm/12.svg" alt="icon" />
                  <span className="absolution-dark">
                    Contextual Analysis of Inbound and Outbound Messaging
                  </span>
                </li>
              </ul>
              <div className="absolution-divider absolution-mb-60" />
              <h4 className="absolution-mb-60">Speakers:</h4>
              <div className="row absolution-mb-30">
                <div className="col-xl-6">
                  <Link
                    href="team-single"
                    className="absolution-post-sm absolution-top-text absolution-mb-30"
                  >
                    <div className="absolution-cover-frame">
                      <img src="img/faces/2.jpg" alt="cover" />
                    </div>
                    <div className="absolution-description">
                      <h5 className="absolution-mb-10">Jane Meldrum</h5>
                      <p className="absolution-text-sm">
                        VP, Research Director <br />
                        Absolution Agent
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-6">
                  <Link
                    href="team-single"
                    className="absolution-post-sm absolution-top-text absolution-mb-30"
                  >
                    <div className="absolution-cover-frame">
                      <img src="img/faces/3.jpg" alt="cover" />
                    </div>
                    <div className="absolution-description">
                      <h5 className="absolution-mb-10">Jane Meldrum</h5>
                      <p className="absolution-text-sm">
                        VP, Research Director <br />
                        Absolution Agent
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="col-xl-6">
                  <Link
                    href="team-single"
                    className="absolution-post-sm absolution-top-text absolution-mb-30"
                  >
                    <div className="absolution-cover-frame">
                      <img src="img/faces/4.jpg" alt="cover" />
                    </div>
                    <div className="absolution-description">
                      <h5 className="absolution-mb-10">Jane Meldrum</h5>
                      <p className="absolution-text-sm">
                        VP, Research Director <br />
                        Absolution Agent
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="absolution-divider absolution-mb-60" />
              <h4 className="absolution-mb-60">Recommended Resources:</h4>
              <div className="row absolution-mb-60">
                <div className="col-lg-3">
                  <p className="absolution-dark absolution-mt-15 absolution-mb-30">Podcast:</p>
                </div>
                <div className="col-lg-9">
                  <ul className="absolution-rec-res">
                    <li className="absolution-dark">
                      <a href="#.">
                        <span>Big Data and Designs Tallks with Experts</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="absolution-dark">
                      <a href="#.">
                        <span>
                          Best Way to Learn New Skills is by Maria Perez
                        </span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="absolution-dark">
                      <a href="#.">
                        <span>
                          Ask the Expert About Business Startups and Ideas
                        </span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row absolution-mb-60">
                <div className="col-lg-3">
                  <p className="absolution-dark absolution-mt-15 absolution-mb-30">Blog:</p>
                </div>
                <div className="col-lg-9">
                  <ul className="absolution-rec-res">
                    <li className="absolution-dark">
                      <a href="#.">
                        <span>Career Programmer Webinar with Roy Walker</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="absolution-dark">
                      <a href="#.">
                        <span>How to Differentiate Between Business</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="absolution-dark">
                      <a href="#.">
                        <span>
                          Code and Hacking, Live Online Lessons &amp; eLearning
                        </span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3">
                  <p className="absolution-dark absolution-mt-15 absolution-mb-30">Courses:</p>
                </div>
                <div className="col-lg-9">
                  <ul className="absolution-rec-res">
                    <li className="absolution-dark">
                      <a href="#.">
                        <span>Communication Skills Master Class for Code</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="absolution-dark">
                      <a href="#.">
                        <span>The Best Online Professional Hacking</span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                    <li className="absolution-dark">
                      <a href="#.">
                        <span>
                          Microsoft Access Master Class, From Beginner
                        </span>
                        <i className="fas fa-arrow-right" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  )
}
export default Event
