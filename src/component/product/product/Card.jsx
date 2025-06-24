import React from "react";
import { useCart } from "../../../context/CartContext";

const Card = ({ product, small }) => {
  // Định dạng tiền USD
  const formatUSD = (value) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    });

  const { addToCart } = useCart();

  return (
    <div
      className={`ml-2 flex flex-col items-center rounded-xl shadow hover:shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer p-2 ${
        small ? "w-[140px] md:w-[220px]" : "w-[220px]"
      }`}
    >
      <img
        alt={product.name}
        src={product.imageUrl}
        className={`object-cover cursor-pointer mb-2 rounded ${
          small ? "w-full h-[120px] md:h-[180px]" : "w-full h-full"
        }`}
      />
      <span className="text-xs text-gray-400">{product.brand}</span>
      <span className="font-medium text-[13px] md:text-[14px] text-center">
        {product.name}
      </span>
      <div className="flex items-center gap-2 justify-center cursor-pointer">
        <span className="text-base font-semibold text-[#e1a753]">
          {formatUSD(product.price)}
        </span>
        {product.isOnSale && (
          <span className="line-through text-gray-400 text-xs">
            {formatUSD(product.originalPrice)}
          </span>
        )}
      </div>
      <button
        className={`cursor-pointer mt-2 w-full py-1.5 font-semibold text-white ${
          product.inStock
            ? "bg-[#551760] hover:bg-[#c94e6a] transition"
            : "bg-gray-400 cursor-not-allowed"
        } text-xs md:text-sm`}
        disabled={!product.inStock}
        onClick={product.inStock ? addToCart : undefined}
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
};

export default Card;
