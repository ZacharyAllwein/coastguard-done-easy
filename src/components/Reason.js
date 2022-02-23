function Reason({ title, image, text }) {
  return (
    <div className="reason" id={title}>
      <h1>{title}</h1>
      <div className="body">
        <img src={image} alt={title} />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Reason;
