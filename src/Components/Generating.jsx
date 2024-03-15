import React from "react";
import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex item-center pt-4 h-[3.5rem] bg-n-8/80 px-6 
      rounded-[1.7rem] ${className || ""} text-base`}
    >
      <img src={loading} className="w-5 h-5 mr-4" alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;
