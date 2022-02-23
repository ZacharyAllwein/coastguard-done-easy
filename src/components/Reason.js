function Reason({ image, text, title }) {
  return (
    <div className="reason">
      <h1>{title}</h1>
      <div className="body">
        <img src={image} alt={title} width="10vw" height="auto" />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Reason;
