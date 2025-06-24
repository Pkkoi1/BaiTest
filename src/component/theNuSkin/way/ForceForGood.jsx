// src/components/ForceForGood.js
import React from "react";

const ForceForGood = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-20 mt-10 text-left">
      <img
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTm0lRgTVevfiSLiuB0KKEfoIyo9yLoKN7_9fjizNsamzXWhsvi"
        alt="Kids"
        className="rounded-md object-cover w-full h-full"
      />
      <div className="text-left">
        <h2 className="text-xl font-semibold mb-4">Being a Force for Good</h2>
        <p className="text-sm leading-relaxed">
          Some call it corporate social responsibility. We call it our purpose.
          Together we're engaged in initiatives worldwide—nourishing thousands
          of hungry children, funding pediatric health and wellness services, or
          striving for a more sustainable future. And sometimes, we're simply
          taking meaningful steps to improve our local communities. Whatever we
          do, we believe changing the world begins with a single action.
        </p>
        <a
          href="#"
          className="text-purple-700 text-sm underline mt-4 inline-block"
        >
          Explore our projects
        </a>
      </div>
    </div>
  );
};

export default ForceForGood;
