import React from "react";
import { Carousel, Button } from "antd";
import NewsCard from "./NewsCard";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const newsData = [
  {
    id: 1,
    title: "Nu Skin launches new product line",
    description: "Discover the latest innovations in skincare from Nu Skin.",
    imageUrl: "https://picsum.photos/300/200?random=21",
    date: "2024-07-01",
  },
  {
    id: 2,
    title: "Nu Skin wins global award",
    description: "Nu Skin has been recognized for outstanding achievements.",
    imageUrl: "https://picsum.photos/300/200?random=22",
    date: "2024-06-15",
  },
  {
    id: 3,
    title: "Community outreach program",
    description: "Nu Skin supports local communities with new initiatives.",
    imageUrl: "https://picsum.photos/300/200?random=23",
    date: "2024-06-10",
  },
  {
    id: 4,
    title: "Sustainability efforts",
    description: "Nu Skin continues to lead in sustainability practices.",
    imageUrl: "https://picsum.photos/300/200?random=24",
    date: "2024-05-28",
  },
];
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 cursor-pointer bg-[#551760] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      onClick={onClick}
      style={{ background: "#551760" }}
    >
      <LeftOutlined style={{ fontSize: 24, color: "#fff" }} />
    </div>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 cursor-pointer bg-[#551760] rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
      onClick={onClick}
      style={{ background: "#551760" }}
    >
      <RightOutlined style={{ fontSize: 24, color: "#fff" }} />
    </div>
  );
};

const NewsList = () => {
  return (
    <div className="flex flex-col md:flex-row w-full items-start gap-8 pb-8">
      {/* Hình banner bên phải (trên mobile sẽ lên trên) */}
      <div className="w-full md:w-1/3 flex justify-center items-center order-1 md:order-2 mb-6 md:mb-0">
        <img
          src="https://picsum.photos/300/400?random=6"
          alt="News Banner"
          className="w-full max-w-full md:max-w-[350px] h-[200px] md:h-[400px] object-cover"
        />
      </div>
      {/* Tabs và danh sách tin tức bên trái */}
      <div className="w-full md:w-2/3 order-2 md:order-1">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
          <Button
            type="primary"
            className="rounded-full bg-[#551760] px-6 font-semibold w-full md:w-auto"
          >
            View All
          </Button>
        </div>
        <div className="relative">
          <Carousel
            dots={false}
            slidesToShow={4}
            slidesToScroll={2}
            infinite
            className="w-full"
            arrows
            prevArrow={<CustomPrevArrow />}
            nextArrow={<CustomNextArrow />}
            responsive={[
              {
                breakpoint: 1280,
                settings: { slidesToShow: 3 },
              },
              {
                breakpoint: 768,
                settings: { slidesToShow: 3 },
              },
            ]}
          >
            {newsData.map((news) => (
              <div key={news.id} className="flex justify-center">
                <NewsCard news={news} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
