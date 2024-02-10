import { useRef, useState } from "react";
import { validateFields } from "../utils/helper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const SignInForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  console.log(email, password);

  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  console.log("isSignIn", isSignIn);

  const handleSubmit = () => {
    const error = validateFields(email.current.value, password.current.value);
    setErrorMessage(error);

    if (error) return;

    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("signedinuser", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  displayName: displayName,
                  email: email,
                  photoURL: photoURL,
                })
              );
              // Profile updated!
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col px-6 py-6 text-black bg-black bg-opacity-80 border border-black mx-auto right-0 left-0"
    >
      <p className="text-white">{isSignIn ? "Sign In" : "Sign Up"}</p>
      {!isSignIn && (
        <input
          ref={name}
          type="text"
          placeholder="Name"
          className="px-3 py-4"
        />
      )}
      <input
        ref={email}
        type="text"
        placeholder="Email or phone number"
        className="px-3 py-4 my-4 rounded-sm"
      />
      <input
        ref={password}
        type="password"
        placeholder="Password"
        className="px-3 py-4 rounded-sm "
      />
      <p className="text-red-500">{errorMessage}</p>
      <button
        className="bg-[#e50914] text-white font-medium rounded-sm py-2 my-4"
        onClick={() => handleSubmit()}
      >
        {isSignIn ? "Sign In" : "Sign Up"}
      </button>
      {/* <p>
        <a href="#1">Forgot Password?</a>
      </p>
      <input type="checkBox" id="rememberMe" />
      <label htmlFor="rememberMe">Remember me</label> */}
      <p className="cursor-pointer text-white" onClick={toggleSignIn}>
        {isSignIn
          ? "New to Netflix? Sign up now."
          : "Already a member? Sign In"}
      </p>
    </form>
  );
};

export default SignInForm;
