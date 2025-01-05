import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles

const CustomDatePicker = ({ label }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-700 w-full">{label}</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        className=" border border-neutral-700  w-full  rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholderText="Choose a date"
      />
    </div>
  );
};

export default CustomDatePicker;
