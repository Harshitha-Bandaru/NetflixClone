const SignupBody = () => {
  return (
    <div className="flex flex-col items-center gap-3 text-white">
      <div className="flex flex-col items-center">
        <p className="font-bold text-5xl">
          Unlimited movies, TV shows and more
        </p>
        <br />
        <p className="font-semibold text-2xl my-2">
          Watch anywhere. Cancel anytime.
        </p>
        <br />
        <p className="font-medium text-xl">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Email address"
          className="w-96 py-4 px-3 rounded-md bg-transparent border border-gray-600"
        />
        <button className="bg-red-600 px-6 py-4 font-medium text-xl rounded-md">
          Get Started{" "}
        </button>
      </div>
    </div>
  );
};

export default SignupBody;
