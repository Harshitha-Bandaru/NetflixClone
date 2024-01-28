import SigninPage from "./components/SignInPage";
import SignupPage from "./components/SignupPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignupPage />,
    },
    {
      path: "/signin",
      element: <SigninPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
