import { useState } from 'react'
import emailjs from 'emailjs-com'

const DefaultFooter = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleInputChange = (e: any) => {
    setEmail(e.target.value)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!email) {
      setError('Please enter a valid email address.')
      return
    }

    try {
      const templateParams = {
        to_email: email,
        // Aquí puedes agregar más datos como 'user_name': 'nombreDelUsuario'
      }

      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )
      alert(`Email submitted: ${response}`)
      console.log('Email submitted:', response)
      setSuccess(true)
      setEmail('')
      setError('')
    } catch (error) {
      console.error('Error to send email:', error)
      setError('Error to send email. Please try again or contact us directly.')
    }
  }
  return (
    <footer className="absolution-dark-bg">
      <img
        src="img/deco/map.png"
        alt="background"
        className="absolution-footer-bg"
      />
      <div className="container">
        <div className="absolution-footer-content absolution-p-120-90">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4 absolution-mb-30">
              <h2 className="absolution-light absolution-up-font absolution-mb-30">
                Absolution
              </h2>
              <p className="absolution-light-soft absolution-mb-30">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
              <a href="#." className="absolution-app-btn absolution-mb-5">
                <i className="fab fa-google-play" />
                <div className="absolution-app-text">
                  <span className="absolution-accent absolution-text-sm">
                    Available on the
                  </span>
                  <div className="absolution-h6">Google Play</div>
                </div>
              </a>
              <a href="#." className="absolution-app-btn">
                <i className="fab fa-apple" />
                <div className="absolution-app-text">
                  <span className="absolution-accent absolution-text-sm">
                    Download on the
                  </span>
                  <div className="absolution-h6">App Store</div>
                </div>
              </a>
            </div>
            <div className="col-xl-7 absolution-mt-60-adapt">
              <div className="row">
                <div className="col-lg-7 absolution-mb-30">
                  <h3 className="absolution-light absolution-up-font absolution-mb-30">
                    Join The{' '}
                    <span className="absolution-accent">Absolution</span> <br />
                    Experience
                  </h3>
                  <p className="absolution-light-soft">
                    Lorem ipsum dolor sit amet, consectetuer
                    <br /> adipiscing elit, sed diam nonummy.
                  </p>
                </div>
                <div className="col-lg-5 absolution-mb-30">
                  <form onSubmit={handleSubmit}>
                    <input
                      className="absolution-rounded-input absolution-text-center absolution-mb-5"
                      type="text"
                      placeholder="Your email address"
                      value={email}
                      onChange={handleInputChange}
                    />
                    <button className="absolution-button absolution-accent-bg absolution-fw">
                      <span>Subscribe Now</span>
                    </button>
                  </form>
                  {error && <p className="absolution-error-message">{error}</p>}
                  {success && (
                    <p className="success-message">
                      ¡We have received your email! We will contact you soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolution-divider absolution-light" />
        <div className="absolution-footer-links">
          <ul className="absolution-social absolution-light">
            <li className="absolution-adapt-links">
              <a href="#.">Facebook</a>
              <a href="#.">FB</a>
            </li>
            <li className="absolution-adapt-links">
              <a href="#.">Instagram</a>
              <a href="#.">IG</a>
            </li>
            <li className="absolution-adapt-links">
              <a href="#.">LinkedIn</a>
              <a href="#.">IN</a>
            </li>
            <li className="absolution-adapt-links">
              <a href="#.">Twitter</a>
              <a href="#.">TW</a>
            </li>
            <li className="absolution-adapt-links">
              <a href="#.">YouTube</a>
              <a href="#.">YT</a>
            </li>
          </ul>
          <ul className="absolution-additional-links absolution-light">
            <li>
              <a href="#.">Terms &amp; Condition</a>
            </li>
            <li>
              <a href="#.">Privacy Policy</a>
            </li>
            <li>
              <a href="#.">Sitemap</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="absolution-footer-bottom">
        <div className="container">
          <p className="absolution-text-sm absolution-light">
            © absolution 2024.
          </p>
          <p className="absolution-text-sm absolution-light">
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default DefaultFooter
