// src/components/Stats.js
import React from "react";

const Stats = () => {
  return (
    <div className="mt-10 mb-6 flex flex-col md:flex-row p-8 rounded-lg shadow-md">
      {/* Cột 1: Tiêu đề */}
      <div className="w-full md:w-1/2 flex flex-col mb-6 md:mb-0">
        <h1 className="text-2xl font-semibold text-left">
          Nu Skin, <br /> Improving Lives Everyday
        </h1>
      </div>
      {/* Cột 2: Thống kê (hiển thị theo hàng ngang) */}
      <div className="w-full md:w-1/2 flex flex-row text-left gap-8">
        <div className="flex flex-col text-left">
          <span className="text-lg font-bold block">25+</span>
          Years of Giving
        </div>
        <div className="flex flex-col text-left">
          <span className="text-lg font-bold block">20+</span>
          Current Social Projects
        </div>
        <div className="flex flex-col text-left">
          <span className="text-lg font-bold block">850M+</span>
          Meals Donated through Nourish the Children
        </div>
      </div>
    </div>
  );
};

export default Stats;
