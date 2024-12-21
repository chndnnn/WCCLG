const Input = ({ name, width, onChange }) => {
  return (
    <>
      <label htmlFor={name} className="relative block rounded-md">
        <input
          type="text"
          id={name}
          className={`peer h-10 p-2 border border-gray-500 bg-transparent placeholder-transparent rounded ${
            width ? `w-${width}` : "w-full"
          }`}
          placeholder={name}
          onChange={onChange}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          {name}
        </span>
      </label>
    </>
  );
};

export default Input;
