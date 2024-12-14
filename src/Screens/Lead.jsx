import { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";
import Input from "../Components/Input";
import LeadDetails from "../Components/LeadDetails";

const Lead = () => {
  let [data, setdata] = useState([2, 3, 4, 5]);
  let [selectedValue, setSelectedValue] = useState();

  return (
    <div className="border">
      <div>
        <h1>Detail lead and enquiry</h1>
      </div>
      <div className="border">
        <div>Create Lead</div>
        <div className="p-5">
          <div className=" border border-blue-500 rounded w-[90%] m-auto">
            <div className="border bg-neutral-500 rounded">lead Details</div>
            <div className="grid md:grid-cols-3 p-3 gap-4">
              <Input
                name={"Lead ID"}
                onChange={(e) => setData(e.target.value)}
              />
              <Input
                name={"Customer/prospect"}
                onChange={(e) => setData(e.target.value)}
              />

              <Input
                name={"Project Name"}
                onChange={(e) => setData(e.target.value)}
              />
              <Input
                name={"Project Location"}
                onChange={(e) => setData(e.target.value)}
              />
              <Input
                name={"Employee No"}
                onChange={(e) => setData(e.target.value)}
              />
              <Input
                name={"Sales Person"}
                onChange={(e) => setData(e.target.value)}
              />
              <Dropdown
                name={"Bussiness Unit"}
                data={data}
                onChange={(e) => setSelectedValue(e.target.value)}
                value={selectedValue}
              />
              <Dropdown name={"Vertical"} data={data} />
              <Dropdown name={"Region"} data={data} />
              <Dropdown name={"Branch"} data={data} />
            </div>
          </div>
        </div>
        <LeadDetails />
      </div>
    </div>
  );
};

export default Lead;
