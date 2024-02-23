export default function SingleTestimonial(data) {
  // Prepare Elements
  const Testimonials = data.data;
  return (
    <>
      {Testimonials.map((Testimonial, index) => {
          return (
            <div className="slider-item"  key={index}>
              <div className="single-review swiper-slide">
                  <div className="review-header d-flex justify-content-between">
                      <div className="review-client">
                          <div className="media">
                              <img className="img-fluid rounded-circle client-avatar" src={Testimonial.path} alt="Client" />
                              <div className="client-details">
                                  <h6 className="client-name">{Testimonial.name}</h6>
                                  <span className="client-role">{Testimonial.position}</span>
                              </div>
                          </div>
                      </div>
                      <i className="icon ion-md-quote review-icon"></i>
                  </div>
                  <p className="review-content">{Testimonial.comment}</p>
              </div>
          </div>
          );
      })}
    </>
  )
}