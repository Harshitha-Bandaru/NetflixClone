import { Provider } from "react-redux";
import Browse from "./components/Browse";
import SigninPage from "./components/SignInPage";
import SignupPage from "./components/SignupPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./utils/store";
import Error from "./components/Error";

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
    {
      path: "/browse",
      element: <Browse />,
    },
    { path: "/error", element: <Error /> },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
