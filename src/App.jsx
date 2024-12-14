import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Lead from "./Screens/Lead";
import Home from "./Screens/Home";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/lead",
    element: <Lead />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
