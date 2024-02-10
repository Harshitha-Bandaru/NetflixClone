import SignInForm from "./SignInForm";
import logo from "../assets/netflix-logo.png";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        console.log("user", user);
        const { uid, displayName, email, photoURL } = user;
        dispatch(addUser({ uid, displayName, email, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/signin");
      }
    });
  }, []);

  return (
    <div className="relative h-screen flex flex-col px-36 py-6 bg-[url('/src/assets/background-image.jpg')]  bg-cover">
      <div>
        <img src={logo} alt="Netflix Logo" className="w-40 h-14 bg-none" />
      </div>
      <SignInForm />
    </div>
  );
};

export default SigninPage;
