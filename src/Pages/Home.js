import React from "react";
import Card from "../Components/Card";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-24 justify-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
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
