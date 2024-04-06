import PageBanner from '@/src/components/PageBanner'
import Layouts from '@/src/layouts/Layouts'
import dynamic from 'next/dynamic'
const PriceTestimonialSlider = dynamic(
  () => import('@/src/components/sliders/PriceTestimonialSlider'),
  {
    ssr: false,
  },
)
const Prices = () => {
  return (
    <Layouts>
      <PageBanner pageName={'Pricing'} pageTitle={'Pricing and plans'} />
      {/* prices */}
      <section className="absolution-prices absolution-p-120-0">
        <div className="container">
          <h3 className="absolution-text-center absolution-mb-120">
            Get <span className="absolution-accent">2 months</span> free by choosing
            Absolution annual plan
          </h3>
          <div className="row">
            <div className="col-xl-4">
              <div className="absolution-hover-card absolution-price-card absolution-mb-30">
                <p className="absolution-mb-15">For People</p>
                <h2>PLUS</h2>
                <div className="absolution-plan-price absolution-mb-15">
                  <h3 className="absolution-accent">$9</h3>
                  <span>Per Month</span>
                </div>
                <p className="absolution-text-sm absolution-mb-60">2TB (2000 GB), 1 User</p>
                <a href="#." className="absolution-button absolution-border absolution-fw absolution-mb-60">
                  <span>Get Started</span>
                </a>
                <ul className="absolution-check-list">
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li className="absolution-empty">
                    There many variations of passages
                  </li>
                  <li className="absolution-empty">All the lorem ipsum generators</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-hover-card absolution-price-card absolution-mb-30">
                <p className="absolution-mb-15">For Independent Workers</p>
                <h2>PRO</h2>
                <div className="absolution-plan-price absolution-mb-15">
                  <h3 className="absolution-accent">$99</h3>
                  <span>Per Month</span>
                </div>
                <p className="absolution-text-sm absolution-mb-60">4TB (4000 GB), 4 User</p>
                <a href="#." className="absolution-button absolution-border absolution-fw absolution-mb-60">
                  <span>Get Started</span>
                </a>
                <ul className="absolution-check-list">
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li className="absolution-empty">All the lorem ipsum generators</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-hover-card absolution-price-card absolution-mb-30">
                <p className="absolution-mb-15">Startup</p>
                <h2>GOLD</h2>
                <div className="absolution-plan-price absolution-mb-15">
                  <h3 className="absolution-accent">$299</h3>
                  <span>Per Month</span>
                </div>
                <p className="absolution-text-sm absolution-mb-60">
                  All the necessary space, Unlimited
                </p>
                <a href="#." className="absolution-button absolution-border absolution-fw absolution-mb-60">
                  <span>Get Started</span>
                </a>
                <ul className="absolution-check-list">
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                  <li>There many variations of passages</li>
                  <li>All the lorem ipsum generators</li>
                </ul>
              </div>
            </div>
            <div className="col-lx-12 absolution-p-90-120">
              <h3 className="absolution-text-center">
                Do you only need <span className="absolution-accent">9GB</span> to save
                and share your files?
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* prices end */}
      <div className="container">
        <div className="absolution-divider" />
      </div>
      {/* reviews */}
      <PriceTestimonialSlider />
      {/* reviews end */}
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
              <span className="absolution-accent">Absolution</span> in The Future
            </h2>
            <p className="absolution-light-soft absolution-mb-60">
              It is a long established fact that a reader will be distracted by
              the readable content <br /> of a page when looking at its layout.
            </p>
            <a href="#." className="absolution-button-with-label">
              <div className="absolution-button absolution-border absolution-icon-button absolution-light">
                <span>
                  <i className="fas fa-play" />
                </span>
              </div>
              <span className="absolution-light">Watch Video</span>
            </a>
          </div>
        </div>
      </section>
      {/* call to action end */}
    </Layouts>
  )
}
export default Prices
