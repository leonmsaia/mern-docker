export default function SinglePortfolio() {
  return (
    <>
      <div className="single-item col-6 col-lg-4 design">
          <a className="portfolio-item" href="img/item-1.jpg" data-lightbox>
              <div className="portfolio-wrapper">
                  <img className="img-fluid" alt="Item" src="img/item-1.jpg" />
                  <div className="item-content">
                      <h6 className="content-title">Label Tag Mockup</h6><span className="content-more">More Info</span>
                  </div>
              </div>
          </a>
      </div>
    </>
  )
}