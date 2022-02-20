import Banner from "./components/Banner.js";
import Reason from "./components/Reason.js";
import { useRef } from "react";

let reasonActive = false;
function App() {
  let placeholder = useRef(null);
  let main = useRef(null);

  function handleClick(e) {
    let element = e.target;
    let pH = placeholder.current;

    if (
      element.parentNode.classList.contains("reason") ||
      element.parentNode.classList.contains("reason-big")
    )
      element = element.parentNode;

    if (!reasonActive) {
      if (element.classList.contains("reason")) {
        pH.innerHTML = element.innerHTML;

        pH.classList.add("reason-big");
        main.current.classList.add("blur");

        reasonActive = true;
      }
    } else if (reasonActive && !element.classList.contains("reason-big")) {
      pH.innerHTML = "<div />";

      pH.classList.remove("reason-big");
      main.current.classList.remove("blur");

      reasonActive = false;
    }
  }
  return (
    <div>
      <div ref={placeholder} />
      <div ref={main} onClick={(e) => handleClick(e)}>
        <Banner />
        <div className="reasons-grid">
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
      </div>
    </div>
  );
}

export default App;
