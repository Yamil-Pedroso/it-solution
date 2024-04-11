import React from 'react'
//import Content from '../../data/sections/services.json'
import sections from '../../data/sections/data-sections/sections'
//import * as FaIcons from 'react-icons/fa'

const ServicesSection = () => {
  return (
    <section className="absolution-services absolution-p-120-90">
      <div className="absolution-deco" style={{ top: 0, right: '20%' }} />
      <div className="container">
        <h2 className="absolution-mb-30">
          {sections.title.first}{' '}
          <span className="absolution-accent">{sections.title.second}</span>
        </h2>
        <div className="row">
          <div className="col-lg-6 col-xl-6">
            <h4 className="absolution-mb-60 absolution-mt-30">
              {sections.column1.heading}
            </h4>
            <div className="absolution-divider absolution-divider-left" />
            {sections.column1.items.map((item, key) => (
              <div key={`services-1-i-${key}`}>
                {key > 0 && (
                  <div className="absolution-divider absolution-divider-left" />
                )}
                <div className="absolution-service-item">
                  <div className="absolution-service-icon">
                    <div className="absolution-icon-frame absolution-icon-frame-md">
                      <item.icon style={{ fontSize: '2rem' }} />
                    </div>
                  </div>
                  <div className="absolution-service-text">
                    <h5 className="absolution-mb-30">
                      <span className="absolution-accent">{item.num}</span>{' '}
                      {item.name}
                    </h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-6 col-xl-6">
            <h4 className="absolution-mb-60 absolution-mt-30">
              {sections.column2.heading}
            </h4>
            <div className="absolution-divider absolution-divider-left" />
            {sections.column2.items.map((item, key) => (
              <div key={`services-2-i-${key}`}>
                {key > 0 && (
                  <div className="absolution-divider absolution-divider-left" />
                )}
                <div className="absolution-service-item">
                  <div className="absolution-service-icon">
                    <div className="absolution-icon-frame absolution-icon-frame-md">
                      <item.icon style={{ fontSize: '2rem' }} />
                    </div>
                  </div>
                  <div className="absolution-service-text">
                    <h5 className="absolution-mb-30">
                      <span className="absolution-accent">{item.num}</span>{' '}
                      {item.name}
                    </h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
