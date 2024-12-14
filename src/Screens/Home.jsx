import { useState, useEffect } from "react";
import Table from "../Components/Table";
import FormScreen from "./FormScreen";
import { fetchTableData } from "../Helper/Api";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let data = await fetchTableData();
    setData(data);
  }

  if (loading)
    return (
      <p className=" fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center align-middle">
        <img src="/pattern-15508_256.gif" alt="" />
      </p>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <FormScreen />
      <Table data={data} />
    </>
  );
}
