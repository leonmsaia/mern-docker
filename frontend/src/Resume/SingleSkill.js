export default function SingleSkill({data}) {
    // Prepare Elements
    const Elements = data;
    // console.log(data);
    return (
      <>
        {Elements.map((Element, index) => {
          return (
            <div className="single-skill" data-percentage={ Element.amount } key={index}>
              <div className="skill-info"><span className="skill-name">{ Element.title }</span><span className="skill-percentage"></span></div>
              <div className="progress skill-progress">
                <div className="progress-bar" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          );
        })}
      </>
    )
}