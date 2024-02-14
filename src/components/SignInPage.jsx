import SignInForm from "./SignInForm";
import Header from "./Header";

const SigninPage = () => {
  return (
    <div className="relative h-screen flex flex-col px-36 py-6 bg-[url('/src/assets/background-image.jpg')]  bg-cover">
      <Header />
      <SignInForm />
    </div>
  );
};

export default SigninPage;
