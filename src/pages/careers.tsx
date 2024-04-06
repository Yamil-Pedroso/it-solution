import React from 'react'
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "../lib/posts";

const CareersBannerSlider = dynamic(
  () => import("@/src/components/sliders/CareersBannerSlider"),
  {
    ssr: false,
  }
);
const LatestPostsSlider = dynamic( () => import("../components/sliders/LatestPosts"), { ssr: false } );

const Careers = (props: any) => {
  return (
    <Layouts>
      <PageBanner pageName={"Careers"} pageTitle={"Careers"} />
      {/* careers */}
      <section className="absolution-careers absolution-p-120-90">
        <div className="container">
          <div className="row justify-content-between absolution-mb-90">
            <div className="col-xl-6">
              <h3 className="absolution-mb-30">
                Inspire and Get Inspired by <br />
                <span className="absolution-accent">Professional</span> Experts
              </h3>
            </div>
            <div className="col-xl-4">
              <p>
                It uses a dictionary of over{" "}
                <span className="absolution-accent">200 Latin words</span>, combined
                with a handful of model sentence structures, to generate Lorem
                Ipsum which looks reasonable.
              </p>
            </div>
          </div>
          <ul className="absolution-vacancies-frame">
            <li className="absolution-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 absolution-mb-30">
                  <div className="absolution-vacancy-head absolution-mb-15">
                    <span className="absolution-badge">Full Time</span>
                    <span className="absolution-text-sm absolution-dark">New York</span>
                  </div>
                  <h4>UI and Web Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 absolution-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 absolution-mb-30">
                  <div className="absolution-adaptive-right">
                    <a href="#." className="absolution-button absolution-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="absolution-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 absolution-mb-30">
                  <div className="absolution-vacancy-head absolution-mb-15">
                    <span className="absolution-badge">Full Time</span>
                    <span className="absolution-text-sm absolution-dark">Miami</span>
                  </div>
                  <h4>App Developer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 absolution-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 absolution-mb-30">
                  <div className="absolution-adaptive-right">
                    <a href="#." className="absolution-button absolution-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="absolution-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 absolution-mb-30">
                  <div className="absolution-vacancy-head absolution-mb-15">
                    <span className="absolution-badge absolution-badge-dark">Remote</span>
                    <span className="absolution-text-sm absolution-dark">Whole world</span>
                  </div>
                  <h4>Sell Agent</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 absolution-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 absolution-mb-30">
                  <div className="absolution-adaptive-right">
                    <a href="#." className="absolution-button absolution-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="absolution-vacancy">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4 absolution-mb-30">
                  <div className="absolution-vacancy-head absolution-mb-15">
                    <span className="absolution-badge">Full Time</span>
                    <span className="absolution-text-sm absolution-dark">Toronto</span>
                  </div>
                  <h4>UI/UX Designer</h4>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4 absolution-mb-30">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="col-md-12 col-lg-4 col-xl-4 absolution-mb-30">
                  <div className="absolution-adaptive-right">
                    <a href="#." className="absolution-button absolution-border">
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* careers end */}
      {/* about */}
      <section className="absolution-about absolution-deep-bg absolution-p-120-0">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-5 absolution-mb-60">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                Work With Us
              </span>
              <h2 className="absolution-mb-30">
                Why <span className="absolution-accent">Choose</span> Us?
              </h2>
              <p className="absolution-mb-15">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
              <p className="absolution-mb-50">
                Nam liber tempor cum soluta nobis eleifend option congue nihil
                imperdiet doming id quod facer possim assum.
              </p>
              <div className="absolution-buttons-frame">
                <a href="#." className="absolution-button absolution-border">
                  <span>Read more</span>
                </a>
                <a href="#." className="absolution-link">
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="absolution-about-illustration-2">
                <div className="absolution-image-frame">
                  <img src="img/photo/8.jpg" alt="Office" />
                </div>
                <a href="#." className="absolution-play-button">
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* counters */}
      <section className="absolution-counters absolution-deep-bg absolution-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-3">
              <div className="absolution-mb-30">
                <h2 className="absolution-mb-20">20</h2>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <p>Years of Experience In The IT Industry</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="absolution-mb-30">
                <h2 className="absolution-mb-20">705</h2>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <p>Satisfied Clients We Have Served Globally</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="absolution-mb-30">
                <h2 className="absolution-mb-20">280</h2>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <p>Recognitions Over Two Decades</p>
              </div>
            </div>
            <div className="col-xl-3">
              <div className="absolution-mb-30">
                <h2 className="absolution-mb-20">72</h2>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <p>Awards &amp; Certifications Of Our Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      {/* banners slider */}
      <CareersBannerSlider />
      {/* banners slider end */}
      {/* partners */}
      <div className="absolution-partners absolution-p-90-60">
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
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* blog */}
      <LatestPostsSlider posts={props.posts} />
    </Layouts>
  );
};
export default Careers;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    }
  }
}
