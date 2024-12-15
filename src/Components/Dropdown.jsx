export default function Dropdown({ data, name, onChange, value }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {name}
      </label>

      <select
        name={name}
        onChange={onChange}
        value={value}
        id={name}
        className="mt-1.5 w-full h-10 rounded-lg border border-gray-500 text-gray-700 sm:text-sm"
      >
        <option value="Please select">Please select</option>
        {data?.map((ele) => (
          <option value={ele}>{ele}</option>
        ))}
      </select>
    </div>
  );
}
