import React from 'react'
import ContactForm from '@/src/components/ContactForm'
import PageBanner from '@/src/components/PageBanner'
import Layouts from '@/src/layouts/Layouts'
const Faq = () => {
  return (
    <Layouts>
      <PageBanner pageName={'FAQs'} pageTitle={'FAQs'} />
      {/* faq */}
      <section className="absolution-faqs absolution-p-0-120">
        <div
          className="absolution-deco"
          style={{ bottom: 0, left: '10%', transform: 'rotate(180deg)' }}
        />
        <div className="container">
          <div className="absolution-tabs">
            <input
              type="radio"
              name="tabs"
              id="tab1"
              defaultChecked="checked"
            />
            <label htmlFor="tab1">Information</label>
            <div className="absolution-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="absolution-up-font absolution-mb-30">
                    <span className="absolution-accent">Absolution Connects</span> The
                    Entire Organization From End To End.
                  </h3>
                  <p className="absolution-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem. Investigationes demonstraverunt
                    lectores legere me lius quod ii legunt saepius.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="absolution-accordion">
                    <h6>Information about Absolution</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>What are the benefits of using Absolution?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>How much does Absolution cost?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tab2" />
            <label htmlFor="tab2">Pricing Plans</label>
            <div className="absolution-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="absolution-up-font absolution-mb-30">
                    <span className="absolution-accent">Lorem ipsum</span> dolor sit
                    amet, consectetur adipisicing elit.
                  </h3>
                  <p className="absolution-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem. Investigationes demonstraverunt
                    lectores legere me lius quod ii legunt saepius.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="absolution-accordion">
                    <h6>How much does Absolution cost?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>What are the benefits of using Absolution?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>Information about Absolution</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>Lorem Ipsum, you need to be sure there</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tab3" />
            <label htmlFor="tab3">Data and Privacy</label>
            <div className="absolution-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="absolution-up-font absolution-mb-30">
                    <span className="absolution-accent">Lorem Ipsum</span> available,
                    but the majority have suffered
                  </h3>
                  <p className="absolution-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="absolution-accordion">
                    <h6>What are the benefits of using Absolution?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>How much does Absolution cost?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>Information about Absolution</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tab4" />
            <label htmlFor="tab4">Security</label>
            <div className="absolution-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="absolution-up-font absolution-mb-30">
                    <span className="absolution-accent">Aliquam aut natus</span>{' '}
                    perspiciatis corporis sunt alias cumques.
                  </h3>
                  <p className="absolution-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="absolution-accordion">
                    <h6>Information about Absolution</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>What are the benefits of using Absolution?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>How much does Absolution cost?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="absolution-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="absolution-panel">
                    <div className="absolution-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq end */}
      {/* contact */}
      {/* contact */}
      <ContactForm />
    </Layouts>
  )
}
export default Faq
