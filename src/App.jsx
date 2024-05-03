import { Route, Routes } from "react-router-dom";
import Render from "./components/SignIn/Render";
import Home from "./components/Home/Home";

function App() {
  return (
      <Routes>
        <Route path="/signIn" element={<Render/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
  );
}

export default App;
