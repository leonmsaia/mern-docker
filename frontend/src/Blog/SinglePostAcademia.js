export default function SinglePostAcademia({data}) {
  // Prepare Elements
  const Elements = data;
  return (
    <>
        {Elements.map((Element, index) => {
          return (
            <div key={index} className="col-12 col-sm-8 col-lg-4">
              <div className="card single-post">
                <a className="post-img" href={Element.url} target="_blank" rel="noreferrer">
                  <span className="content-date">Academia.edu</span>
                </a>
                <div className="card-body post-content">
                  <a href={Element.url} target="_blank" rel="noreferrer">
                    <h5 className="card-title content-title">{Element.title}</h5>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </>
  )
}