export default function SingleService(data) {
  // Prepare Elements
  const Services = data.data;
  return (
    <>
      {Services.map((Service, index) => {
        return (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
              <div className="single-service">
                  <i className="icon service-icon ion-logo-css3"></i>
                  <h6 className="service-title">{Service.name}</h6>
                  <p className="service-description">{Service.description}</p>
              </div>
          </div>
        );
      })}
    </>
  )
}