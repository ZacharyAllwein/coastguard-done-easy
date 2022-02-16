function Reason({ image, text }) {
  return (
    <div className="reason-container">
      <img src={image} />
      <p>{text}</p>
    </div>
  );
}

export default Reason;
