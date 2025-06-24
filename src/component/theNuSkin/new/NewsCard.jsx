import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div className="w-[220px] h-[320px] bg-white rounded-xl shadow flex flex-col items-center p-4 transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        src={news.imageUrl}
        alt={news.title}
        className="w-full h-[160px] object-cover rounded-lg mb-2"
      />
      <span className="text-xs text-gray-400">{news.date}</span>
      <span className="font-bold text-lg text-center mt-1">{news.title}</span>
      <p className="text-sm text-gray-600 text-center mt-1 line-clamp-4">
        {news.description}
      </p>
    </div>
  );
};

export default NewsCard;
