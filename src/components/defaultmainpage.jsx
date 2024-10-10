import React from "react";

export const DefaultMainPage = ({ onCreateProjectClick }) => {
  return (
    <div className="flex flex-col gap-[40px] flex-grow justify-center items-center h-[100vh] ">
      <img className="h-[15%] w-auto" src="public\logo.png" alt="" />

      <h1 className="font-bold  text-xl md:text-2xl lg:text-3xl text-[#372a13]">
        {" "}
        No Project Selected
      </h1>
      <p className="text-[#372a13]">
        Select a project or get started with a new one
      </p>
      <button
        onClick={onCreateProjectClick}
        className="rounded-[8px] ml-[30px] bg-[#3C3D37] h-[3rem] min-w-[30px]  md:w-[20%] lg:w-[20%] text-white text-opacity-60 hover:text-opacity-100"
      >
        Create new project
      </button>
    </div>
  );
};
