import { useEffect, useState } from "react";
import Input from "./Components/Input";
import Home from "./Screens/Home";
import Navbar from "./Components/Navbar";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
    <Navbar/>
      {/* <Input
        name={"chandan"}
        width={"40"}
        onChange={(e) => setData(e.target.value)}
      />
       <Home/> */}
    </>
  );
}

export default App;
