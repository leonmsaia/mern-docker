// Styles
import './About.css';

// Supplement Components
import SingleService from './SingleService'
import SingleTestimonial from './SingleTestimonial'
import SinglePlan from './SinglePlan'

export default function About(data) {
    // Prepare Elements
    const Data = data.data.content.about;
    const Artist = data.data.content.artist;
    const SocialNetworks = data.data.social;

    return (
      <>
        <div className="lightbox-wrapper" id="about" data-simplebar>
            <div className="container">
                <div className="lightbox-close">
                    <div className="close-btn" data-modal-close="">
                        <span className="btn-line"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="lightbox-content">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-heading page-heading">
                                        <p className="section-description">Get to know me</p>
                                        <h2 className="section-title">{Data.title}</h2>
                                        <div className="animated-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="info-section single-section">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-5 info-img">
                                        <img className="img-fluid img-thumbnail" src="img/info-img.jpg" alt="About Picture" />
                                    </div>
                                    <div className="col-12 col-lg-7 info-content">
                                        <div className="content-block">
                                            <h2 className="content-subtitle">{Data.subtitle}</h2>
                                            <h6 className="content-title">{Data.presentation}</h6>
                                            <div className="content-description">
                                                <p>{Data.bio}</p>
                                            </div>
                                            <address className="content-info">
                                                <div className="row">
                                                    <div className="col-12 col-md-6 single-info">
                                                        <span>Name:</span>
                                                        <p>{Artist.name}</p>
                                                    </div>
                                                    <div className="col-12 col-md-6 single-info">
                                                        <span>Email:</span>
                                                        <p><a href={ "mailto:" + (Artist.email || "") }>{Artist.email}</a></p>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-12 col-md-6 single-info">
                                                        <span>Age:</span>
                                                        <p>{Artist.age}</p>
                                                    </div>
                                                    <div className="col-12 col-md-6 single-info">
                                                        <span>From:</span>
                                                        <p>{Artist.from}</p>
                                                    </div>
                                                </div>
                                            </address>
                                            <div className="d-block d-sm-flex align-items-center">
                                                <a className="btn content-download button-main button-scheme" href="#0" role="button">Download CV</a>
                                                <ul className="list-unstyled list-inline content-follow">
                                                    {SocialNetworks.map((SocialNetwork, index) => {
                                                        return (
                                                            <li className="list-inline-item" key={index}>
                                                                <a href={SocialNetwork.url}>
                                                                    <i className={ "icon ion-logo-" + (SocialNetwork.name || "") }></i>
                                                                </a>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="services-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <p className="section-description">Services i offer to my clients</p>
                                            <h2 className="section-title">My Services</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <SingleService data ={ Data.services } />
                                </div>
                            </div>
                            <div className="testimonials-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <p className="section-description">What my clients think about me</p>
                                            <h2 className="section-title">Testimonials</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-slider">
                                    <SingleTestimonial data ={ Data.testimonials } />
                                </div>
                            </div>
                            <div className="pricing-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <p className="section-description">Get started with my services</p>
                                            <h2 className="section-title">Choose a Plan</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row align-items-center">
                                    <SinglePlan data ={ Data.plans } />
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