import { Route, Routes } from "react-router-dom"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Home from "./components/Home"

function App() {

  return (
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
      </Routes>
  )
}

export default App
