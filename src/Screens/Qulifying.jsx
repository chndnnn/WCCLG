import { useState } from "react";
import Dropdown from "../Components/Dropdown";
import Input from "../Components/Input";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa6";
import InfluncerDetails from "../Components/InfluncerDetails";

const Qualifying = () => {
  let [hide, setHide] = useState(false);
  let [data, setdata] = useState([2, 3, 4, 5]);
  let [selectedValue, setSelectedValue] = useState();

  return (
    <div className="border">
      <div className="bg-blue-400">
        <h1>Qualify and Influncer screen</h1>
      </div>
      <div className="border p-2 ">
        <div
          className="bg-blue-500 px-2 mb-1 rounded flex items-center text-white cursor-pointer"
          onClick={() => setHide((prev) => !prev)}
        >
          Qualifying details
          <span className="ml-auto">
            {hide ? <IoIosArrowDown /> : <FaAngleUp />}
          </span>
        </div>
        {!hide && (
          <div className="p-5 border rounded border-blue-500 shadow-lg">
            <div className=" border rounded w-[95%] m-auto">
              <div className="border bg-blue-200 rounded px-2">
                lead Details
              </div>
              <div className="grid md:grid-cols-3 p-3 gap-4">
                <Input
                  name={"Lead ID"}
                  required={true}
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
                <Dropdown name={"Lead Source"} data={data} />
                <Dropdown name={"Sub vertical"} data={data} />
                <Dropdown name={"Type of account"} data={data} />
                <Dropdown name={"Segment"} data={data} />
                <Dropdown name={"Sub Segment"} data={data} />
                <Dropdown name={"Lead expected closure date"} data={data} />
                <Dropdown
                  name={"status"}
                  data={data}
                  onChange={(e) => setSelectedValue(e.target.value)}
                  value={selectedValue}
                />
              </div>
            </div>
          </div>
        )}
        <div className="mt-2">
          <div className="bg-blue-500 px-2 mb-1 rounded text-white">
            influncer details
          </div>
          <InfluncerDetails />
        </div>
      </div>
    </div>
  );
};

export default Qualifying;
