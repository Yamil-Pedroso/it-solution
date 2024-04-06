import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const Service2Steps = dynamic(
  () => import("@/src/components/sliders/Service2Steps"),
  {
    ssr: false,
  }
);
const Service2Reviews = dynamic(
  () => import("@/src/components/sliders/Service2Reviews"),
  {
    ssr: false,
  }
);
const LatestProjectsSlider = dynamic( () => import("../components/sliders/LatestProjects"), { ssr: false } );


const Service2 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Solution"} pageTitle={"UI/UX design"} />

      {/* call to action */}
      <section className="absolution-p-120-90">
        <div
          className="absolution-deco"
          style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="absolution-hori-box absolution-mb-30">
                <div className="absolution-mr-30">
                  <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg">
                    <img src="img/icons/md/13.svg" alt="icon" />
                  </div>
                </div>
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna{" "}
                  <span className="absolution-accent">
                    aliqu quis ipsum suspendisse
                  </span>{" "}
                  ultrices gravida.
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="absolution-adaptive-right">
                <a href="#." className="absolution-button absolution-border absolution-mb-30">
                  <span>Hire UI/UX Designers</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* process */}
      <section className="absolution-p-120-60">
        <div className="absolution-deco" style={{ top: 0, right: "25%" }} />
        <div className="container">
          <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
            High Experience
          </span>
          <h2 className="absolution-mb-120">
            UI/UX <span className="absolution-accent">Design Services</span> That Set
            Us Apart
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="absolution-icon-box-2 absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">User Research</h4>
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
                  <img src="img/icons/md/15.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">Prototyping</h4>
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
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">UX Design</h4>
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
                  <img src="img/icons/md/13.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">UI Design</h4>
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
                  <img src="img/icons/md/16.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">UI/UX Audit and Consulting</h4>
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
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="absolution-box-text">
                  <h4 className="absolution-mb-30">Usability Testing</h4>
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
      {/* process end */}
      {/* call to action */}
      <section className="absolution-call-to-action absolution-p-120-90">
        <div
          className="absolution-deco absolution-deco-accent"
          style={{ bottom: 0, right: "35%", transform: "rotate(180deg)" }}
        />
        <img
          src="img/photo/15.jpg"
          className="absolution-background-image"
          style={{ objectPosition: "center" }}
          alt="image"
        />
        <div className="absolution-overlay" />
        <div className="container absolution-relative">
          <div className="row">
            <div className="col-lg-6 absolution-mb-30">
              <h3 className="absolution-light absolution-mb-15">
                Let’s Discuss <span className="absolution-accent">Your</span> Digital{" "}
                <span className="absolution-accent">Opportunity.</span>
              </h3>
              <p className="absolution-light-soft">
                Unlock your digital transformation opportunities now!
              </p>
            </div>
            <div className="col-lg-6 absolution-mb-30">
              <div className="absolution-adaptive-right">
                <a href="#." className="absolution-button absolution-border absolution-light">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* tech stack */}
      <section className="absolution-p-120-90">
        <div className="absolution-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
            Our Tools
          </span>
          <h2 className="absolution-mb-90">
            Our Design <span className="absolution-accent">Technology Stack</span>
          </h2>
          <div className="row absolution-grid-lines">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>Figma</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>Photoshop</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>Sketch</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>Adobe XD</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>Zeppelin</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>Illustrator</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>Kotlin</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>Swift</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>PHP</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>MariaDB</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>AWS</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="absolution-item-card">
                <h6>React</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tech stack end */}
      {/* ??? */}
      <section className="absolution-gradient-bg absolution-p-120-60">
        <div className="container">
          <div className="absolution-mb-90">
            <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30 absolution-light">
              Our Enterprise
            </span>
            <h2 className="absolution-light">
              What Our <span className="absolution-accent">UI/UX Design</span> <br />
              Company Does Best
            </h2>
          </div>
          <div className="row absolution-mb-30-adapt">
            <div className="col-xl-4">
              <div className="absolution-mb-60">
                <div className="absolution-number-icon absolution-light absolution-circle absolution-mb-30">
                  <span>01</span>
                </div>
                <h4 className="absolution-light absolution-mb-15">
                  SaaS Development Consulting
                </h4>
                <p className="absolution-light-soft">
                  Dissuade ecstatic and properly saw entirely sir why laughter
                  endeavor. In on my jointure horrible margaret suitable he
                  followed speedily.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-mb-60">
                <div className="absolution-number-icon absolution-light absolution-lines absolution-mb-30">
                  <span>02</span>
                </div>
                <h4 className="absolution-light absolution-mb-15">
                  SaaS Design and Prototyping
                </h4>
                <p className="absolution-light-soft">
                  Dissuade ecstatic and properly saw entirely sir why laughter
                  endeavor. In on my jointure horrible margaret suitable he
                  followed speedily.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-mb-60">
                <div className="absolution-number-icon absolution-light absolution-mb-30">
                  <span>03</span>
                </div>
                <h4 className="absolution-light absolution-mb-15">
                  End-to-End SaaS Development
                </h4>
                <p className="absolution-light-soft">
                  Dissuade ecstatic and properly saw entirely sir why laughter
                  endeavor. In on my jointure horrible margaret suitable he
                  followed speedily.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-mb-60">
                <div className="absolution-number-icon absolution-light absolution-mb-30">
                  <span>04</span>
                </div>
                <h4 className="absolution-light absolution-mb-15">Migration to SaaS</h4>
                <p className="absolution-light-soft">
                  Dissuade ecstatic and properly saw entirely sir why laughter
                  endeavor. In on my jointure horrible margaret suitable he
                  followed speedily.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-mb-60">
                <div className="absolution-number-icon absolution-light absolution-circle absolution-mb-30">
                  <span>05</span>
                </div>
                <h4 className="absolution-light absolution-mb-15">
                  Third Party Integrations
                </h4>
                <p className="absolution-light-soft">
                  Dissuade ecstatic and properly saw entirely sir why laughter
                  endeavor. In on my jointure horrible margaret suitable he
                  followed speedily.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-mb-60">
                <div className="absolution-number-icon absolution-light absolution-lines absolution-mb-30">
                  <span>06</span>
                </div>
                <h4 className="absolution-light absolution-mb-15">
                  SaaS Support and Maintenance
                </h4>
                <p className="absolution-light-soft">
                  Dissuade ecstatic and properly saw entirely sir why laughter
                  endeavor. In on my jointure horrible margaret suitable he
                  followed speedily.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* steps */}
      <Service2Steps />
      {/* steps end */}
      {/* reviews */}
      <Service2Reviews />
      {/* reviews end */}
      {/* portfolio */}
      <LatestProjectsSlider />
      {/* portfolio end */}
      {/* contact */}
      <ContactForm />
      {/* contact end */}
    </Layouts>
  );
};
export default Service2;
