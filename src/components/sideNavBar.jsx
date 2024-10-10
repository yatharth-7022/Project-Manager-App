import React from "react";

export const SideNavBar = () => {
  return (
    <div className="flex min-w-[200px] md:w-[20%] lg:w-[20%] h-[100vh] flex-col justify-end  ">
      <div className="flex w-full md:w-full lg:w-full bg-[#100e0c] h-[90%] rounded-tr-[30px] flex-col gap-[30px]">
        <div className=" flex w-full ">
          <h1 className="text-white ml-[30px] mt-[10vh] font-semibold text-xl md:text-2xl lg:text-3xl ">
            YOUR PROJECTS
          </h1>
        </div>
        <div className="w-full">
          <button className="rounded-[8px] ml-[30px] bg-[#3C3D37] h-[3rem] w-[60%]  md:w-[60%] lg:w-[60%] text-white text-opacity-60 hover:text-opacity-100">
            + Add Project
          </button>
        </div>
      </div>
    </div>
  );
};
