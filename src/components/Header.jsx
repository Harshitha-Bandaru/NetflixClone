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

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log("user", user);

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
        <Link to="/signin">
          <h2>{user.displayName}</h2>
          <img src={user.photoURL} alt="user-profile" />

          <button
            className="text-white bg-red-600 px-3 py-1 font-medium rounded-md"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
