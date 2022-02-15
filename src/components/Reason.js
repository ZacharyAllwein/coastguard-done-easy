function Reason({image, text}){

    return (
        <div className="reason-container">
            <div className="reason">
                <img src={image} />
                <p>{text}</p>
            </div>
            
        </div>
    )
}

export default Reason;