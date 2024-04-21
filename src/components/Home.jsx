import { useEffect } from 'react';
import ChatWindow from "./ChatWindow";
import Contacts from "./Contacts";
import Settings from "./Settings";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setShowChatWindow } from "../features/chatWindowSlice";

function Home() {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    useEffect(() => {
        dispatch(setShowChatWindow('Shubham Asbe'));
    }, []); 

    console.log('this is a test');

    return (
        <>
            <Contacts />
            <ChatWindow />
            <Settings />
            {/* <button onClick={()=>{navigate('/signIn')}}>SignIn</button> */}
        </>
    );
}

export default Home
