import { useState, useEffect } from "react";
import Table from "../Components/Table";
import FormScreen from "./FormScreen";
import { fetchTableData } from "../Helper/Api";
import Loader from "../Components/Loader";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    let data = await fetchTableData();
    setData(data);
    setLoading(false);
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <FormScreen />
   <Table height={225} data={data} loader={loading} />
    </>
  );
}
