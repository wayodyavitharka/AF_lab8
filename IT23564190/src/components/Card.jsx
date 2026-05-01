function Card({ image, title, description, tag, price }) {
  return (
    <article className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        {tag && <span className="card-tag">{tag}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        {price && <strong className="card-price">{price}</strong>}
      </div>
    </article>
  );
}

export default Card;