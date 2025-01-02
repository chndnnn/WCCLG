import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Lead from "./Screens/Lead";
import Home from "./Screens/Home";
import Qualifying from "./Screens/Qulifying";
import ShowingAccount from "./Screens/ShowingAccount";
import Enquiry from "./Screens/Enquiry";

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
  {
    path: "/qualifying",
    element: <Qualifying />,
  },
  {
    path: "/showingAccount",
    element: <ShowingAccount />,
  },
  {
    path: "/enquiry",
    element: <Enquiry />,
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
