import React from 'react'
import Layouts from '@/src/layouts/Layouts'
import Link from 'next/link'
const E404 = () => {
  return (
    <Layouts noFooter transparent>
      {/* 404 */}
      <div className="absolution-dark-bg absolution-add-page">
        <div
          className="absolution-deco absolution-deco-accent"
          style={{ top: '40vh', right: '10%', transform: 'rotate(90deg)' }}
        />
        <img src="img/deco/map.png" alt="background" className="absolution-map-bg" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-4">
              <div className="absolution-text-center absolution-mb-30">
                <h5 className="absolution-light">Error</h5>
                <h1 className="absolution-light absolution-404-number">404</h1>
                <h5 className="absolution-light">
                  Page <span className="absolution-accent">not</span> found
                </h5>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-404-text">
                <p className="absolution-light-soft absolution-mb-30">
                  The page you are looking for does not exist; it may have been
                  moved or removed altogether.
                </p>
                <Link href="home-2" className="absolution-button absolution-border absolution-light">
                  <span>Back to homepage</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 404 end */}
      <div className="absolution-addition-bottom">
        <div className="container-fluid">
          <p className="absolution-text-sm absolution-light-soft">© Absolution 2023.</p>
          <p className="absolution-text-sm absolution-light-soft">All Rights Reserved.</p>
        </div>
      </div>
    </Layouts>
  )
}
export default E404
