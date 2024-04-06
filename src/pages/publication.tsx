import Layouts from '@/src/layouts/Layouts'
import Link from 'next/link'
const Publication = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="absolution-banner-sm-2 absolution-deep-bg">
        <img
          src="img/blog/5.jpg"
          className="absolution-background-image"
          style={{ objectPosition: 'center' }}
          alt="Publication cover"
        />
        <div className="absolution-overlay" />
      </div>
      {/* banner end */}
      {/* blog */}
      <section className="absolution-blog absolution-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 absolution-mb-120">
              <span className="absolution-suptitle absolution-accent absolution-mb-30">
                Website Speed
              </span>
              <h3 className="absolution-up-font absolution-mb-30">
                17 Powerful Ways to Speed Up Your WooCommerce Store (2022
                Ultimate Guide)
              </h3>
              <ul className="absolution-dot-list absolution-post-info absolution-text-sm absolution-mb-60">
                <li className="absolution-post-author">
                  <img src="img/faces/3.jpg" alt="Author" />
                  <span>Salman Ravoof</span>
                </li>
                <li>29 Oct. 2023</li>
                <li>11 min read</li>
              </ul>
              <div className="absolution-divider absolution-mb-60" />
              <p className="absolution-mb-30">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don’t look even
                slightly believable ..
              </p>
              <p className="absolution-mb-60">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
              <h3 className="absolution-mb-50">The Latest Technology</h3>
              <p className="absolution-mb-30">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
              <p className="absolution-mb-60">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
              <blockquote cite="google.com" className="absolution-mb-60">
                <p className="absolution-text-lg absolution-mb-20">
                  Donec tincidunt, turpis sed placerat placerat, est felis
                  bibendum elit, a feugiat dui arcu non nisl. Aliquam
                  pellentesque, tortor vitae faucibus tincidunt, purus odio
                  fermentum ipsum, vel aliquet nisi dui vitae risus.
                </p>
                <span className="absolution-h4 absolution-font-3 absolution-accent">
                  - &nbsp;John Doe
                </span>
              </blockquote>
              <p className="absolution-mb-60">
                Aliquam mollis, lorem ut elementum sagittis, ligula nulla ornare
                lorem, in pulvinar nulla turpis ac massa. Fusce imperdiet
                ullamcorper lacus non condimentum. Etiam ante magna, posuere sit
                amet quam id, ultricies cursus nisl. Vivamus maximus lorem in
                augue vulputate accumsan vel sed erat. Nullam quis sapien
                fermentum, sagittis est vel, commodo lectus.
              </p>
              <div className="row absolution-mb-30">
                <div className="col-xl-6 absolution-mb-30">
                  <img
                    src="img/blog/1.jpg"
                    alt="blog"
                    className="absolution-post-image"
                  />
                </div>
                <div className="col-xl-6 absolution-mb-30">
                  <img
                    src="img/blog/3.jpg"
                    alt="blog"
                    className="absolution-post-image"
                  />
                </div>
              </div>
              <h3 className="absolution-mb-50">Conclusion</h3>
              <p className="absolution-mb-60">
                Aliquam mollis, lorem ut elementum sagittis, ligula nulla ornare
                lorem, in pulvinar nulla turpis ac massa. Fusce imperdiet
                ullamcorper lacus non condimentum. Etiam ante magna, posuere sit
                amet quam id, ultricies cursus nisl. Vivamus maximus lorem in
                augue vulputate accumsan vel sed erat. Nullam quis sapien
                fermentum, sagittis est vel, commodo lectus.
              </p>
              <ul className="absolution-tags absolution-mb-60">
                <li className="absolution-h6">Tags:&nbsp;&nbsp; </li>
                <li>
                  <a href="#.">Business</a>
                </li>
                <li>
                  <a href="#.">Design</a>
                </li>
                <li>
                  <a href="#.">Learning</a>
                </li>
              </ul>
              <div className="absolution-divider absolution-mb-60" />
              <h5 className="absolution-mb-30">Was this article helpful?</h5>
              <a
                href="#."
                className="absolution-button absolution-border absolution-button-sm absolution-gray-border absolution-mb-15"
              >
                <span>Yes, it was fine!</span>
              </a>
              <a
                href="#."
                className="absolution-button absolution-border absolution-button-sm absolution-gray-border absolution-mb-60"
              >
                <span>No, or there was something off</span>
              </a>
              <div className="absolution-divider absolution-mb-60" />
              <h3 className="absolution-mb-60">
                Comments - <span className="absolution-accent">02</span>
              </h3>
              <ul className="absolution-comments-frame">
                <li className="absolution-comment">
                  <div className="absolution-comment-top-panel">
                    <div className="absolution-left">
                      <img src="img/faces/1.jpg" alt="user avatar" />
                      <div>
                        <h5>Ponnappa Priya</h5>
                        <p className="absolution-text-sm">September 23, 2020</p>
                      </div>
                    </div>
                    <a
                      href="#reply"
                      className="absolution-button absolution-border absolution-button-xs absolution-gray-border absolution-mb-15"
                    >
                      <span>Reply</span>
                    </a>
                  </div>
                  <p className="absolution-comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim minus rerum officiis sit quos non, nulla alias labore
                    sapiente quasi ut exercitationem aperiam beatae magni sunt
                    corporis ducimus? Ipsum, asperiores.
                  </p>
                  <ul className="absolution-sub-comments">
                    <li className="absolution-comment">
                      <div className="absolution-comment-top-panel">
                        <div className="absolution-left">
                          <img src="img/faces/2.jpg" alt="user avatar" />
                          <div>
                            <h5>Tamzyn French</h5>
                            <p className="absolution-text-sm">September 23, 2020</p>
                          </div>
                        </div>
                        <a
                          href="#reply"
                          className="absolution-button absolution-border absolution-button-xs absolution-gray-border absolution-mb-15"
                        >
                          <span>Reply</span>
                        </a>
                      </div>
                      <p className="absolution-comment-text">
                        We realised we really wanted to catch a glimpse of what
                        went on behind the scenes of the companies we looked up
                        to.
                      </p>
                    </li>
                  </ul>
                </li>
                <li className="absolution-comment">
                  <div className="absolution-comment-top-panel">
                    <div className="absolution-left">
                      <img src="img/faces/3.jpg" alt="user avatar" />
                      <div>
                        <h5>Paul Freeman</h5>
                        <p className="absolution-text-sm">September 23, 2020</p>
                      </div>
                    </div>
                    <a
                      href="#reply"
                      className="absolution-button absolution-border absolution-button-xs absolution-gray-border absolution-mb-15"
                    >
                      <span>Reply</span>
                    </a>
                  </div>
                  <p className="absolution-comment-text">
                    Dolor sit amet, consectetur adipisicing elit. Veritatis
                    minus at aliquid dolorem quis, alias impedit eveniet, omnis
                    quisquam eaque, maxime aliquam repudiandae laborum mollitia
                    iure vel, ab illum voluptatem. Possimus eaque magnam facere
                    voluptatum ipsam optio, porro qui veritatis nostrum itaque,
                    tempora, vitae quam aliquid voluptate amet! Pariatur libero
                    blanditiis nesciunt quibusdam itaque voluptates iure tempore
                    facilis dolorem aut.
                  </p>
                </li>
              </ul>
              <div className="absolution-divider absolution-mb-60" id="reply" />
              <h3 className="absolution-mb-60">Leave a Reply</h3>
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6 absolution-dark">
                        <span>Name</span>
                        <span className="absolution-accent">Required</span>
                      </label>
                      <input type="text" placeholder="Enter Your Name Here" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6">
                        <span>Email Adress</span>
                        <span className="absolution-accent">Required</span>
                      </label>
                      <input type="email" placeholder="Your Email" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6">
                        <span>Message</span>
                        <span className="absolution-accent">Required</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="absolution-shortened"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-60">
                      <label className="absolution-h6">
                        <span>Website</span>
                        <span className="absolution-dark-soft">Optional</span>
                      </label>
                      <input type="text" placeholder="mydomain.com" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="absolution-checbox-frame absolution-dark-input absolution-mb-60">
                      <input
                        className="absolution-checkbox"
                        id="checkbox-1"
                        type="checkbox"
                        defaultValue="value"
                      />
                      <label htmlFor="checkbox-1" className="absolution-text-sm">
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <button className="absolution-button absolution-border absolution-fw">
                      <span>Post Comment</span>
                    </button>
                  </div>
                </div>
              </form>
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
              <Link href="contact" className="absolution-link absolution-link-sm">
                <span>Send</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  )
}
export default Publication
