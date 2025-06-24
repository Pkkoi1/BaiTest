import React from "react";
import { useLocation } from "react-router-dom";

const Detail = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <div className="p-8">Không tìm thấy sản phẩm.</div>;
  }

  return (
    <div className="p-8 max-w-xl mx-auto bg-white rounded shadow">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <div className="mb-2 text-gray-600">{product.brand}</div>
      <div className="mb-2">{product.description}</div>
      <div className="mb-2">
        <span className="text-lg font-semibold text-pink-700">
          {product.price}₫
        </span>
        {product.isOnSale && (
          <span className="ml-2 line-through text-gray-400">
            {product.originalPrice}₫
          </span>
        )}
      </div>
      <div className="mb-2">
        Đánh giá: {product.rating} ({product.reviewCount} đánh giá)
      </div>
      <div className="mb-2">{product.inStock ? "Còn hàng" : "Hết hàng"}</div>
    </div>
  );
};

export default Detail;
