import React, { useState } from 'react'
import Content from '../../data/sections/contact.json'
import emailjs from 'emailjs-com'

const ContactSection = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = async (e: any) => {
    e.preventDefault()

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        {
          to_name: name,
          from_email: email,
          message: message,
          phone: phone,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )

      alert('Your message has been sent!')
      console.log('Your message has been sent:', response)
    } catch (error) {
      console.error('There was an error:', error)
    }
  }

  return (
    <section className="absolution-contact absolution-gradient-bg absolution-p-120-0">
      <div
        className="absolution-deco absolution-deco-accent"
        style={{ top: 0, right: '10%' }}
      />
      <div className="container">
        <h2 className="absolution-light absolution-mb-90">
          {Content.title.first}{' '}
          <span className="absolution-accent">{Content.title.second}</span>
        </h2>
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-lg-6">
              <div className="absolution-input-frame absolution-mb-30">
                <label>
                  <span className="absolution-light">Name</span>
                  <span className="absolution-accent">Required</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name Here"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="absolution-input-frame absolution-mb-30">
                <label>
                  <span className="absolution-light">Email Address</span>
                  <span className="absolution-accent">Required</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="absolution-input-frame absolution-mb-60">
                <label>
                  <span className="absolution-light">Phone</span>
                  <span className="absolution-light-soft">Optional</span>
                </label>
                <input
                  type="number"
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="absolution-input-frame absolution-mb-30">
                <label>
                  <span className="absolution-light">Message</span>
                  <span className="absolution-accent">Required</span>
                </label>
                <textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="absolution-button absolution-accent-bg absolution-fw"
              >
                <span>Send Message Now</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
