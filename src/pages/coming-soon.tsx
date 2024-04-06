import Layouts from '@/src/layouts/Layouts'
import Link from 'next/link'
const ComingSoon = () => {
  return (
    <Layouts noHeader noFooter>
      {/* top bar */}
      <div className="absolution-top-position absolution-fixed">
        <div className="absolution-top-panel absolution-top-panel-transparent absolution-animated">
          {/* absolution-top-panel-transparent */}
          <div className="container-fluid">
            <Link href="/" className="absolution-logo" style={{ width: 140 }} />
            <div className="absolution-navigation">
              <p className="absolution-light">
                We Provide{' '}
                <span className="absolution-accent m-3">
                  IT Solutions &amp; Services
                </span>{' '}
                For Enterprise
              </p>
            </div>
            {/* mobile menu button */}
            <div className="absolution-menu-btn">
              <span />
            </div>
            {/* mobile menu button end */}
          </div>
        </div>
      </div>
      {/* top bar end */}
      {/* coming soon */}
      <div className="absolution-dark-bg absolution-add-page">
        <img
          src="img/photo/20.jpg"
          alt="background"
          className="absolution-background-image"
        />
        <div className="absolution-overlay" />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-4">
              <h1 className="absolution-light absolution-mb-15">
                Coming <span className="absolution-accent">Soon</span>
              </h1>
              <p className="absolution-light-soft">We are working on our website.</p>
            </div>
            <div className="col-xl-6">
              <div className="row align-items-center">
                <div className="col-lg-5">
                  <h4 className="absolution-light absolution-mb-30">
                    Join The <span className="absolution-accent">Absolution</span>
                    <br /> Experience
                  </h4>
                </div>
                <div className="col-lg-7">
                  <p className="absolution-light-soft absolution-mb-30">
                    Lorem ipsum dolor sit amet, consectetuer <br />
                    adipiscing elit sed diam nonummy.
                  </p>
                </div>
              </div>
              <form className="absolution-subscribe-form absolution-mb-30">
                <input type="text" placeholder="Your email address" />
                <button type="submit" className="absolution-button absolution-accent-bg">
                  Subscribe Now
                </button>
              </form>
              <Link href="contact" className="absolution-link absolution-light">
                <span>Contact Us</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* coming soon end */}
      <div className="absolution-addition-bottom">
        <div className="container-fluid">
          <p className="absolution-text-sm absolution-light-soft">© Absolution 2023.</p>
          <p className="absolution-text-sm absolution-light-soft">All Rights Reserved.</p>
        </div>
      </div>
    </Layouts>
  )
}
export default ComingSoon
