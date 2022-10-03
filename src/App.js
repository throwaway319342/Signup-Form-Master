import logo from "./logo.svg";
import "./App.css";
import SignUpForm from "./components/SignUpForm";
import InformationCard from "./components/InformationCard";

function App() {
  return (
    <div className="page__container">
      <div className="left__column">
        <div className="left__column__header">
          <h1>Learn to code by watching others</h1>
        </div>
        <div className="left__column__bio">
          <p>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
      </div>
      <div className="right__column">
        <InformationCard></InformationCard>
        <SignUpForm></SignUpForm>
      </div>
    </div>
  );
}

export default App;
