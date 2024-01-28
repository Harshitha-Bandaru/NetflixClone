import { Link } from "react-router-dom";
import logo from "../assets/netflix-logo.png";

const Header = () => {
  return (
    <div className="flex justify-between">
      <img src={logo} alt="Netflix Logo" className="w-40 h-14 bg-none" />
      <Link to="/signin">
        <button className="text-white bg-red-600 px-3 py-1 font-medium rounded-md">
          Sign In
        </button>
      </Link>
    </div>
  );
};

export default Header;
