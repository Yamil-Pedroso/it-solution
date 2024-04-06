import PageBanner from '@/src/components/PageBanner'
import Layouts from '@/src/layouts/Layouts'
import Link from 'next/link'
const Team = () => {
  return (
    <Layouts>
      <PageBanner pageName={'Team'} pageTitle={'Leadership Team'} />
      {/* team */}
      <section className="absolution-team absolution-p-120-60">
        <div className="container">
          <h3 className="absolution-text-center absolution-mb-120">
            It is a long established fact that a{' '}
            <span className="absolution-accent">
              reader will be <br />
              distracted
            </span>{' '}
            by the readable content.
          </h3>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="absolution-team-card absolution-mb-60">
                <div className="absolution-image-frame absolution-mb-30">
                  <img src="img/faces/1.jpg" alt="Team member" />
                  <div className="absolution-team-circle" />
                </div>
                <h4 className="absolution-mb-10">Andrew Kazantzis</h4>
                <p>CEO Absolution</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="absolution-team-card absolution-mb-60">
                <div className="absolution-image-frame absolution-mb-30">
                  <img src="img/faces/2.jpg" alt="Team member" />
                  <div className="absolution-team-circle" />
                </div>
                <h4 className="absolution-mb-10">Jane Meldrum</h4>
                <p>Designer</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link
                href="team-single"
                className="absolution-team-card absolution-mb-60 absolution-mb-30"
              >
                <div className="absolution-image-frame absolution-mb-30">
                  <img src="img/faces/3.jpg" alt="Team member" />
                  <div className="absolution-team-circle" />
                </div>
                <h4 className="absolution-mb-10">Roy Ellawala</h4>
                <p>App Developer</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="absolution-team-card absolution-mb-60">
                <div className="absolution-image-frame absolution-mb-30">
                  <img src="img/faces/4.jpg" alt="Team member" />
                  <div className="absolution-team-circle" />
                </div>
                <h4 className="absolution-mb-10">Andrew Kazantzis</h4>
                <p>CEO Absolution</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="absolution-team-card absolution-mb-60">
                <div className="absolution-image-frame absolution-mb-30">
                  <img src="img/faces/5.jpg" alt="Team member" />
                  <div className="absolution-team-circle" />
                </div>
                <h4 className="absolution-mb-10">Jane Meldrum</h4>
                <p>Designer</p>
              </Link>
            </div>
            <div className="col-sm-6 col-lg-4">
              <Link href="team-single" className="absolution-team-card absolution-mb-60">
                <div className="absolution-image-frame absolution-mb-30">
                  <img src="img/faces/6.jpg" alt="Team member" />
                  <div className="absolution-team-circle" />
                </div>
                <h4 className="absolution-mb-10">Roy Ellawala</h4>
                <p>App Developer</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* team end */}
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* icon boxes */}
      <section className="absolution-icon-boxes absolution-p-120-60">
        <div className="container">
          <div className="row align-items-center justify-content-between absolution-mb-90">
            <div className="col-xl-6">
              <h2>
                Values that <span className="absolution-accent">Lead Us</span>
              </h2>
            </div>
            <div className="col-xl-5">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="absolution-icon-box absolution-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">
                  <span className="absolution-accent">01.</span>&nbsp; Productivity
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="absolution-icon-box absolution-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">
                  <span className="absolution-accent">02.</span>&nbsp; Transparency
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="absolution-icon-box absolution-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">
                  <span className="absolution-accent">03.</span>&nbsp; Personality
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-3">
              <div className="absolution-icon-box absolution-center absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
                <h5 className="absolution-mb-20">
                  <span className="absolution-accent">04.</span>&nbsp; Volition
                </h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor ut labore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* icon boxes end */}
      {/* call to action */}
      <section className="call-to-action absolution-gradient-bg absolution-p-120-0">
        <div
          className="absolution-deco absolution-deco-accent"
          style={{ top: 0, left: '15%' }}
        />
        <div className="container absolution-text-center">
          <div className="absolution-cta-frame">
            <div className="absolution-icon-frame absolution-icon-frame-md absolution-mb-60">
              <img src="img/icons/md/6l.svg" alt="icon" />
            </div>
            <p className="absolution-light absolution-mb-30">Leadership Team</p>
            <h2 className="absolution-light absolution-mb-30">
              Let’s <span className="absolution-accent">Open the World</span> of IT to
              You
            </h2>
            <p className="absolution-light-soft absolution-mb-60">
              It is a long established fact that a reader will be distracted by
              the readable content <br /> of a page when looking at its layout.
            </p>
            <a href="#." className="absolution-button absolution-border absolution-light">
              <span>Book an Appointment</span>
            </a>
          </div>
        </div>
      </section>
      {/* call to action end */}
    </Layouts>
  )
}
export default Team
