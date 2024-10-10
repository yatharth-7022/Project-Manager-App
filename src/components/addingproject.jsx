import React from "react";

import { Input } from "./input";
export const AddingProject = () => {
  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="flex flex-col gap-[40px] w-[80%]">
        <menu className="flex flex-row gap-4 w-full justify-end">
          <li>
            <button className="bg-[#f9f9f9] text-black font-[500] p-3 rounded-[10px] min-w-[80px] md:w-[100px] lg:w-[130px] cursor-pointer hover:bg-[#A02334] hover:text-white">
              Cancel
            </button>
          </li>
          <li>
            <button className="bg-black text-white font-[500] p-3 rounded-[10px] min-w-[80px] md:w-[100px] lg:w-[130px] cursor-pointer ">
              Save
            </button>
          </li>
        </menu>
        <Input label="TITLE" />
        <Input label="DESCRIPTION" textArea />
        <Input label="DUE DATE" type="date" />
      </div>
    </div>
  );
};
