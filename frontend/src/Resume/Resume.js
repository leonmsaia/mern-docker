// Styles
import './Resume.css';

// Supplement Components
import SingleSkill from './SingleSkill';
import SingleExperience from './SingleExperience';

export default function Resume(data) {
    // Prepare Elements
    const Data = data.data.content.resume;

    return (
        <>
        <div className="lightbox-wrapper" id="resume" data-simplebar>
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
                                        <p className="section-description">Check out my Resume</p>
                                        <h2 className="section-title">Resume</h2>
                                        <div className="animated-bar"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume-section single-section">
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="col-block education">
                                            <h3 className="col-title">Education</h3>
                                            <SingleExperience data={ Data.education } />
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="col-block experience">
                                            <h3 className="col-title">Experience</h3>
                                            <SingleExperience data={ Data.experience } />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="skills-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <p className="section-description">My level of knowledge in some tools</p>
                                            <h2 className="section-title">My Skills</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <h3 className="col-title">Development</h3>
                                        <SingleSkill data={ Data.skills[0].development } />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h3 className="col-title">Corporative</h3>
                                        <SingleSkill data={ Data.skills[0].corporative } />                      
                                    </div>
                                </div>
                            </div>
                            <div className="video-section single-section">
                                <div className="row align-items-center">
                                    <div className="col-12 col-lg-6 content-part">
                                        <h3 className="video-title">Take a tour of my office</h3>
                                        <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia cum quasi assumenda culpa praesentium consectetur voluptatibus expedita. Voluptatem tempore, aspernatur rem facilis, distinctio nemo! Odio velit, nemo dolorem
                                            voluptas!</p>
                                        <p className="video-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium qui aspernatur unde mollitia, in laborum.</p>
                                    </div>
                                    <div className="col-12 col-lg-6 video-part">
                                        <a className="media-lightbox" href="https://www.youtube.com/watch?v=doteMqP6eSc" data-lightbox>
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <div className="embed-responsive-item element-cover-bg">
                                                    <span className="play-wrapper"><i className="icon ion-md-play"></i></span>
                                                </div>
                                            </div>
                                        </a>
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