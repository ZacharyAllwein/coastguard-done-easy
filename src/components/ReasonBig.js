function ReasonBig({ title, imageStart, text }) {
  console.log(imageStart);
  return (
    <div className="reason-big">
      <h1>{title}</h1>
      <div className="body">
        <img src={imageStart.replace("?", "1")} alt={title} />
        <p>{text}</p>
      </div>
      <div className="gallery">
        {[2, 3, 4].map((value) => {
          return (
            <img
              src={imageStart.replace("?", `${value}`)}
              key={value}
              alt={`${title}${value}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReasonBig;
