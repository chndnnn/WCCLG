import { useEffect, useState } from "react";
import Dropdown from "../Components/Dropdown";
import Input from "../Components/Input";
import LeadDetails from "../Components/LeadDetails";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa6";
import axios from "axios";

const Lead = () => {
  let [data, setdata] = useState([2, 3, 4, 5]);
  let [selectedValue, setSelectedValue] = useState();
  let [hide, setHide] = useState(false);

  return (
    <div className="border">
      <div className="bg-blue-400">
        <h1>Detail lead and enquiry</h1>
      </div>
      <div className="border p-2 ">
        <div
          className="bg-blue-500 px-2 flex items-center text-white cursor-pointer"
          onClick={() => setHide((prev) => !prev)}
        >
          Create Lead
          <span className="ml-auto">
            {hide ? <IoIosArrowDown /> : <FaAngleUp />}
          </span>
        </div>
        {!hide && (
          <div className="p-5 border border-blue-500 shadow-lg">
            <div className=" border rounded w-[95%] m-auto">
              <div className="border bg-blue-200 rounded px-2">
                lead Details
              </div>
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
                <Dropdown name={"Lead Type"} data={data} />
              </div>
            </div>
          </div>
        )}
        <div className="mt-2">
          <div className="bg-blue-500 px-2 text-white">
            Customer contact and Competitor details
          </div>
          <LeadDetails />
        </div>
      </div>
    </div>
  );
};

export default Lead;
