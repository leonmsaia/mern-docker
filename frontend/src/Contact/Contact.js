// Styles
import './Contact.css';

// Supplement Components
import SingleContactData from './SingleContactData'

export default function Contact() {
    return (
        <>
        <div className="lightbox-wrapper" id="contact" data-simplebar>
            <div className="container">
                
                <div className="lightbox-close">
                    <div className="close-btn" data-modal-close=""><span className="btn-line"></span></div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="lightbox-content">
                            
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading page-heading">
                                        <p className="section-description">Feel free to contact me anytimes</p>
                                        <h2 className="section-title">Get in Touch</h2>
                                        <div className="animated-bar"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-section single-section">
                                <div className="row">

                                    <div className="col-12 col-lg-7">
                                        <form className="contact-form" id="contact-form" action="php/contact.php">
                                            <h4 className="content-title">Message Me</h4>
                                            <div className="row">
                                                <div className="col-12 col-md-6 form-group">
                                                    <input className="form-control" id="contact-name" type="text" name="name" placeholder="Name" required="" />
                                                </div>
                                                <div className="col-12 col-md-6 form-group">
                                                    <input className="form-control" id="contact-email" type="email" name="email" placeholder="Email" required="" />
                                                </div>
                                                <div className="col-12 form-group">
                                                    <input className="form-control" id="contact-subject" type="text" name="subject" placeholder="Subject" required="" />
                                                </div>
                                                <div className="col-12 form-group form-message">
                                                    <textarea className="form-control" id="contact-message" name="message" placeholder="Message" rows="5" required=""></textarea>
                                                </div>
                                                <div className="col-12 form-submit">
                                                    <button className="btn button-main button-scheme" id="contact-submit" type="submit">Send Message</button>
                                                    <p className="contact-feedback"></p>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="col-12 col-lg-5">
                                        <div className="contact-info">
                                            <h4 className="content-title">Contact Info</h4>
                                            <p className="info-description">Always available for freelance work if the right project comes along, Feel free to contact me!</p>
                                            <ul className="list-unstyled list-info">
                                                <SingleContactData />
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}