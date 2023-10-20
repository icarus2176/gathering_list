import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./pages/App"
import SignIn from "./pages/signin";
import ErrorPage from "./pages/error"
import { PrivateRoute } from "./components/PrivateRoute"

const router = createBrowserRouter([
  {
    path: "/app",
    element: 
      <PrivateRoute>
        <App/>
      </PrivateRoute>,
    errorElement: <ErrorPage />,
  },

  {
    path: "/",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);