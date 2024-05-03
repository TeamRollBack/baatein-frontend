import SignIn from "./SignIn"
import "./Render.css"
const Render = () => {
  return (
    <div className="Render-main">
      <div className="SignIn-form">
        <SignIn/>
      </div>
      <div className="Image">
        <img src="/Map.svg" alt="map"/>
      </div>
    </div>
  )
}

export default Render
