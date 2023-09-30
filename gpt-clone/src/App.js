import "./App.css";
import {useState} from 'react'
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/user-icon.png";
import GPT from "./assets/chatgptLogo.svg";
import { sendMsgToApi } from "./openai";


function App() {
  const [input, setInput] = useState("")

  const handleSend = async () => {
    const res = await sendMsgToApi(input);
    console.log(res)
  }
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
            <button className="query">
              <img src={msgIcon} alt="" />
              What is JQUERY?
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
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={userIcon} alt="" />
            <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi fugit in veritatis hic laudantium. Placeat, rerum amet quidem eligendi dolor a nam, quisquam natus deserunt corrupti accusamus similique. Temporibus.</p>
          </div>
          <div className="chat bot ">
            <img className="chatImg" src={GPT} alt="" />
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam libero inventore fuga non numquam. Doloremque, corporis impedit voluptates vel atque amet illum aliquid dignissimos saepe ipsum quo. Itaque in fugit cumque nulla, modi aperiam nobis voluptatibus laboriosam aut omnis explicabo quisquam culpa voluptates saepe, id est unde possimus consectetur dolor dolorum. Quidem debitis eius eveniet illo ut ea nobis officia placeat fuga optio! Ad quidem id impedit nulla sapiente? Reprehenderit ratione nihil a beatae culpa eos alias doloribus quas assumenda cumque eligendi quidem laboriosam est non quisquam suscipit cum autem, nam sed obcaecati explicabo laborum animi. Perspiciatis, necessitatibus similique!className="chatImg" </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" value = {input} onChange ={(e)=>{setInput(e.target.value)}}name="" id="" /><button className="send" onClick={handleSend}><img src={sendBtn}alt="Send" /></button>
          </div>
          <p>Black CodeX may produce inacurrate results</p>
        </div>
      </div>
    </div>
  );
}

export default App;
