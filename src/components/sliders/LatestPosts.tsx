import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sliderProps } from '../../common/sliderProps'
import SectionData from '../../data/sliders/latest-posts.json'

const LatestThinking = ({ posts }: any) => {
  const latestPosts = [] as any

  posts.slice(0, SectionData.numOfItems).forEach((post: any, index: any) => {
    let s_class1 = 'absolution-slide-25'
    let s_class2 = 'absolution-card-sm absolution-reverse-sm'
    let s_type = 'two'

    if (index % 3 == 0 || index == 0) {
      s_class1 = 'absolution-slide-50'
      s_class2 = ''
      s_type = 'one'
    }
    if ((index + 1) % 3 == 0) {
      s_class2 = 'absolution-card-sm'
      s_type = 'three'
    }
    let newobj = Object.assign({}, post, {
      tempType: s_type,
      classOne: s_class1,
      classTwo: s_class2,
    })
    latestPosts.push(newobj)
  })

  return (
    <section className="absolution-blog absolution-p-120-120">
      <div className="absolution-deco" style={{ top: 0, right: '30%' }} />
      <div className="container">
        <div className="row align-items-center absolution-mb-90">
          <div className="col-md-6 col-xl-6">
            <span className="absolution-suptitle absolution-suptitle-2 absolution-mb-30">
              {SectionData.subtitle}
            </span>
            <h2>{SectionData.title}</h2>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="absolution-adaptive-right absolution-mt-60-adapt">
              <div className="absolution-slider-nav">
                <div className="absolution-slider-btn-prev absolution-blog-prev">
                  <i className="fas fa-arrow-left" />
                  <span className="absolution-h6">Prev</span>
                </div>
                <div className="absolution-slider-btn-next absolution-blog-next">
                  <span className="absolution-h6">Next</span>
                  <i className="fas fa-arrow-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Swiper
          {...sliderProps.milBlogSlider}
          className="swiper-container absolution-blog-slider absolution-mb-90"
        >
          {latestPosts.map((item: any, key: any) => (
            <SwiperSlide className={`swiper-slide ${item.classOne}`}>
              <Link href="publication" className={`absolution-card ${item.classTwo}`}>
                {item.tempType == 'one' && (
                  <>
                    <div className="absolution-cover-frame">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="absolution-description">
                      <div className="absolution-card-title">
                        <h4 className="absolution-mb-20">{item.title}</h4>
                        <h6>
                          by: <span className="absolution-accent">{item.author}</span>
                        </h6>
                      </div>
                      <div className="absolution-card-text">
                        <p>{item.short}</p>
                      </div>
                    </div>
                  </>
                )}
                {item.tempType == 'two' && (
                  <>
                    <div className="absolution-description">
                      <div className="absolution-card-title">
                        <h4 className="absolution-mb-20">{item.title}</h4>
                      </div>
                      <div className="absolution-card-text">
                        <p>{item.short}</p>
                      </div>
                    </div>
                    <div className="absolution-cover-frame">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </>
                )}
                {item.tempType == 'three' && (
                  <>
                    <div className="absolution-cover-frame">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="absolution-description">
                      <div className="absolution-card-title">
                        <h4 className="absolution-mb-20">{item.title}</h4>
                      </div>
                      <div className="absolution-card-text">
                        <p>{item.short}</p>
                      </div>
                    </div>
                  </>
                )}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="row align-items-center">
          <div className="col-12">
            <Link href={SectionData.button.link} className="absolution-link">
              <span>{SectionData.button.label}</span>
              <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default LatestThinking
