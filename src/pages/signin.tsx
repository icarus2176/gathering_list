import { AuthForm } from "../components/AuthForm"
import gatheringlogo from "../assets/gatheringlogo.png";
import "./signin.css"

export default function SignIn(){

  return(
    <div className="loginAndSignUp">
      <img className="logoSmall" src={gatheringlogo} alt="Logo. Gathering List. A Magic the Gathering Card Wishlist"/>
      <div className="forms">
        <div className="login">
          <h3>Login</h3>
          <AuthForm />
        </div>
        <div className="SignUp">
          <h3>Don't Have an Account? Sign Up Here!</h3>
          <AuthForm />
        </div>
      </div>
    </div>
  )
}