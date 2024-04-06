import PageBanner from '@/src/components/PageBanner'
import Layouts from '@/src/layouts/Layouts'
import Link from 'next/link'
const Blog = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={'Blog'} pageTitle={'Our Blog'} />
      {/* blog */}
      <section className="absolution-blog absolution-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 absolution-mb-120">
              <Link href="publication" className="absolution-card absolution-mb-60">
                <div className="absolution-cover-frame">
                  <img src="img/blog/1.jpg" alt="project" />
                </div>
                <div className="absolution-description">
                  <div className="absolution-card-title">
                    <ul className="absolution-dot-list absolution-text-sm absolution-mb-15">
                      <li>Management</li>
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>Easy &amp; Most Powerful Server Platform.</h4>
                  </div>
                  <div className="absolution-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Tempor incididunt dolor sit amet, consectetur
                      adipisicing.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="publication" className="absolution-card absolution-mb-60">
                <div className="absolution-cover-frame">
                  <img src="img/blog/2.jpg" alt="project" />
                </div>
                <div className="absolution-description">
                  <div className="absolution-card-title">
                    <ul className="absolution-dot-list absolution-text-sm absolution-mb-15">
                      <li>Management</li>
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>Easy &amp; Most Powerful Server Platform.</h4>
                  </div>
                  <div className="absolution-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Tempor incididunt dolor sit amet, consectetur
                      adipisicing.
                    </p>
                  </div>
                </div>
              </Link>
              <Link href="publication" className="absolution-card absolution-mb-60">
                <div className="absolution-cover-frame">
                  <img src="img/blog/3.jpg" alt="project" />
                </div>
                <div className="absolution-description">
                  <div className="absolution-card-title">
                    <ul className="absolution-dot-list absolution-text-sm absolution-mb-15">
                      <li>Management</li>
                      <li>29 Oct. 2023</li>
                    </ul>
                    <h4>Easy &amp; Most Powerful Server Platform.</h4>
                  </div>
                  <div className="absolution-card-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Tempor incididunt dolor sit amet, consectetur
                      adipisicing.
                    </p>
                  </div>
                </div>
              </Link>
              <div className="absolution-divider absolution-mb-60" />
              <div className="absolution-pagination absolution-hidden-arrows">
                <div className="absolution-slider-nav">
                  <div className="absolution-slider-btn-prev absolution-blog-prev">
                    <i className="fas fa-arrow-left" />
                    <span className="absolution-h6">Prev</span>
                  </div>
                </div>
                <ul className="absolution-pagination-numbers">
                  <li className="absolution-active">
                    <a href="#.">1</a>
                  </li>
                  <li>
                    <a href="#.">2</a>
                  </li>
                  <li>
                    <a href="#.">3</a>
                  </li>
                </ul>
                <div className="absolution-slider-nav">
                  <div className="absolution-slider-btn-next absolution-blog-next">
                    <span className="absolution-h6">Next</span>
                    <i className="fas fa-arrow-right" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 absolution-mb-120">
              <div className="absolution-mb-60">
                <h5 className="absolution-list-title absolution-mb-30">About Absolution</h5>
                <p className="absolution-mb-30">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy nibh euismod tincidunt.
                </p>
                <Link href="team-single" className="absolution-post-sm absolution-mb-15">
                  <div className="absolution-cover-frame">
                    <img src="img/faces/1.jpg" alt="cover" />
                  </div>
                  <div className="absolution-description">
                    <h4 className="absolution-font-3 absolution-accent">Jane Meldrum</h4>
                    <p className="absolution-text-sm">CEO &amp; Co-Founder</p>
                  </div>
                </Link>
              </div>
              <div className="absolution-divider absolution-mb-60" />
              <form className="absolution-sidebar-input-frame absolution-mb-60">
                <input
                  type="text"
                  className="absolution-sidebar-input"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fas fa-search" />
                </button>
              </form>
              <div className="absolution-divider absolution-mb-60" />
              <div className="absolution-mb-60">
                <h5 className="absolution-list-title absolution-mb-30">Recent Posts</h5>
                <Link href="publication" className="absolution-post-sm absolution-mb-15">
                  <div className="absolution-cover-frame">
                    <img src="img/blog/6.jpg" alt="cover" />
                  </div>
                  <div className="absolution-description">
                    <h6>The World’s Fastest 2 Qubit Qate</h6>
                  </div>
                </Link>
                <Link href="publication" className="absolution-post-sm absolution-mb-15">
                  <div className="absolution-cover-frame">
                    <img src="img/blog/5.jpg" alt="cover" />
                  </div>
                  <div className="absolution-description">
                    <h6>Build Your Money Machine, Take Control</h6>
                  </div>
                </Link>
                <Link href="publication" className="absolution-post-sm absolution-mb-15">
                  <div className="absolution-cover-frame">
                    <img src="img/blog/4.jpg" alt="cover" />
                  </div>
                  <div className="absolution-description">
                    <h6>Android App For Shaving Products Drive</h6>
                  </div>
                </Link>
                <Link href="publication" className="absolution-post-sm absolution-mb-15">
                  <div className="absolution-cover-frame">
                    <img src="img/blog/3.jpg" alt="cover" />
                  </div>
                  <div className="absolution-description">
                    <h6>Positioning Your Self As a Pro Consultant</h6>
                  </div>
                </Link>
              </div>
              <div className="absolution-divider absolution-mb-60" />
              <div className="absolution-mb-60">
                <h5 className="absolution-list-title absolution-mb-30">Categories</h5>
                <ul className="absolution-hover-link-list">
                  <li>
                    <a href="#.">Business</a>
                  </li>
                  <li>
                    <a href="#.">Design</a>
                  </li>
                  <li>
                    <a href="#.">Development</a>
                  </li>
                  <li>
                    <a href="#.">Management</a>
                  </li>
                  <li>
                    <a href="#.">Software</a>
                  </li>
                </ul>
              </div>
              <div className="absolution-divider absolution-mb-60" />
              <div className="absolution-mb-60">
                <h5 className="absolution-list-title absolution-mb-30">Tags</h5>
                <ul className="absolution-tags">
                  <li>
                    <a href="#.">Business</a>
                  </li>
                  <li>
                    <a href="#.">Design</a>
                  </li>
                  <li>
                    <a href="#.">General</a>
                  </li>
                  <li>
                    <a href="#.">Development</a>
                  </li>
                  <li>
                    <a href="#.">Learning</a>
                  </li>
                </ul>
              </div>
              <div className="absolution-divider absolution-mb-60" />
              <div className="absolution-mb-60">
                <h5 className="absolution-list-title absolution-mb-30">Newsletter</h5>
                <form className="absolution-sidebar-input-frame">
                  <input
                    type="text"
                    className="absolution-sidebar-input"
                    placeholder="Your email address"
                  />
                  <button type="submit">
                    <i className="fas fa-arrow-right" />
                  </button>
                </form>
              </div>
              <div className="absolution-divider absolution-mb-60" />
              <h5 className="absolution-list-title absolution-mb-30">Contact us</h5>
              <p className="absolution-mb-30">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </p>
              <Link href="contact" className="absolution-link">
                <span>Send</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}
    </Layouts>
  )
}
export default Blog
