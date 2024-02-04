import React from "react";
import Cards from "../components/Home/Cards";
import { foodDatas } from "../data";

const index = () => {
  return (
    <div className="text-white">
      <h1 className="flex lg:text-6xl text-5xl  flex-col items-center mt-[70px]  font-[Teko] font-normal">
        <span>
          These <span className="text-[#EE216F]">Delicious</span> Baking mixes
        </span>
        <span>
          Are now
          <span className="text-[#EE216F]"> Popular</span>
        </span>
      </h1>

      {/* cards */}
      <Cards foodDatas={foodDatas} />
    </div>
  );
};

export default index;
