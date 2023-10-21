import React from "react";
import { FaSearch } from "react-icons/fa";
const Filter = () => {
  return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-end">
        <input type="checkbox" name="radio-1" className="radio rounded-md" />
        <p>Show upcoming only</p>
      </div>

      <div className="space-y-2 md:flex md:flex-wrap gap-6 justify-end">
        <div className="join md:flex-1 md:block">
          <input
            className="input input-bordered join-item mx-auto w-[79vw] md:w-auto focus:outline-none"
            placeholder="Search..."
          />
          <button className="btn join-item  bg-[#0D6EFD] text-white hover:text-black">
            {" "}
            <FaSearch />
          </button>
        </div>
        <div className="form-control  md:w-[250px]">
          <select className="select select-bordered focus:outline-none">
            <option disabled hidden selected>
              By Launch Status
            </option>
            <option>Success</option>
            <option>Failed </option>
          </select>
        </div>
        <div className="form-control md:w-[250px]">
          <select className="select select-bordered focus:outline-none">
            <option disabled hidden selected>
              By Launch Date
            </option>
            <option>Last Week</option>
            <option>Last Month </option>
            <option>Last Year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
