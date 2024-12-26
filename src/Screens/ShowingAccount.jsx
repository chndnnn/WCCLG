import { useState } from "react";
import Dropdown from "../Components/Dropdown";
import Input from "../Components/Input";
import { IoIosArrowDown } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa6";
import InfluncerDetails from "../Components/InfluncerDetails";

const ShowingAccount = () => {
  let [hide, setHide] = useState(false);
  let [data, setdata] = useState([2, 3, 4, 5]);
  let [selectedValue, setSelectedValue] = useState();

  return (
    <div>
      <div className="bg-blue-400 px-1">
        <h1>Showing account and Comments upload</h1>
      </div>
      <div className="p-2 ">
        <div
          className="bg-blue-500 px-2 mb-1 rounded flex items-center text-white cursor-pointer"
          onClick={() => setHide((prev) => !prev)}
        >
          Showing of account
          <span className="ml-auto">
            {hide ? <IoIosArrowDown /> : <FaAngleUp />}
          </span>
        </div>
        {!hide && (
          <div className="p-5  h-56 rounded border-blue-500 shadow-lg">
            <div className="rounded h-full  p-1 w-[95%] m-auto">
              <InfluncerDetails />
            </div>
          </div>
        )}
        <div className="mt-2">
          <div className="bg-blue-500 px-2 mb-1 rounded text-white">
            Comments and upload tab
          </div>
          <div className="border h-52 flex">
            <div className="w-[65%] h-full border p-10">
              <p>comments</p>
              <div className="h-full w-full">
                <textarea
                  name=""
                  id=""
                  className="border border-neutral-400 rounded h-full w-full p-2"
                ></textarea>
              </div>
            </div>
            <div className="w-[35%] h-full border flex justify-center items-center">
              <span className="cursor-pointer">Upload attachments</span>
            </div>
          </div>
        </div>
        <div className=" h-11 flex justify-center items-center">
          <div className="flex gap-2">
            <button className="bg-blue-500 hover:scale-105 px-3 py-1 rounded text-white">
              Save
            </button>
            <button className="bg-blue-500 hover:scale-105 px-3 py-1 rounded text-white">
              Move to inquiry
            </button>
            <button className="bg-blue-500 hover:scale-105 px-3 py-1 rounded text-white">
              cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowingAccount;
