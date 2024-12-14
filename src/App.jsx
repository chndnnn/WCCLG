import { useEffect, useState } from "react";
import Input from "./Components/Input";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <>
      <Input
        name={"chandan"}
        width={"40"}
        onChange={(e) => setData(e.target.value)}
      />
    </>
  );
}

export default App;
