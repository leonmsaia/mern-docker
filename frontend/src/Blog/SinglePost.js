import moment from 'moment';

export default function SinglePost({data}) {
  // Prepare Elements
  const Elements = data;
  return (
    <>
        {Elements.map((Element, index) => {
          return (
            <div key={index} className="col-12 col-sm-8 col-lg-4">
              <div className="card single-post">
                <a className="post-img" href={Element.link} target="_blank" rel="noreferrer">
                  <span className="content-date">{moment(Element.pubDate, 'ddd, DD MMM YYYY HH:mm:ss ZZ').format('DD/MM/YYYY')}</span>
                </a>
                <div className="card-body post-content">
                  <a href={Element.link} target="_blank" rel="noreferrer">
                    <h5 className="card-title content-title">{Element.title[0]}</h5>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
    </>
  )
}