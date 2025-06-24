import React from "react";

const Title = ({ content }) => {
  return (
    <div className="bg-[#551760] flex flex-col items-center justify-center h-[80px] w-fit max-w-[700px] mb-[100px] rounded-[30px] mx-auto">
      <div className="flex items-center w-full justify-center px-6">
        <span className="block w-8 h-[2px] bg-[#fff] rounded-full mr-4"></span>
        <span className="text-[30px] font-bold text-[#fff] whitespace-nowrap text-center">
          {content}
        </span>
        <span className="block w-8 h-[2px] bg-[#fff] rounded-full ml-4"></span>
      </div>
    </div>
  );
};

export default Title;
