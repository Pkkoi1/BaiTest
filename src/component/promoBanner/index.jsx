import React, { useState } from "react";
import CategorySidebar from "./CategorySidebar";
import MainBanner from "./MainBanner";
import PromotionBoxes from "./PromotionBoxes";
import { Tabs, Drawer, FloatButton } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { getAllCategories } from "../../controller/CategoryController"; // đúng tên file

const tabItems = [
  { key: "home", label: "Home" },
  { key: "shop", label: "Shop" },
  { key: "shopdetail", label: "ShopDetail Page" },
  { key: "contact", label: "Contact" },
];

const PromoBanner = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const categories = getAllCategories(); // lấy dữ liệu 1 lần

  return (
    <div>
      <div className="flex">
        <CategorySidebar categories={categories} />
        <div className="px-[16px] flex-1 w-full mb-10">
          <Tabs items={tabItems} />
          <MainBanner />
          <PromotionBoxes />
        </div>
      </div>
      {/* FloatButton chỉ hiện trên mobile */}
      <div className="md:hidden">
        <FloatButton
          icon={<MenuOutlined />}
          type="primary"
          style={{ right: 24, bottom: 24 }}
          onClick={() => setDrawerOpen(true)}
          tooltip="Danh mục"
        />
        <Drawer
          title="Categories"
          placement="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          width={280}
          bodyStyle={{ padding: 0 }}
        >
          {/* Hiển thị sidebar đầy đủ trên mobile */}
          <CategorySidebar categories={categories} mobile />
        </Drawer>
      </div>
    </div>
  );
};

export default PromoBanner;
