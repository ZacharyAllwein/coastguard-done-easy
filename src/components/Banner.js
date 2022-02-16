import anchorWithWings from "../assets/anchorWithWings.png"

function Banner(){

    return (
            <div className= "banner">
                <h1>Coastguard Done Easy</h1>
                <img src={anchorWithWings} />
                <h2>Ride Tides to Save Lives</h2>
            </div>
    )
}

export default Banner;