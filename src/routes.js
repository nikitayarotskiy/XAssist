// === PAGES ===
import Home from "./Pages/Home.jsx";
import OurTeam from "./Pages/OurTeam.jsx"
// === ROUTER ===
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/team",
    element: <OurTeam />,
  },
];

export default routes;
