// contact.jsx
import { useSelector } from "react-redux";
import { homeIcons } from "../IconArray";
import { ContactInfo } from "../DummyData/ContactData";
import { useDispatch } from "react-redux";
import { setChatName } from "../../features/chatWindowSlice";

export default function Contacts() {
  const dispatch=useDispatch()
  const chatWindow = useSelector((state) => state.chatWindow);

  console.log("this is the chatwindow value->", chatWindow);

  return (
    <>
      <div>
        <div className="flex justify-center items-center flex-col">
          <div>Chat</div>

          <div className="w-full flex justify-center items-center mt-5">
            <div className="w-full flex justify-center items-center">
              {/* <input
                className={`search w-64 border border-gray-500 block py-2 px-4 rounded-lg bg-transparent bg-no-repeat bg-left bg-${homeIcons.searchIcon} bg-contain bg-20`}
                type="search"
                placeholder="Search..."
              /> */}
              <input
                className=""
                type="search"
                placeholder="Search..."
                style={{
                  width: "90%",
                  border: "1px solid #555",
                  borderRadius: "2rem",
                  display: "block",
                  padding: "9px 4px 9px 40px",
                  background: `transparent url(${homeIcons.searchIcon}) no-repeat 13px`,
                  backgroundSize: "1rem 1rem",
                }}
              />
            </div>
          </div>

          <div className="w-full flex justify-start">
            <div className="w-full flex flex-col justify-start">
              {ContactInfo.map((contact, index) => (
                <div key={index} className="w-full my-1 shadow-xl border-2 border-purple-400 cursor-pointer" onClick={()=>{dispatch(setChatName(contact.name))}}>
                  {/* Render each contact information here */}
                  <div className="w-full flex justify-start items-center">
                    <div className="w-[5rem] flex justify-center items-center my-2">Img</div>
                    <div className="w-full">
                      <div className="w-full flex justify-between items-stretch">
                        <p>{contact.name}</p>
                        <p className="mr-4">{contact.lastChated}</p>
                      </div>
                      <div>
                        <p>{contact.lastChat}</p>
                      </div>
                    </div>
                  </div>
                  {/* Add more elements to display other contact information */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
