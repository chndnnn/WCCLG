export default function Table(props) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead>
          <tr>
            <th className="sticky inset-y-0 start-0 bg-white px-4 py-2">
              <input
                type="checkbox"
                id="SelectAll"
                className="size-5 rounded border-gray-300"
              />
            </th>
            {props?.data?.length > 0 &&
              Object.keys(props.data[0]).map((key, index) => (
                <th
                  key={`header-${index}`}
                  className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
                >
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {props?.data?.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                <input
                  className="size-5 rounded border-gray-300"
                  type="checkbox"
                  id={`Row${rowIndex + 1}`}
                />
              </td>
              {Object.values(row).map((value, colIndex) => (
                <td
                  key={`cell-${rowIndex}-${colIndex}`}
                  className="whitespace-nowrap px-4 py-2 text-gray-700"
                >
                  {typeof value === "object" ? JSON.stringify(value) : value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
