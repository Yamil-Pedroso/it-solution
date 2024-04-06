import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Project = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="absolution-banner-sm absolution-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="absolution-background-image"
        />
        <div
          className="absolution-deco absolution-deco-accent"
          style={{ top: "47%", right: "10%", transform: "rotate(90deg)" }}
        />
        <div className="absolution-banner-content">
          <div className="container absolution-relative">
            <Link href="portfolio" className="absolution-link link-left absolution-mb-30">
              <i className="fas fa-arrow-left" />
              <span>All Cases</span>
            </Link>
            <h2 className="absolution-uppercase">Android app products delivery</h2>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* project */}
      <section className="absolution-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-4 col-xl-3">
              <div className="absolution-project-info absolution-mb-60">
                <h5 className="absolution-list-title absolution-mb-30">Project Info</h5>
                <p className="absolution-mb-10">Client</p>
                <h6 className="absolution-mb-15">eCoshop Club</h6>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <p className="absolution-mb-10">Service</p>
                <h6 className="absolution-mb-15">App Development</h6>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <p className="absolution-mb-10">Industry</p>
                <h6 className="absolution-mb-15">Retail, eCommerce</h6>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <p className="absolution-mb-10">Stack</p>
                <h6>Android, Realm, Dagger 2, RxJava</h6>
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                Overviews
              </span>
              <h3 className="absolution-mb-30">Challenge</h3>
              <p className="absolution-mb-60">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc.
              </p>
              <h3 className="absolution-mb-30">Our Solution</h3>
              <p className="absolution-mb-60">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="row">
                <div className="col-xl-6">
                  <ul className="absolution-check-icon-list absolution-mb-15">
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
                <div className="col-xl-6 absolution-mb-30">
                  <ul className="absolution-check-icon-list">
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* project */}
      <section className="absolution-p-120-60">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 absolution-mb-60">
              <h3 className="absolution-mb-30">The Solution</h3>
              <p className="absolution-mb-30">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="absolution-icon-box-head absolution-long absolution-mb-15">
                <div className="absolution-icon-frame absolution-icon-frame-sm">
                  <img src="img/icons/sm/3.svg" alt="icon" />
                </div>
                <p className="absolution-dark">
                  It is a long established fact that a reader will be
                </p>
              </div>
              <div className="absolution-icon-box-head absolution-long absolution-mb-15">
                <div className="absolution-icon-frame absolution-icon-frame-sm">
                  <img src="img/icons/sm/2.svg" alt="icon" />
                </div>
                <p className="absolution-dark">
                  There are many variations of passages
                </p>
              </div>
              <div className="absolution-icon-box-head absolution-long absolution-mb-15">
                <div className="absolution-icon-frame absolution-icon-frame-sm">
                  <img src="img/icons/sm/5.svg" alt="icon" />
                </div>
                <p className="absolution-dark">All the Lorem Ipsum generators</p>
              </div>
              <div className="absolution-icon-box-head absolution-long absolution-mb-15">
                <div className="absolution-icon-frame absolution-icon-frame-sm">
                  <img src="img/icons/sm/6.svg" alt="icon" />
                </div>
                <p className="absolution-dark">
                  Asearch for 'lorem ipsum' will uncover many
                </p>
              </div>
            </div>
            <div className="col-xl-6 absolution-mb-60">
              <div className="absolution-project-cover">
                <img src="img/projects/2.jpg" alt="Project" />
              </div>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-5 absolution-mb-60">
              <h3 className="absolution-mb-30">The Impact</h3>
              <p className="absolution-mb-30">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="absolution-icon-box-head absolution-long absolution-mb-15">
                <div className="absolution-icon-frame absolution-icon-frame-sm">
                  <img src="img/icons/sm/7.svg" alt="icon" />
                </div>
                <p className="absolution-dark">
                  It is a long established fact that a reader will be
                </p>
              </div>
              <div className="absolution-icon-box-head absolution-long absolution-mb-15">
                <div className="absolution-icon-frame absolution-icon-frame-sm">
                  <img src="img/icons/sm/4.svg" alt="icon" />
                </div>
                <p className="absolution-dark">
                  There are many variations of passages
                </p>
              </div>
              <div className="absolution-icon-box-head absolution-long absolution-mb-15">
                <div className="absolution-icon-frame absolution-icon-frame-sm">
                  <img src="img/icons/sm/8.svg" alt="icon" />
                </div>
                <p className="absolution-dark">All the Lorem Ipsum generators</p>
              </div>
              <div className="absolution-icon-box-head absolution-long absolution-mb-15">
                <div className="absolution-icon-frame absolution-icon-frame-sm">
                  <img src="img/icons/sm/9.svg" alt="icon" />
                </div>
                <p className="absolution-dark">
                  Asearch for 'lorem ipsum' will uncover many
                </p>
              </div>
            </div>
            <div className="col-xl-6 absolution-mb-60">
              <div className="absolution-project-cover">
                <img src="img/projects/2.jpg" alt="Project" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project end */}
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* conclusion */}
      <section className="absolution-p-120-60">
        <div className="absolution-deco" style={{ top: 0, left: "30%" }} />
        <div className="container">
          <div className="row align-items-end absolution-mb-90">
            <div className="col-xl-6">
              <h2 className="absolution-mb-30">Conclusion</h2>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="absolution-icon-box-2 absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">Data Engineering</h4>
                  <p className="absolution-box-text absolution-mb-30">
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
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">Channel Platforms</h4>
                  <p className="absolution-box-text absolution-mb-30">
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
                  <img src="img/icons/md/3.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">Dewelopment</h4>
                  <p className="absolution-box-text absolution-mb-30">
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
      {/* conclusion end */}
      <div className="container">
        <div className="absolution-divider absolution-mb-60" />
      </div>
      {/* pagination */}
      <div className="container absolution-mb-120">
        <div className="absolution-pagination absolution-hidden-button">
          <Link href="project" className="absolution-slider-nav">
            <div className="absolution-slider-btn-prev absolution-button-sm absolution-blog-prev">
              <i className="fas fa-arrow-left" />
              <span className="absolution-h6">Prev</span>
            </div>
          </Link>
          <Link href="portfolio" className="absolution-button-all">
            <span>
              <i className="fas fa-list" />
            </span>
          </Link>
          <div className="absolution-slider-nav">
            <Link href="project" className="absolution-slider-btn-next absolution-blog-next">
              <span className="absolution-h6">Next</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
      {/* pagination end */}
    </Layouts>
  );
};
export default Project;
