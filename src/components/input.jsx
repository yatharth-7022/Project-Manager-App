import React from "react";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
export const Input = ({ label, textArea, type }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[#372a13] font-semibold text-[1rem]">
        {label}
      </label>
      {textArea ? (
        <textArea className="bg-[#e1dfdd] p-2 rounded-[10px]" />
      ) : type === "date" ? (
        <div className="relative w-full bg-[#e1dfdd] p-2 rounded-[10px] ">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="DD/MM/YYYY"
            className="ml-10 bg-[#e1dfdd] w-full border-none"
          />
          <SlCalender className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#372a13]" />
        </div>
      ) : (
        <input type={type} className="bg-[#e1dfdd] p-2 rounded-[10px] w-full" />
      )}
    </div>
  );
};
