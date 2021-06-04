import "./style.css";

const Section = (props) => (
  <section className="section">
    <div className="section__box">
      <h2 className="section__title">{props.title}</h2>
      {props.extraContent}
    </div>
    {props.body}
  </section>
);

export default Section;
