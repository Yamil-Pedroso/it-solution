import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import Link from "next/link";
const Service3NavTabs = dynamic(
  () => import("@/src/components/sliders/Service3NavTabs"),
  {
    ssr: false,
  }
);
const LatestProjectsSlider = dynamic( () => import("../components/sliders/LatestProjects"), { ssr: false } );

const Service3 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Service"} pageTitle={"Mobile app development"} />
      {/* ??? */}
      <section className="absolution-p-120-60">
        <div className="container">
          <div className="absolution-mb-90">
            <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
              Our Data Analytics Expertise
            </span>
            <h2 className="absolution-mb-30">
              Custom <span className="absolution-accent">App Solutions</span> For any
              Mobile Platform
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="absolution-box-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">Android Platform</h5>
                <p className="absolution-mb-30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  accumsan lacus vel facilisis.
                </p>
                <ul className="absolution-dot-list">
                  <li className="absolution-text-sm absolution-bold absolution-dark">Java</li>
                  <li className="absolution-text-sm absolution-bold absolution-dark">Kotlin</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="absolution-box-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">Android Platform</h5>
                <p className="absolution-mb-30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  accumsan lacus vel facilisis.
                </p>
                <ul className="absolution-dot-list">
                  <li className="absolution-text-sm absolution-bold absolution-dark">Swift</li>
                  <li className="absolution-text-sm absolution-bold absolution-dark">Objective-C</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="absolution-box-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">Cross Platform</h5>
                <p className="absolution-mb-30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                  accumsan lacus vel facilisis.
                </p>
                <ul className="absolution-dot-list">
                  <li className="absolution-text-sm absolution-bold absolution-dark">
                    React Native
                  </li>
                  <li className="absolution-text-sm absolution-bold absolution-dark">Flutter</li>
                  <li className="absolution-text-sm absolution-bold absolution-dark">Xamarin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      
      <LatestProjectsSlider />
      
      {/* left nav tabs */}
      <Service3NavTabs />
      {/* left nav tabs end */}
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* ??? */}
      <section className="absolution-p-120-60">
        <div className="absolution-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="absolution-mb-90">
            <h2 className="absolution-mb-30">
              Delivering <span className="absolution-accent">Industry Specific</span>{" "}
              Mobile <br />
              App Solutions
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/23.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">eCcommerce</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor facilisis.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/24.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">Entertainment</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor facilisis.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">Enterprise</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor facilisis.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* ??? */}
      <section className="absolution-p-120-60">
        <div className="container">
          <div className="row align-items-end absolution-mb-60-adapt">
            <div className="col-md-6 col-xl-6">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                Tech, Business and Talents
              </span>
              <h2 className="absolution-mb-30">
                Next <span className="absolution-accent">Gen Tech</span> For Mobile App
                Development
              </h2>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="absolution-adaptive-right">
                <Link
                  href="contact"
                  className="absolution-button absolution-border absolution-mb-30"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="absolution-box-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <h6>Cloud</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="absolution-box-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/11.svg" alt="icon" />
                </div>
                <h6>AI / ML</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="absolution-box-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
                <h6>AR / VR</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="absolution-box-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-bg absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
                <h6>IoT</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
    </Layouts>
  );
};
export default Service3;
