import { useState, useEffect } from "react";
import Link from "next/link";
import { LayoutProps } from "@/src/types/types";
import Search from "@/src/components/search/Search";

const DefaultHeader = ({ transparent, headerTop, extraClass }: LayoutProps) => {
  const [toggle, setToggle] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const handleSearchVisible = () => {
    console.log("handleSearchVisible called", !searchVisible);
    setSearchVisible(!searchVisible);
  };

  const handleCloseSearch = () => {
    setSearchVisible(false);
  };

  return (
    <div
      className={`absolution-top-position absolution-fixed ${
        extraClass ? extraClass : ""
      }`}
    >
      {headerTop && (
        <div className="absolution-additional-panel">
          <div className="container-fluid">
            <ul className="absolution-ap-list">
              <li>
                Phone: <span className="absolution-accent">+ 01</span> 800 070
                404
              </li>
              <li>Info@mydomain.com</li>
            </ul>
            <div className="absolution-ap-call-to-action">
              <div className="absolution-icon-frame absolution-icon-frame-sm">
                <img src="img/icons/sm/4.svg" alt="icon" />
              </div>
              <p>
                Find out how Absolution Could save you over 2.400 US$ a year.
              </p>
            </div>
            <ul className="absolution-ap-list">
              <li>
                <a href="#.">Account</a>
              </li>
              <li>
                <a href="#.">English</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div
       className="absolution-search-visible" 
      >{searchVisible && <Search />}</div>
      <div
        className={`absolution-top-panel ${
          transparent
            ? "absolution-top-panel-transparent absolution-animated"
            : ""
        }`}
      >
        {/* absolution-top-panel-transparent */}
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="lorem-logo">
              <h2>Absolution</h2>
            </a>
          </Link>
          <div
            className={`absolution-navigation ${
              toggle ? "absolution-active" : ""
            }`}
          >
            <nav>
              <ul>
                <li className="absolution-has-children">
                  <Link href="/">Enterprise</Link>
                  <ul>
                    {/*<li>
                      <Link href="home-2">Home V2</Link>
          </li>*/}
                    <li>
                      <Link href="about">About us</Link>
                    </li>
                    <li>
                      <Link href="team">Team</Link>
                    </li>
                    <li>
                      <Link href="team-single">Team Member</Link>
                    </li>
                    <li>
                      <Link href="careers">Careers</Link>
                    </li>
                    <li>
                      <Link href="prices">Prices</Link>
                    </li>
                    <li>
                      <Link href="faq">FAQ</Link>
                    </li>
                    <li>
                      <Link href="event">Event</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="portfolio">Case Studies</Link>
                </li>
                <li className="absolution-has-children">
                  <Link href="service-1">Services</Link>
                  <ul>
                    <li>
                      <Link href="service-1">SaaS Development</Link>
                    </li>
                    <li>
                      <Link href="service-2">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link href="service-3">App Solutions</Link>
                    </li>
                    <li>
                      <Link href="service-4">Cloud Security</Link>
                    </li>
                  </ul>
                </li>
                <li className="absolution-has-children">
                  <Link href="solution-1">Solutions</Link>
                  <ul>
                    <li>
                      <Link href="solution-1">AI consulting and development</Link>
                    </li>
                    <li>
                      <Link href="solution-2">Big data</Link>
                    </li>
                    <li>
                      <Link href="solution-3">IoT development</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="blog">Blog</Link>
                </li>
                <li>
                  <Link href="contact">Contact Us</Link>
                </li>
                {/*<li className="absolution-has-children">
                  <Link href="#.">Other</Link>
                  <ul>
                    <li>
                      <Link href="coming-soon">Coming Soon</Link>
                    </li>
                    <li>
                      <Link href="404">404</Link>
                    </li>
                  </ul>
        </li>*/}
              </ul>

              <div
                className="absolution-search-icon"
                onClick={handleSearchVisible}
              >
                <svg
                  width={21}
                  height={20}
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.5848 19.7029C20.3908 19.8999 20.1358 19.997 19.8808 19.997C19.6268 19.997 19.3718 19.8999 19.1778 19.7029L15.5118 16.2199C13.9778 17.2549 12.3798 17.997 9.92584 17.997C4.98484 17.997 0.964844 13.959 0.964844 8.99695C0.964844 4.34995 4.98484 0.199951 9.92584 0.199951C14.8668 0.199951 18.8858 4.34995 18.8858 8.99695C18.8858 11.118 18.1468 13.68 16.9188 14.608L20.5848 18.29C20.9738 18.681 20.9738 19.3129 20.5848 19.7029ZM9.92584 1.99695C6.82984 1.99695 2.95684 5.13695 2.95684 8.99695C2.95684 12.857 6.82984 15.998 9.92584 15.998C11.8398 15.998 13.5758 15.217 14.8368 13.957C14.8408 13.952 14.8418 13.945 14.8468 13.941C14.8518 13.936 14.8578 13.935 14.8628 13.93C16.1168 12.663 16.8948 10.92 16.8948 8.99695C16.8948 5.13695 13.7678 1.99695 9.92584 1.99695Z"
                  />
                </svg>
              </div>
            </nav>
          </div>
          {/* mobile menu button */}
          <div
            className={`absolution-menu-btn ${
              toggle ? "absolution-active" : ""
            }`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
          {/* mobile menu button end */}
        </div>
      </div>
    </div>
  );
};
export default DefaultHeader;
