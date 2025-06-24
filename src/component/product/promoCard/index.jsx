import React from "react";
import { Button, Badge } from "antd";

const SkincarePromoCard = () => {
  return (
    <div className="flex flex-row items-center py-10 pr-8 bg-gray-100 max-w-full">
      {/* Hình bên trái với Badge góc phải */}
      <div className="flex-shrink-0 flex items-center pl-8 relative w-[50%]">
        <Badge
          count={
            <span className="flex items-center justify-center w-14 h-14 rounded-full bg-[#551760] text-white font-semibold shadow text-sm">
              Sale
              <br />
              $29.99
            </span>
          }
          color="#551760"
          style={{
            boxShadow: "none",
            background: "#551760",
            padding: "40px",
            width: "56px",
            height: "56px",
            minWidth: "0",
            minHeight: "0",
          }}
          offset={[-20, 20]}
        >
          <img
            src="SkincarePromoCard.png"
            alt="Skincare Product"
            className="h-[400px] object-fill"
          />
        </Badge>
      </div>
      {/* Nội dung bên phải */}
      <div className="flex-1 flex flex-col items-start justify-center p-4">
        <span className="text-red-500 text-sm font-bold">
          ageLOC® LumiSpa® iO
        </span>
        <h3 className="text-xl font-semibold">ageLOC® LumiSpa® iO</h3>
        <div className="flex items-center gap-4 my-2">
          <span className="text-gray-600">Elevate your skincare routine</span>
        </div>
        <button className="bg-[#551760] hover:bg-purple-800 px-6 py-2 text-white font-semibold transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SkincarePromoCard;
