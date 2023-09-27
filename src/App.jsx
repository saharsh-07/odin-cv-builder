import GeneralInformation from "./components/GeneralInformation";
import Experince from "./components/Experience";
import Education from "./components/Education";
import "./index.css"

function App() {
  return (
    <>
      <h1>CV Builder</h1>
      <div className="container">
        <h2>General Information</h2>
        <GeneralInformation />
      </div>
      <div className="container">
        <h2>Professional Experince</h2>
        <Experince/>
      </div>
      <div className="container">
        <h2>Education</h2>
        <Education />
      </div>
    </>
  );
}

export default App;
