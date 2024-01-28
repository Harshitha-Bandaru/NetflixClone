import Header from "./Header";
import SignupBody from "./SignupBody";

const SignupPage = () => {
  return (
    <div className="h-screen flex flex-col justify-between px-36 py-6 bg-[url('/src/assets/background-image.jpg')] bg-cover">
      {/* <img src={bgImage} alt="movies-background" className="" /> */}
      <Header />
      <SignupBody />
    </div>
  );
};

export default SignupPage;
