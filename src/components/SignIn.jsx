import { useSelector } from 'react-redux';

export default function SignIn() {
  const showChatWindow = useSelector(state => state.chatWindow.showChatWindow);

  console.log('this is the chatwindow value ->', showChatWindow);

  return (
    <div>SignIn</div>
  )
}
