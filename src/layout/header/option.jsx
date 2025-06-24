import React from "react";

const options = [
  {
    label: "FAQs",
    value: "option1",
  },
  {
    label: "Help",
    value: "option2",
  },
  {
    label: "Support",
    value: "option3",
  },
];

const Option = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
      {options.map((option, idx) => (
        <span
          key={option.value}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <button className="bg-transparent text-[#fff] hover:text-gray-300 border-none focus:outline-none px-2 py-1 text-sm sm:text-base">
            {option.label}
          </button>
          {idx < options.length - 1 && (
            <span className="text-[#fff] font-bold px-1">|</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Option;
