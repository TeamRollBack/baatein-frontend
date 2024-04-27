import { useSelector } from "react-redux";

export default function ChatWindow() {
  const chatName = useSelector(state => state.chatWindow.chatName);
  return (
    <>
      <div className="relative w-full h-screen flex justify-start items-center flex-col">
        
        <div className="fixed right-0 w-[80%] h-[7vh] flex justify-center items-center border-2 border-orange-500">
          <div className="w-[5%] ml-5">Img</div>
          <div className="w-[20%]">{chatName}</div>
          <div className="w-[75%] flex justify-end items-end mr-5">three dot</div>
        </div>

        <div className="relative w-full h-[85%] flex justify-center items-center border-2 border-red-500 mt-[4%]">Chatwindow</div>

        <div className="w-[80%] fixed bottom-0 right-0 flex justify-center items-center border-2 border-pink-500 py-3">
        <div>
          Typing
        </div>
        </div>
      </div>
    </>
  );
}
