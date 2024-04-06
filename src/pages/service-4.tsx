import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const Service4Courses = dynamic(
  () => import("@/src/components/sliders/Service4Courses"),
  {
    ssr: false,
  }
);
const Service4 = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Service"} pageTitle={"Cybersecurity"} />
      {/* about */}
      <section className="absolution-p-120-90">
        <div
          className="absolution-deco"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <div
                className="absolution-circle-illustration absolution-with-dots-2 absolution-mb-60"
                data-swiper-parallax-scale=".8"
              >
                <div className="absolution-circle-bg" />
                <div className="absolution-image-frame">
                  <img src="img/faces/t4.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <h2 className="absolution-mb-30">
                Protect Your IT Environments With{" "}
                <span className="absolution-accent">Powerful Cloud Security</span>{" "}
                Solutions and Always on Support
              </h2>
              <div className="absolution-hori-box absolution-mb-30">
                <div className="absolution-mr-30">
                  <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg">
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <p>
                  Our{" "}
                  <span className="absolution-accent">certified cloud security</span>{" "}
                  experts help protect your environments across hyperscale
                  public and private clouds so you can run your business
                  confidence.
                </p>
              </div>
              <a href="#." className="absolution-button absolution-border absolution-mb-30">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* ??? */}
      <section className="absolution-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                Discover Our Company
              </span>
              <h2 className="absolution-mb-30">
                Explore <span className="absolution-accent">Cloud Security</span>{" "}
                Solutions
              </h2>
              <p className="absolution-mb-90">
                The import ContactForm from "@/src/components/ContactForm";
                import Layouts from "@/src/layouts/Layouts"; constant evolution
                of threats and the race for more sophisticated tools to combat
                them means that security is changing rapidly.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="absolution-hover-card absolution-box-center absolution-mb-30">
                <div
                  className="absolution-deco absolution-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="absolution-mb-30">Application Security</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-hover-card absolution-box-center absolution-mb-30">
                <div
                  className="absolution-deco absolution-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="absolution-mb-30">Data Protection</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-hover-card absolution-box-center absolution-mb-30">
                <div
                  className="absolution-deco absolution-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="absolution-mb-30">Network Security</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-hover-card absolution-box-center absolution-mb-30">
                <div
                  className="absolution-deco absolution-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <h3>IV</h3>
                </div>
                <h5 className="absolution-mb-30">Security Strategy</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-hover-card absolution-box-center absolution-mb-30">
                <div
                  className="absolution-deco absolution-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <h3>V</h3>
                </div>
                <h5 className="absolution-mb-30">Detection and Response</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-hover-card absolution-box-center absolution-mb-30">
                <div
                  className="absolution-deco absolution-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <h3>VI</h3>
                </div>
                <h5 className="absolution-mb-30">Elastic Engineering</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <section className="absolution-deep-bg absolution-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                Explore More Solutions
              </span>
              <h2 className="absolution-mb-90">
                Boost Your <span className="absolution-accent">Advantage</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 absolution-mb-30">
              <div
                className="absolution-deco absolution-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                <h3>I</h3>
              </div>
              <h5 className="absolution-mb-30">
                Cloud Native <br />
                Security Services
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-xl-3 absolution-mb-30">
              <div
                className="absolution-deco absolution-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                <h3>II</h3>
              </div>
              <h5 className="absolution-mb-30">
                Multi <br />
                Cloud Security
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-xl-3 absolution-mb-30">
              <div
                className="absolution-deco absolution-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                <h3>III</h3>
              </div>
              <h5 className="absolution-mb-30">
                On Site Security <br />
                and Compliance
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="col-xl-3 absolution-mb-30">
              <div
                className="absolution-deco absolution-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                <h3>IV</h3>
              </div>
              <h5 className="absolution-mb-30">
                Consectetur <br />
                adipiscing elit
              </h5>
              <p>
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <section className="absolution-gradient-bg absolution-p-120-90">
        <div
          className="absolution-deco absolution-deco-accent"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-light absolution-mb-30">
                Explore More Solutions
              </span>
              <h2 className="absolution-light absolution-mb-90">
                Do You Know what Your{" "}
                <span className="absolution-accent">Cybersecurity</span> Risk Score Is?
              </h2>
            </div>
            <div className="col-xl-7 absolution-mb-30">
              <p className="absolution-light-soft absolution-mb-30">
                By answering these simple questions about your cybersecurity
                technology, processes, and people, you'll receive a
                cybersecurity risk score against our baseline that can help you
                identify common security gaps in your environment that you may
                not be aware of.
              </p>
              <a href="#." className="absolution-button absolution-border absolution-light">
                <span>Start Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* courses */}
      <Service4Courses />
      {/* courses end */}
      {/* contact */}
      <section className="absolution-contact absolution-gradient-bg absolution-p-120-0">
        <div
          className="absolution-deco absolution-deco-accent"
          style={{ top: 0, right: "10%" }}
        />
        <div className="container">
          <h2 className="absolution-light absolution-mb-90">
            Contact <span className="absolution-accent">Us</span>
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
      {/* contact end */}
    </Layouts>
  );
};
export default Service4;
