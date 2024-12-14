import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Lead from "./Screens/Lead";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/lead",
    element: <Lead />,
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
