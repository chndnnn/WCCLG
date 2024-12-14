import { useEffect, useState } from "react";
import Input from "./Components/Input";
import Home from "./Screens/Home";
import Navbar from "./Components/Navbar";
import Lead from "./Screens/Lead";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Navbar />
      <Lead />
    </>
  );
}

export default App;
