import React from 'react'
import Link from 'next/link'

interface PageBannerProps {
  pageTitle: string
  pageName: string
}

const PageBanner = ({ pageTitle, pageName }: PageBannerProps) => {
  return (
    <div className="absolution-banner-sm absolution-deep-bg">
      <img
        src="img/deco/map.png"
        alt="background"
        className="absolution-background-image"
      />
      <div
        className="absolution-deco absolution-deco-accent"
        style={{ top: '47%', right: '10%', transform: 'rotate(90deg)' }}
      />
      <div className="absolution-banner-content">
        <div className="container absolution-relative">
          <ul className="absolution-breadcrumbs absolution-mb-30">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#">{pageName}</a>
            </li>
          </ul>
          <h2 className="absolution-uppercase">{pageTitle}</h2>
        </div>
      </div>
    </div>
  )
}
export default PageBanner
