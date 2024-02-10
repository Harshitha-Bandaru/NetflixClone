import { Link } from "react-router-dom";
import logo from "../assets/netflix-logo.png";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log("user", user);
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
    <div className="flex justify-between">
      <img src={logo} alt="Netflix Logo" className="w-40 h-14 bg-none" />
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
