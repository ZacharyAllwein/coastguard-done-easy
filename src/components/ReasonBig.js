function ReasonBig({ title, primaryImage, text }) {
  return (
    <div className="reason-big">
      <h1>{title}</h1>
      <div className="body">
        <img src={primaryImage} alt={title} />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ReasonBig;
