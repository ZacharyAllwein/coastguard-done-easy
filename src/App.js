import Banner from "./components/Banner.js";
import Reason from "./components/Reason.js";

let activeReason = null;

function App() {

  function handleClick(e){

    let element = e.target

    if(activeReason === null){
      if(element.parentNode.classList.contains("reason")) element = element.parentNode;

      if(element.classList.contains("reason")){
        element.classList.remove("reason")
        element.classList.add("reason-big")
  
        activeReason = element
      }
    }
    
  }
  return (
    <>
      <Banner />
      <div className="reasons-grid" onClick={(e) => handleClick(e)}>
        <Reason
          image="anchor.jpg"
          text="Lorum Ipsum Dolor I don't know waht to put here this is an experiment, wulllllll. HOw are you doing today"
        />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
        <Reason image="anchor.jpg" text="Lorum Ipsum Dolor" />
      </div>
    </>
  );
}

export default App;
