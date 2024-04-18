import ChatWindow from "./ChatWindow";
import Contacts from "./Contacts";
import Settings from "./Settings";

export default function Home() {
    return (
        <div>
            <Contacts />
            <ChatWindow />
            <Settings />
        </div>
    )
}