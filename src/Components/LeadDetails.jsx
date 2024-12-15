import { useEffect, useState } from "react";
import { fetchTableData } from "../Helper/Api";
import Table from "./Table";

const LeadDetails = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(tableData);
  }, [tableData]);

  async function fetchData() {
    let data = await fetchTableData();
    setTableData(data);
  }
  return (
    <div className="w-full  gap-1 md:flex h-40">
      <div className="md:w-[60%]  border border-black  overflow-y-scroll">
        <Table data={tableData} />
      </div>
      <div className="md:w-[40%] border border-black  overflow-y-scroll">
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default LeadDetails;
