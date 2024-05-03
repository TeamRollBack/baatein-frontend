import ChatWindow from "../Chat/ChatWindow";
import Contacts from "../Contacts/Contacts";
import Settings from "../Settings";
import "./Home.css"

export default function Home() {
    return (
    <div className="Home-main">
        <div className="Home-ChatWindow">
            <ChatWindow />
        </div>
        <div className="Home-Contacts">
            <Contacts/>
        </div>
        <div className="Home-Settings">
            <Settings />
        </div>

    </div>
    )
}