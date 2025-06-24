// src/components/NatureScience.js
import React from "react";

const NatureScience = ({ isMobile }) => {
  return (
    <div
      className={
        isMobile
          ? "flex flex-col gap-6 px-6 mt-10 mb-10 text-left"
          : "grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20 mt-16 mb-20 text-left"
      }
    >
      {/* Khi desktop: hình bên phải, text bên trái */}
      {!isMobile && (
        <>
          <div>
            <h2 className="text-xl font-semibold mb-4">Nature + Science</h2>
            <p className="text-sm leading-relaxed">
              Capturing the best in nature to bring you the best results is our
              personal mission. We combine powerful ingredients with innovative
              science and technology. Through our 75+ world-class products and
              their real-world benefits. And through more than 30 years
              researching aging at the genetic level. Mother Nature continually
              inspires us to push the boundaries of inquiry and innovation. Two
              worlds that both start and bring it right to your door.
            </p>
            <a
              href="#"
              className="text-purple-700 text-sm underline mt-4 inline-block"
            >
              Discover more
            </a>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUOYjoeqmAzf5xphrIXwhQ9Yq0HT-8elk7LuD7inBZ87eo_Nl"
            alt="Product"
            className="rounded-md object-contain w-full"
          />
        </>
      )}
      {/* Khi mobile: hình trên, text dưới */}
      {isMobile && (
        <>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUOYjoeqmAzf5xphrIXwhQ9Yq0HT-8elk7LuD7inBZ87eo_Nl"
            alt="Product"
            className="rounded-md object-contain w-full mb-4"
          />
          <div>
            <h2 className="text-xl font-semibold mb-4">Nature + Science</h2>
            <p className="text-sm leading-relaxed">
              Capturing the best in nature to bring you the best results is our
              personal mission. We combine powerful ingredients with innovative
              science and technology. Through our 75+ world-class products and
              their real-world benefits. And through more than 30 years
              researching aging at the genetic level. Mother Nature continually
              inspires us to push the boundaries of inquiry and innovation. Two
              worlds that both start and bring it right to your door.
            </p>
            <a
              href="#"
              className="text-purple-700 text-sm underline mt-4 inline-block"
            >
              Discover more
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default NatureScience;
