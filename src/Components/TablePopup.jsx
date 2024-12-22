import React, { useEffect, useState } from "react";
import Input from "./Input";

const TablePopup = ({ onClose, data }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 ">
        <div className="grid gap-3 grid-cols-4 mb-2">
          {data?.map((ele, i) => {
            return <Input name={ele} />;
          })}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onClose()}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
          <button
            onClick={() => onClose()}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default TablePopup;
