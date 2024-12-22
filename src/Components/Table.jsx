import { IoMdAdd } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";
import TablePopup from "./TablePopup";
import { useEffect, useState } from "react";

export default function Table(props) {
  const [popup, setpopup] = useState(false);
  const [tableHeader, setTableHeader] = useState();

  useEffect(() => {
    if (props?.data?.length > 0) {
      let data = Object.keys(props.data[0]).map((ele) => {
        return ele;
      });
      setTableHeader(data);
    }
  }, [props.data[0]]);

  return (
    <div className="p-2 border h-full">
      <div>
        <div className="flex gap-1">
          <span className="bg-black rounded cursor-pointer hover:bg-neutral-700">
            <IoMdAdd className="text-white" onClick={() => setpopup(true)} />
          </span>
          <span className="bg-black rounded cursor-pointer hover:bg-neutral-700">
            <AiFillEdit className="text-white" />
          </span>
        </div>
      </div>
      <div className="overflow-x-auto overflow-y-auto border h-[90%]">
        <table className="min-w-full divide-y divide-gray-300 bg-white text-sm border border-gray-300">
          <thead className="sticky top-0 z-10 bg-neutral-300">
            <tr>
              <th className="sticky inset-y-0 start-0 bg-neutral-300 px-4 py-2 border border-gray-300">
                <input
                  type="checkbox"
                  id="SelectAll"
                  className="size-3 rounded border-gray-300"
                />
              </th>
              {tableHeader?.length > 0 &&
                tableHeader.map((key, index) => (
                  <th
                    key={`header-${index}`}
                    className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 border border-gray-300"
                  >
                    {key}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {props?.data?.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                <td className="bg-white px-4 py-2 border border-gray-300">
                  <input
                    className="size-3 rounded border-gray-300"
                    type="checkbox"
                    id={`Row${rowIndex + 1}`}
                  />
                </td>
                {Object.values(row).map((value, colIndex) => (
                  <td
                    key={`cell-${rowIndex}-${colIndex}`}
                    className="whitespace-nowrap px-4 py-2 text-gray-700 border border-gray-300"
                  >
                    {typeof value === "object" ? JSON.stringify(value) : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {popup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
          <TablePopup data={tableHeader} onClose={() => setpopup(false)} />
        </div>
      )}
    </div>
  );
}
