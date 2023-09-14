const Book = ({ author, title, imgSrc, imgAlt, children, id, index }) => {
  return (
    <article className="book">
      <img src={imgSrc} alt={imgAlt} />
      <h2>{title}</h2>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}
      >
        {author}
      </h4>
      <span className="index"># {index + 1}</span>
    </article>
  )
}

export default Book
