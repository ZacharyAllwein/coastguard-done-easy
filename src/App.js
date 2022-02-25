import Banner from "./components/Banner.js";
import Reason from "./components/Reason.js";
import ReasonBig from "./components/ReasonBig.js";
import jobs from "./data/jobs.js";
import { useRef, useState } from "react";

function App() {
  let main = useRef(null);

  const [reasonBigStates, setReasonBigStates] = useState(null);

  function handleClick(e) {
    let element = e.target;

    if (!element.classList.contains("reason")) {
      while (
        !(
          element.classList.contains("reason") ||
          element.classList.contains("reason-big") ||
          element.classList.contains("root")
        )
      )
        element = element.parentNode;
    }

    if (!reasonBigStates) {
      if (element.classList.contains("reason")) {
        const job = element.id;

        setReasonBigStates({
          title: job,
          imageStart: jobs[job].imageStart,
          text: jobs[job].text,
        });

        main.current.classList.add("blur");
      }
    } else if (reasonBigStates && !element.classList.contains("reason-big")) {
      main.current.classList.remove("blur");
      setReasonBigStates(null);
    }
  }

  return (
    <div className="root">
      {reasonBigStates && (
        <ReasonBig
          title={reasonBigStates.title}
          imageStart={reasonBigStates.imageStart}
          text={reasonBigStates.text}
        />
      )}
      <div ref={main} className="main" onClick={(e) => handleClick(e)}>
        <Banner />
        <p className="blog">
          Everybody can find a place in the coastguard. No matter your
          interests, or what you want to do. We have a job for you. Joining the
          coastguard will bring you amazing opportunities and lead you to a life
          you didn't know you could have. Join Today!
        </p>
        <div className="reasons-grid">
          {Object.keys(jobs).map((title, index) => {
            return (
              <Reason
                title={title}
                image={jobs[title].imageStart.replace("?", "1")}
                text={jobs[title].blurb}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <a
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        className="rick-roll"
      >
        Interested in joining? Take this Coast Guard aptitude test!
      </a>
    </div>
  );
}

export default App;
