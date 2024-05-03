// import ChatWindow from "../Chat/ChatWindow";
// import Contacts from "../Contacts/Contacts";
// import Settings from "../Settings";
// import "./Home.css"

// export default function Home() {
//     return (
//     <div className="Home-main">
//         <div className="Home-ChatWindow">
//             <ChatWindow />
//         </div>
//         <div className="Home-Contacts">
//             <Contacts/>
//         </div>
//         <div className="Home-Settings">
//             <Settings />
//         </div>

//     </div>
//     )
// }


import { useEffect } from "react";
import ChatWindow from "../Chat/ChatWindow";
import Contacts from "../Contacts/Contacts";
import Settings from "../Settings";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowChatWindow } from "../../features/chatWindowSlice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setShowChatWindow("Baatein"));
  }, []);

  return (
    <>
      <div className="relative w-[100%] h-flex-1 flex">
        <div className="w-[20%] h-flex-1 border-2 border-purple-700 pb-5">
          <Contacts />
        </div>
        <div className="fixed right-0 w-[80%] h-screen border-2 border-purple-700">
          <ChatWindow />
        </div>
      </div>
      {/* <Settings /> */}
      {/* <button onClick={()=>{navigate('/signIn')}}>SignIn</button> */}
    </>
  );
}

export default Home;