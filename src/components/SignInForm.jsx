const SignInForm = () => {
  return (
    <form className="flex flex-col px-6 py-6 text-white bg-black bg-opacity-80 border border-black mx-auto right-0 left-0">
      <p>Sign In</p>
      <input
        type="text"
        placeholder="Email or phone number"
        className="px-3 py-4 my-4"
      />
      <input type="password" placeholder="Password" className="px-3 py-4" />
      <button>Sign In</button>
      <p>
        <a href="#1">Forgot Password?</a>
      </p>
      <input type="checkBox" id="rememberMe" />
      <label htmlFor="rememberMe">Remember me</label>
      <p>
        New to Netflix?{" "}
        <span>
          <a href="#2">Sign up now.</a>
        </span>
      </p>
    </form>
  );
};

export default SignInForm;
