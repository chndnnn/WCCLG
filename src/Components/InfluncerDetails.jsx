import { useEffect, useState } from "react";
import { fetchTableData } from "../Helper/Api";
import Table from "./Table";
import "./../index.css";
import axios from "axios";

const InfluncerDetails = () => {
  const [tableData, setTableData] = useState([]);

  async function getTest() {
    try {
      let data = await axios.post(
        // "https://domestic-kate-wcclg-7ed3ef90.koyeb.app/lead/getAllLeads"
        "https://domestic-kate-wcclg-7ed3ef90.koyeb.app/lead/getAllLeads"
      );
      setTableData(data.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getTest();
    //fetchData();
  }, []);

  async function fetchData() {
    let data = await fetchTableData();
    setTableData(data);
  }
  return (
    <div className="w-full  gap-3 md:flex h-full">
      <div className="md:w-[100%]  border rounded border-black ">
        <Table data={tableData} name={"leadDetails"} />
      </div>
    </div>
  );
};

export default InfluncerDetails;
