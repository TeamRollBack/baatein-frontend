//contact.jsx
import { useSelector } from "react-redux";


export default function Contacts() {
  const chatWindow = useSelector(state => state.chatWindow);

    console.log('this is the chatwindow value->', chatWindow);

    return (
        <span>Contacts</span>
    );
}
