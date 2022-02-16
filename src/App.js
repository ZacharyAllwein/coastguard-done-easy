import Banner from "./components/Banner.js";
import Reason from "./components/Reason.js";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
