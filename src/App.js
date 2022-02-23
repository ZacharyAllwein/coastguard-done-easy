import Banner from "./components/Banner.js";
import Reason from "./components/Reason.js";
import jobs from "./data/jobs.js";
import { useRef } from "react";

let reasonActive = false;
function App() {
  let placeholder = useRef(null);
  let main = useRef(null);

  function handleClick(e) {
    let element = e.target;
    let pH = placeholder.current;

    if (!element.classList.contains("reason")) {
      while (element.parentNode) {
        element = element.parentNode;
        if (
          element.classList.contains("reason") ||
          element.classList.contains("reason-big")
        ) {
          break;
        } else if (element.classList.contains("root")) {
          break;
        }
      }
    }

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
    <div className="root">
      <div ref={placeholder} />
      <div ref={main} onClick={(e) => handleClick(e)}>
        <Banner />
        <p className="blog">
          Everybody can find a place in the coastguard. No matter your
          interests, or what you want to do. We have a job for you. Joining the
          coastguard will bring you amazing opputunities and lead you to a life
          you didn't know you could have. Join Today!
        </p>
        <div className="reasons-grid">
          {Object.keys(jobs).map((title, index) => {
            return (
              <Reason
                image={jobs[title].primaryImage}
                title={title}
                text={jobs["Aviation Maintenance Technician"].text}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
