import SignUpForm from "../../components/SignUp-Form/SignUp.Comp";
import SignInForm from "../../components/signIn-Form/SignInForm";
import './authenticate.style.scss'

const Authenticate = () => {
    

    return (
        <div className="authenticate-container">
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authenticate