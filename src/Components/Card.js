import React from "react";

const Card = () => {
  return (
    <div className="border  rounded-md p-8 text-center">
      <img
        className="mx-auto mb-8"
        src="https://i.ibb.co/bPcQWRH/Gyp-Skay-F-o.png"
        alt=""
      />
      <p className="text-[#6C757D] mb-3">
        Launch Date: <span>25 Feb, 2006</span>
      </p>
      <h3 className="text-[#212529] text-2xl font-medium mb-1">FalconSat</h3>
      <p className="text-[#495057] mb-6">Falcon 1</p>
      <p className="text-[#6C757D] font-medium text-lg mb-2">Launch Status:</p>
      <p className="bg-red-500 text-sm font-semibold rounded-md text-white inline py-1 px-2">
        Failed
      </p>
    </div>
  );
};

export default Card;
