import "./App.css";

import Profile from "./components/Profile/Profile";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Recovery from "./components/Recovery";
import Password from "./components/Password";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import UserProfile from "./components/Profile/Profile";
import Sidebar from "./components/Profile/Sidebar";
import DigitalCard from "./components/Profile/DigitalCard";
import DigitalCard2 from "./components/Profile/DigitalCard2";
import DigitalCard3 from "./components/Profile/DigitalCard3";
import NewCard from "./components/Profile/NewCard";
import NewCard2 from "./components/Profile/NewCard2";
let router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: (
  //     <Login

  //     />
  //   ),
  // },
  // {
  //   path: "/register",
  //   element: <Register />,
  // },
  // {
  //   path: "/reset",
  //   element: <Reset />,
  // },
  // {
  //   path: "/recovery",
  //   element: <Recovery />,
  // },
  // {
  //   path: "/password",
  //   element: <Password />,
  // },

  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
  // {
  //   path: "/user_admin",
  //   element: <UserProfile />,
  // },
  // {
  //   path: "/sidebar",
  //   element: <Sidebar />,
  // },
  // {
  //   path: "/digitalCard",
  //   element: <DigitalCard />,
  // },
  // {
  //   path: "/digitalCard2",
  //   element: <DigitalCard2 />,
  // },
  // {
  //   path: "/digitalCard3",
  //   element: <DigitalCard3/>,
  // },
  // {
  //   path: "/newCard",
  //   element: <NewCard/>,
  // },
  {
    path: "/",
    element: <NewCard2/>,
  },
]);
const App = () => {

  return (
    <main>
      <RouterProvider
        router={router}

      ></RouterProvider>
    </main>
  );
};

export default App;
