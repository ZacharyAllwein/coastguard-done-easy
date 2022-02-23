import Banner from "./components/Banner.js";
import Reason from "./components/Reason.js";
import ReasonBig from "./components/ReasonBig.js"
import jobs from "./data/jobs.js";
import { useRef, useState } from "react";

function App() {
  let main = useRef(null);

  const [reasonBigStates, setReasonBigStates] = useState(null)

  function handleClick(e) {
    let element = e.target;

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

    if (!reasonBigStates) {
      if (element.classList.contains("reason")) {

        const job = element.id;

        setReasonBigStates({title: job, primaryImage: jobs[job].primaryImage, text: jobs[job].text})

        main.current.classList.add("blur");

        // reasonActive = true;
      }
    } else if (reasonBigStates && !element.classList.contains("reason-big")) {

      main.current.classList.remove("blur");
      setReasonBigStates(null)

    }
  }
  
  return (
    <div className="root">
      {reasonBigStates && <ReasonBig title={reasonBigStates.title} primaryImage={reasonBigStates.primaryImage} text={reasonBigStates.text} />}
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
                title={title}
                image={jobs[title].primaryImage}
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
