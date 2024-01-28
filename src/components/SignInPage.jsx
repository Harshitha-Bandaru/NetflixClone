import SignInForm from "./SignInForm";
import logo from "../assets/netflix-logo.png";

const SigninPage = () => {
  return (
    <div className="h-screen flex flex-col px-36 py-6 bg-[url('/src/assets/background-image.jpg')] bg-cover">
      <div>
        <img src={logo} alt="Netflix Logo" className="w-40 h-14 bg-none" />
      </div>
      <SignInForm />
    </div>
  );
};

export default SigninPage;
