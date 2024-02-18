import { Link } from "react-router-dom";
import logo from "../assets/netflix-logo.png";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { toggleGPTSearchButton } from "../utils/gptSlice";
import { lang } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  // console.log("user", user);
  const gptSearchButton = useSelector((store) => store.gpt.gptSearchButton);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSearchMovies = () => {
    dispatch(toggleGPTSearchButton());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="flex justify-between py-6 px-12">
      <img src={logo} alt="Netflix Logo" className="w-40 h-12 bg-none" />
      {!user ? (
        <Link to="/signin">
          <button className="text-white bg-red-600 px-3 py-1 font-medium rounded-md">
            Sign In
          </button>
        </Link>
      ) : (
        <div className="flex gap-2">
          {/* <h2>Hi {user.displayName}</h2> */}
          {gptSearchButton && (
            <select
              className="bg-black text-white font-semibold p-1"
              onChange={handleLanguageChange}
            >
              {lang.map((language) => (
                <option key={language.langCode} value={language.langCode}>
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-purple-600 text-white px-3 py-1 rounded-lg font-medium"
            onClick={handleSearchMovies}
          >
            {gptSearchButton ? "Home" : "Search Movies"}
          </button>
          <img src={user.photoURL} alt="user-profile" />
          <button
            className="text-white bg-red-600 px-3 py-1 font-medium rounded-lg"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
