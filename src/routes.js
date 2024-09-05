// === PAGES ===
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";

// === ROUTER ===
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
