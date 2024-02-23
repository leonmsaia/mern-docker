// Styles
import './Portfolio.css';

// Supplement Components
import SinglePortfolio from './SinglePortfolio'

export default function Portfolio() {
    return (
        <>
        <div className="lightbox-wrapper" id="portfolio" data-simplebar>
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
                                        <p className="section-description">Showcasing some of my best work</p>
                                        <h2 className="section-title">Portfolio</h2>
                                        <div className="animated-bar"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="portfolio-section single-section">
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="list-inline filter-control" role="group" aria-label="Filter Control">
                                            <li className="list-inline-item tab-active" data-filter="*">All</li>
                                            <li className="list-inline-item" data-filter=".brand">Brand</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-grid row">
                                    <SinglePortfolio />
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