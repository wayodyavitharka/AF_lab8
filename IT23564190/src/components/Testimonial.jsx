function Testimonial({ quote, name, role, photo }) {
  return (
    <article className="testimonial">
      <img src={photo} alt={name} className="testimonial-photo" />
      <p className="testimonial-quote">“{quote}”</p>
      <h4>{name}</h4>
      {role && <p className="testimonial-role">{role}</p>}
    </article>
  );
}

export default Testimonial;