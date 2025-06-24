import React, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  DownOutlined,
  RightOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const CategorySidebar = ({ categories, mobile }) => {
  const [openKeys, setOpenKeys] = useState([categories[0]?.slug]);

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const onClick = ({ key }) => {
    console.log("Clicked:", key);
  };

  return (
    <div
      className={
        mobile
          ? "block w-[300px] h-fit border border-[#551760] border-solid text-left"
          : "hidden md:block w-[300px] h-fit border border-[#551760] border-solid text-left"
      }
      style={{ borderWidth: 0.5 }}
    >
      {/* Header Categories */}
      <div className="bg-[#551760] text-[#fff] font-semibold px-[20px] py-[20px]">
        Categories
      </div>

      <Menu
        mode="inline"
        onClick={onClick}
        onOpenChange={onOpenChange}
        openKeys={openKeys}
        defaultSelectedKeys={[categories[0]?.slug]}
        style={{ borderRight: 0 }}
      >
        {categories.map((cat) =>
          cat.children && cat.children.length > 0 ? (
            <SubMenu key={cat.slug} title={cat.name}>
              {cat.children.map((child) => (
                <Menu.Item key={child.slug}>{child.name}</Menu.Item>
              ))}
            </SubMenu>
          ) : (
            <Menu.Item key={cat.slug}>{cat.name}</Menu.Item>
          )
        )}
      </Menu>
    </div>
  );
};

export default CategorySidebar;
