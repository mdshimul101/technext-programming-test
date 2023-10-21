import React from "react";
import Filter from "./Filter";

const Header = () => {
  return (
    <>
      <div className=" my-16  text-left md:text-center space-y-4">
        <h1 className="text-[#212529] text-4xl font-medium leading-10">
          Spaceflight details
        </h1>
        <p className="text-[#495057] text-base font-normal leading-6">
          Find out the elaborate features of all the past big spaceflights.
        </p>
      </div>
      <Filter></Filter>
    </>
  );
};

export default Header;
