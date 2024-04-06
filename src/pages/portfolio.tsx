import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const Portfolio = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Works"} pageTitle={"Case Studies"} />
      {/* portfolio */}
      <section className="absolution-p-120-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 absolution-mb-60">
              <div className="absolution-project-cover">
                <img src="img/projects/2.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 absolution-mb-60">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                The majority have suffered alteration in some form.
              </span>
              <h3 className="absolution-mb-30">
                Android App For Shaving Products Delivery
              </h3>
              <Link href="project" className="absolution-button-with-label">
                <div className="absolution-button absolution-border absolution-icon-button">
                  <span>
                    <i className="fas fa-plus" />
                  </span>
                </div>
                <span className="absolution-dark">See More</span>
              </Link>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 absolution-mb-60">
              <div className="absolution-project-cover absolution-type-2">
                <img src="img/projects/3.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 absolution-mb-60">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                The majority have suffered alteration in some form.
              </span>
              <h3 className="absolution-mb-30">
                Android App For Shaving Products Delivery
              </h3>
              <Link href="project" className="absolution-button-with-label">
                <div className="absolution-button absolution-border absolution-icon-button">
                  <span>
                    <i className="fas fa-plus" />
                  </span>
                </div>
                <span className="absolution-dark">See More</span>
              </Link>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 absolution-mb-60">
              <div className="absolution-project-cover">
                <img src="img/projects/1.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 absolution-mb-60">
              <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
                The majority have suffered alteration in some form.
              </span>
              <h3 className="absolution-mb-30">
                Android App For Shaving Products Delivery
              </h3>
              <Link href="project" className="absolution-button-with-label">
                <div className="absolution-button absolution-border absolution-icon-button">
                  <span>
                    <i className="fas fa-plus" />
                  </span>
                </div>
                <span className="absolution-dark">See More</span>
              </Link>
            </div>
          </div>
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
                <Link href="portfolio">1</Link>
              </li>
              <li>
                <Link href="portfolio">2</Link>
              </li>
              <li>
                <Link href="portfolio">3</Link>
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
      </section>
    </Layouts>
  );
};
export default Portfolio;
