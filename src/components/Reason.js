function Reason({ image, text }) {
  return (
    <div className="reason">
      <img src={image} />
      <p>{text}</p>
    </div>
  );
}

export default Reason;
