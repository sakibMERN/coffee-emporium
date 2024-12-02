import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Root from "./components/Root.jsx";
import SignIn from "./components/SignIn.jsx";
import Register from "./components/Register.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./components/Users.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () => fetch("https://coffee-store-server-two-tawny.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`https://coffee-store-server-two-tawny.vercel.app/coffee/${params.id}`),
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: ()=> fetch('https://coffee-store-server-two-tawny.vercel.app/users')
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
