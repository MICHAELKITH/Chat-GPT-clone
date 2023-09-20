import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
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
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="" />
              What is AI?
            </button>
            <button className="query">
              <img src={msgIcon} alt="" />
              What is Active Records?
            </button>
            <button className="query">
              <img src={msgIcon} alt="" />
              What is ORM?
            </button>
          </div>
        
        </div>
        {/* <div className="upperside"></div> */}
        <div className="lowerside">
          <div className="listItems">
            <img src={home} alt="" className="listItemImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats"></div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" name="" id="" /><button className="send"><img src={sendBtn}alt="Send" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
