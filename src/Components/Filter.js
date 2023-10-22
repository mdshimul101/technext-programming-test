import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Filter = () => {
  const [filterStatus, setFilterStatus] = useState({
    lnuchStatus: "All",
    lunchData: "All",
    upcomingStatus: "All",
    search: "",
  });
  const [upcoming, setUpcoming] = useState(true);
  const [lunch, setLunch] = useState("All");
  const [lunchDate, setLunchDate] = useState("All");
  const [searchData, setSearchData] = useState("");
  const handleStatusChange = (event) => {
    if (event.target.value) {
      setUpcoming(!upcoming);
      console.log("if,", upcoming);
      setFilterStatus({ ...filterStatus, upcomingStatus: upcoming });
    }
  };
  const handleLunchStatusChange = (event) => {
    let status = event.target.value;

    if (status === "Success") {
      setLunch(true);
      console.log(event.target.value);
      console.log("if lunch success,", lunch);
      setFilterStatus({ ...filterStatus, lnuchStatus: true });
      //   console.log(filterStatus);
    }
    if (status === "Failed") {
      setLunch(false);
      console.log(event.target.value);
      console.log("if lunch fail,", lunch);
      setFilterStatus({ ...filterStatus, lnuchStatus: false });
      //   console.log(filterStatus);
    }
  };

  const handleLunchDateChange = (event) => {
    let status = event.target.value;

    if (status === "Last Week") {
      setLunchDate("Last Week");
      //   console.log(event.target.value);
      console.log("if lunch success,", lunch);
      setFilterStatus({ ...filterStatus, lunchData: "Last Week" });
      //   console.log(filterStatus);
    }
    if (status === "Last Month") {
      setLunch("Last Month");
      //   console.log(event.target.value);
      console.log("if lunch fail,", lunch);
      setFilterStatus({ ...filterStatus, lunchData: "Last Month" });
      //   console.log(filterStatus);
    }
    if (status === "Last Year") {
      setLunch("Last Year");
      //   console.log(event.target.value);
      console.log("if lunch fail,", lunch);
      setFilterStatus({ ...filterStatus, lunchData: "Last Year" });
      //   console.log(filterStatus);
    }
  };

  const handleSearch = (event) => {
    setSearchData(event.target.value);
    console.log(searchData);
    setFilterStatus({ ...filterStatus, search: event.target.value });
  };
  console.log(filterStatus);
  return (
    <div className="space-y-4">
      <div className="flex gap-2 justify-end">
        <input
          type="checkbox"
          onChange={handleStatusChange}
          name="radio-1"
          className="radio rounded-md"
        />
        <p>Show upcoming only</p>
      </div>

      <div className="space-y-2 md:flex md:flex-wrap gap-6 justify-end">
        <div className="join md:flex-1 md:block">
          <input
            onChange={handleSearch}
            className="input input-bordered join-item mx-auto w-[79vw] md:w-auto focus:outline-none"
            placeholder="Search..."
          />
          <button className="btn join-item  bg-[#0D6EFD] text-white hover:text-black">
            {" "}
            <FaSearch />
          </button>
        </div>
        <div className="form-control  md:w-[250px]">
          <select
            onChange={handleLunchStatusChange}
            className="select select-bordered focus:outline-none"
          >
            <option disabled hidden selected>
              By Launch Status
            </option>
            <option>Success</option>
            <option>Failed </option>
          </select>
        </div>
        <div className="form-control md:w-[250px]">
          <select
            onChange={handleLunchDateChange}
            className="select select-bordered focus:outline-none"
          >
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
