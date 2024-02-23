export default function SingleExperience({data}) {
    // Prepare Elements
    const Elements = data;
    return (
        <>
            {Elements.map((Element, index) => {
                return (
                    <div className="resume-item" key={index}>
                        <span className="item-arrow"></span>
                        <h5 className="item-title">{Element.degree}</h5>
                        <span className="item-details">{Element.institution} / {Element.time}</span>
                        <p className="item-description">{Element.comment}</p>
                    </div>
                );
            })}
        </>
    )
}