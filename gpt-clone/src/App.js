import "./App.css";
import gptLogo from "./assets/chatgpt.svg"

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSideTop">
          <img src="" alt="" className="logo" />
          <span className="btand">Black CodeX</span>
          <button className="midBtn"><img src={gptLogo} alt="" className="addBtn" /></button>
          <div className="upperSideBottom">
            <button className="query"><img src="" alt="" />How To Join Microverse</button>
            <button className="query"><img src="" alt="" />What is AI</button>
          </div>
        </div>
        <div className="upperside">

        </div>
        <div className="lowerside">

        </div>
        <div className='main'>     
      </div>
      </div>
    </div>
  );
}

export default App;
