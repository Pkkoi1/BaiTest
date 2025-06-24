import React from "react";
import { AutoComplete, Input, Button } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { searchProducts } from "../../controller/productController";
const { Search } = Input;

const SearchField = () => {
  const [loading] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const favoriteCount = 0;
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (value) => {
    const results = searchProducts(value);
    setOptions(
      results.map((item) => ({
        value: item.name,
        label: (
          <div className="flex items-center gap-2">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-8 h-8 object-cover rounded"
            />
            <span>{item.name}</span>
          </div>
        ),
        product: item,
      }))
    );
  };

  const handleSelect = (value, option) => {
    if (option.product) {
      navigate("/detail", { state: { product: option.product } });
    }
  };

  return (
    <div className="grid grid-cols-3 items-center gap-4 w-full py-[20px] sticky top-0 left-0 z-40 bg-white px-4">
      <div></div>
      <div>
        <AutoComplete
          style={{ width: "100%" }}
          options={options}
          onSearch={handleSearch}
          onSelect={handleSelect}
          placeholder="Tìm kiếm sản phẩm..."
        >
          <Input.Search loading={loading} />
        </AutoComplete>
      </div>
      <div className="flex justify-end items-center gap-4">
        <div className="flex items-center gap-1">
          <Button
            type="text"
            icon={<HeartOutlined style={{ fontSize: 20, color: "#551760" }} />}
          />
          <span className="bg-red-500 text-white text-xs rounded-full px-1.5 flex items-center h-5">
            {favoriteCount}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Button
            type="text"
            icon={
              <ShoppingCartOutlined
                style={{ fontSize: 20, color: "#551760" }}
              />
            }
          />
          <span className="bg-green-500 text-white text-xs rounded-full px-1.5 flex items-center h-5">
            {cartCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchField;
