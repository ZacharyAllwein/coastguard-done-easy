function Reason({ image, text, title }) {
  return (
    <div className="reason">
      <h1>{title}</h1>
      <div className="body">
        <img src={image} alt={title} />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Reason;
