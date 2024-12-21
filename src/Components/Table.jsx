import { IoMdAdd } from "react-icons/io";
import { AiFillEdit } from "react-icons/ai";

export default function Table(props) {
  return (
    <div className="p-2 border h-full">
      <div>
        <div className="flex gap-1">
          <span className="bg-black rounded cursor-pointer">
            <IoMdAdd className="text-white" />
          </span>
          <span className="bg-black rounded cursor-pointer">
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
              {props?.data?.length > 0 &&
                Object.keys(props.data[0]).map((key, index) => (
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
    </div>
  );
}
