export default function Table(props) {
    console.log(props.data);

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                            <label htmlFor="SelectAll" className="sr-only">Select All</label>
                            <input type="checkbox" id="SelectAll" className="size-5 rounded border-gray-300" />
                        </th>
                        {
                            props.data.length > 0 && Object.keys(props.data[0]).map((ele) => {
                                return <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{ele}</th>
                            })
                        }

                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="sticky inset-y-0 start-0 bg-white px-4 py-2">
                            <label className="sr-only" htmlFor="Row1">Row 1</label>
                            <input className="size-5 rounded border-gray-300" type="checkbox" id="Row1" />
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">John Doe</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                        <td className="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}