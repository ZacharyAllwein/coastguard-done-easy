import anchorWithWings from "../assets/anchorWithWings.png"

function Banner(){

    return (
        <div className="banner">
            <img src="anchor.jpg"/>
            <div className= "middle">
                <h1>Coastguard Done Easy</h1>
                <img src={anchorWithWings} />
            </div>
            <img src="anchor.jpg" />
        </div>
    )
}

export default Banner;