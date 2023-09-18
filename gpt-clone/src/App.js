import "./App.css";
import gptLogo from "./assets/chatgpt.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
        <div className="upperSideTop">
          <img src={gptLogo}  alt="" className="logo" />
          <span className="brand">Black CodeX</span>
          </div>
          <button className="midBtn">
            <img src="" alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src="" alt="" />
              What is AI?
            </button>
            <button className="query">
              <img src="" alt="" />
              How to connect Ruby On Rails with React?
            </button>
            <button className="query">
              <img src="" alt="" />
              What is ORM?
            </button>
          </div>
        
        </div>
        <div className="upperside"></div>
        <div className="lowerside"></div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
