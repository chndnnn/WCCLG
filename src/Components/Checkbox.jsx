export default function Checkbox({label,margin}){
    return(
        <label htmlFor="Option1" className={`flex cursor-pointer items-start gap-4 `} style={{ marginTop: `${margin}px` }}>
        <div className="flex items-center">
          &#8203;
          <input
            type="checkbox"
            className="size-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900"
            id="Option1"
          />
        </div>
        <div>
          <strong className="font-medium text-gray-900 dark:text-white"> {label} </strong>
        </div>
      </label>
    )
}