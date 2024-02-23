export default function SinglePlan(data) {
  // Prepare Elements
  const Plans = data.data;
  return (
    <>
      {Plans.map((Plan, index) => {
          return (
            <div className="col-lg-4" key={index}>
                <div className="single-plan mb-4 mb-sm-5">
                    <i className="plan-icon icon ion-md-egg"></i>
                    <h3 className="plan-type">{Plan.name}</h3>
                    <h2 className="plan-price">{Plan.amount}/{Plan.period}</h2>
                    <ul className="list-unstyled plan-list">
                        { Plan.includes.map((Include, index) => {
                          return (
                            <li key={index}>{Include}</li>
                          );
                        })}
                    </ul>
                    <a className="btn button-main button-scheme plan-btn" href={Plan.contact} role="button">Empezar</a>
                </div>
            </div>
          );
      })}
    </>
  )
}