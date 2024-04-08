import { useState } from "react";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [services, setServices] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const sendEmail = async (e: any) => {
    e.preventDefault();

    //const formValues = {
    //  to_name: name,
    //  from_name: `${name} ${lastName}`,
    //  from_email: email,
    //  message: message,
    //  phone: phone,
    //  company: company,
    //  role: role,
    //  services: services,
    //};

    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      );

      alert("Your message has been sent!");
      console.log("Your message has been sent:", response);
    } catch (error) {
      console.error("There was an error:", error);
    }
  };

  const handleContactChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "role":
        setRole(value);
        break;
      case "services":
        setServices(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }

  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).filter((file): file is File =>
        [
          "application/pdf",
          "application/msword",
          "image/jpeg",
          "image/png",
        ].includes(file.type)
      );
      const totalFiles = selectedFiles.concat(newFiles).slice(0, 5);
      setSelectedFiles(totalFiles);
    }
  };

  const removeFile = (index: any) => {
    const newFiles = selectedFiles.filter((_: any, i: any) => i !== index);
    setSelectedFiles(newFiles);
  };

  return (
    <Layouts>
      <PageBanner
        pageName={"Contact Us"}
        pageTitle={"Let’s discuss your opportunity"}
      />
      {/* contact */}
      <section className="absolution-contact absolution-p-120-0">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-8 col-xl-8 absolution-mb-120">
              <form onSubmit={sendEmail}>
                <h4 className="absolution-mb-60">
                  <span className="absolution-accent">01.</span> Tell Us About
                  Yourself
                </h4>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6 absolution-dark">
                        <span>First Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="John"
                        name="name"
                        required
                        value={name}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6">
                        <span>Last Name</span>
                      </label>
                      <input 
                        type="text" 
                         placeholder="Jones" 
                          name="lastName"
                          required
                          value={lastName}
                          onChange={handleContactChange}
                         />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6">
                        <span>Email Address</span>
                      </label>
                      <input
                        type="email"
                        placeholder="doe@mydomain.com"
                        name="email"
                        required
                        value={email}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6">
                        <span>Phone</span>
                      </label>
                      <input
                        type="number"
                        placeholder="Enter your phone number"
                        name="phone"
                        required
                        value={phone}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6 absolution-dark">
                        <span>Company</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your company name"
                        name="company"
                        required
                        value={company}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 absolution-mb-30">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6 absolution-dark">
                        <span>Role</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your role"
                        name="role"
                        required
                        value={role}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                </div>
                <h4 className="absolution-mb-60">
                  <span className="absolution-accent">02.</span> What Can We
                  Help You With?
                </h4>
                <div className="row">
                  <div className="col-lg-6 absolution-mb-30">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6 absolution-dark">
                        <span>Product Design</span>
                      </label>
                      <select
                        name="services"
                        value={services}
                        required
                        onChange={handleContactChange}
                      >
                        <option value="">Select a Service</option>
                        <option value="productDesign">Product Design</option>
                        <option value="webDevelopment">Web Development</option>
                        <option value="webDesign">Web Design</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h4 className="absolution-mb-60">
                  <span className="absolution-accent">03.</span> Tell Us About
                  Your Project
                </h4>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6">
                        <span>Project Description</span>
                      </label>
                      <textarea
                        placeholder="Your Message"
                        className="absolution-shortened"
                        name="message"
                        required
                        value={message}
                        onChange={handleContactChange}
                      />
                    </div>
                  </div>
                  {/*<div className="col-lg-12">
                    <div className="absolution-attach-frame absolution-dark absolution-mb-30">
                      <i className="fas fa-paperclip" />
                      <label className="absolution-custom-file-input">
                        <span>Attach your file</span>
                        <input
                          type="file"
                          id="absolution-file-input"
                          accept="application/pdf,.pdf,application/msword,.doc,image/jpeg,.jpg,image/png,.png"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="absolution-text-sm absolution-light-soft">
                        up to 20MB
                      </p>
                    </div>
                    {/*{selectedFiles &&
                      selectedFiles.map((file: any, index: any) => (
                        <div key={index} className="file-display">
                          <p>{file.name}</p>
                          <button onClick={() => removeFile(index)}>
                            Remove
                          </button>
                        </div>
                      ))}
                  </div>*/}
                  {/*<div className="col-lg-6 absolution-mb-30">
                    <div className="absolution-input-frame absolution-dark-input absolution-mb-30">
                      <label className="absolution-h6 absolution-dark">
                        <span>Project Budget</span>
                      </label>
                      <input type="number" placeholder={"123"} />
                    </div>
                </div>*/}
                  <div className="col-lg-12">
                    <button
                      
                      className="absolution-button absolution-border absolution-fw"
                    >
                      <span
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "1.2rem",
                        }}
                      >Submit Now</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-xl-3 absolution-mb-120">
              <div className="absolution-mb-60">
                <h5 className="absolution-list-title absolution-mb-30">
                  Support Request
                </h5>
                <p className="absolution-mb-20">
                  Our experts are ready to answer your questions.
                </p>
                <Link
                  href="contact"
                  className="absolution-link absolution-link-sm"
                >
                  <span>Support Now</span>
                  <i className="fas fa-arrow-right" />
                </Link>
              </div>
              <div className="absolution-divider absolution-mb-60" />
              <div className="absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/8.svg" alt="icon" />
                </div>
                <h5 className="absolution-list-title absolution-mb-30">
                  Need Help?
                </h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="absolution-mb-60">
                <div className="absolution-icon-frame absolution-icon-frame-md absolution-icon-bg absolution-mb-30">
                  <img src="img/icons/md/9.svg" alt="icon" />
                </div>
                <h5 className="absolution-list-title absolution-mb-30">
                  Needs More Info?
                </h5>
                <p>
                  For technical questions or billing questions, please contact
                  Customer Care.
                </p>
              </div>
              <div className="absolution-divider absolution-mb-60" />
              <Link
                href="contact"
                className="absolution-link absolution-link-sm absolution-mb-15"
              >
                <span>Legality Guide</span>
                <i className="fas fa-arrow-right" />
              </Link>
              <br />
              <Link
                href="contact"
                className="absolution-link absolution-link-sm"
              >
                <span>Security Center</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* contact end */}
      {/* map */}
      <div>
        <div className="absolution-map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.289421122936!2d-74.0577166!3d40.7107384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250aee3ee6da7%3A0xe8a316c6c836011f!2sBuddy's%20JC!5e0!3m2!1sen!2sua!4v1682071433844!5m2!1sen!2sua"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="container" />
      </div>
      {/* map end */}
      {/* contact info */}
      <section className="absolution-p-120-60">
        <div className="container">
          <div className="row">
            <div className="col-xl-4">
              <div className="absolution-mb-60">
                <h4 className="absolution-mb-30">United States</h4>
                <h5 className="absolution-list-title absolution-mb-15">
                  New York
                </h5>
                <p className="absolution-mb-30">
                  525, North Tryon Street, Suite 1600, Charlotte, NC 28202-0213
                </p>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <h6 className="absolution-mb-15">
                  <span className="absolution-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="absolution-accent">usa</span>
                  .support@mydomain.com
                </h6>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-mb-60">
                <h4 className="absolution-mb-30">Germany</h4>
                <h5 className="absolution-list-title absolution-mb-15">
                  Berlin
                </h5>
                <p className="absolution-mb-30">
                  501, Satyamev Eminence, Science City Road, Ahmedabad, Gujarat
                  - 380060
                </p>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <h6 className="absolution-mb-15">
                  <span className="absolution-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="absolution-accent">germany</span>
                  .support@mydomain.com
                </h6>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="absolution-mb-60">
                <h4 className="absolution-mb-30">France</h4>
                <h5 className="absolution-list-title absolution-mb-15">
                  Paris
                </h5>
                <p className="absolution-mb-30">
                  397 Bedford Highway, Suite 323 Halifax NS B3M 2L3 Science City
                  Road
                </p>
                <div className="absolution-divider absolution-divider-left absolution-mb-30" />
                <h6 className="absolution-mb-15">
                  <span className="absolution-accent">+ 90</span> 700 300 000
                </h6>
                <h6>
                  <span className="absolution-accent">france</span>
                  .support@mydomain.com
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
};
export default Contact;
