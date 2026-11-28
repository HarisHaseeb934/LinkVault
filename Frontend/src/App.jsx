import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Signup from "./pages/Signup";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/sign_up",
    element: <Signup />,
  },
  {
    path: "/sign_in",
    element: <SignIn />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
