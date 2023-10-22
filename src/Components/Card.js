import React from "react";

const Card = ({ item }) => {
  const { mission_name, launch_success, launch_date_local } = item;
  console.log(mission_name, item);
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return `Launch Date: ${formattedDate}`;
  };
  return (
    <div className="border  rounded-md p-8 text-center">
      <img
        className="mx-auto mb-8"
        src="https://i.ibb.co/bPcQWRH/Gyp-Skay-F-o.png"
        alt=""
      />
      <p className="text-[#6C757D] mb-3">{formatDate(launch_date_local)}</p>
      <h3 className="text-[#212529] text-2xl font-medium mb-1">
        {mission_name}
      </h3>
      <p className="text-[#495057] mb-6">{item.rocket.rocket_name}</p>
      <p className="text-[#6C757D] font-medium text-lg mb-2">Launch Status:</p>
      {launch_success ? (
        <p className="bg-red-500 text-sm font-semibold rounded-md text-white inline py-1 px-2">
          Success
        </p>
      ) : (
        <p className="bg-red-500 text-sm font-semibold rounded-md text-white inline py-1 px-2">
          Failed
        </p>
      )}
    </div>
  );
};

export default Card;
