import React, { useContext, useEffect, useState } from "react";
import Card from "../Components/Card";
import { filterContext } from "../contexts/data";

const Home = () => {
  const [data, setData] = useState([]);
  const { filterData } = useContext(filterContext);
  console.log("home filter data", filterData);

  // const searchData = (data) => {
  //   data.filter((item) => {
  //     return item.rocket.rocket_name.toLowerCase().includes(filterData.search);
  //   });
  // };

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => {
        const searchResult = data.filter((item) => {
          return item.rocket.rocket_name
            .toLowerCase()
            .includes(filterData.search);
        });
        const lunchResult = searchResult.filter((item) => {
          if (filterData.lnuchStatus === "All") {
            return item;
          }
          if (filterData.lnuchStatus === true && item.launch_success === true) {
            return item;
          }

          if (
            filterData.lnuchStatus === false &&
            item.launch_success === false
          ) {
            return item;
          }
        });
        const upcomingResult = lunchResult.filter((item) => {
          if (filterData.upcomingStatus === "All") {
            return item;
          }
          if (filterData.upcomingStatus === true && item.upcoming === true) {
            return item;
          }
          if (filterData.upcomingStatus === false && item.upcoming === false) {
            return item;
          }
        });
        setData(upcomingResult);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [filterData]);

  console.log(filterData, data);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24 justify-center">
        {data.map((item) => (
          <Card key={item.flight_number} item={item}></Card>
        ))}
      </div>

      <div className="text-center mb-20">
        <div class="join">
          <button class="join-item btn">«</button>
          <button class="join-item btn bg-[#0D6EFD] text-white">1</button>
          <button class="join-item btn">2</button>
          <button class="join-item btn">3</button>
          <button class="join-item btn">4</button>
          <button class="join-item btn">5</button>
          <button class="join-item btn btn-disabled">...</button>
          <button class="join-item btn">13</button>
          <button class="join-item btn">»</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
