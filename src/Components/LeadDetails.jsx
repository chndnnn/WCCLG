import { useEffect, useState } from "react";
import { fetchTableData } from "../Helper/Api";
import Table from "./Table";
import "./../index.css";
import axios from "axios";

const LeadDetails = () => {
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

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  async function fetchData() {
    let data = await fetchTableData();
    setTableData(data);
  }
  return (
    <div className="w-full  gap-3 md:flex h-80 ">
      <div className="md:w-[60%]  border border-black ">
        <Table data={tableData} />
      </div>
      <div className="md:w-[39%] border border-black  ">
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default LeadDetails;
