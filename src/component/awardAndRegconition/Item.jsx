import React from "react";

const Item = ({ title, subtitle, desc, img }) => {
  return (
    <div className="flex flex-col items-center  p-4 mt-4 w-[150px] h-[260px] mx-auto  transition-transform duration-300 hover:scale-105  cursor-pointer">
      <img
        src={img}
        alt={title}
        className="w-[100px] h-[100px] object-fill rounded-full"
      />
      <div className="text-center mt-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <h3 className="text-md font-semibold">{subtitle}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
      </div>
    </div>
  );
};

export default Item;
