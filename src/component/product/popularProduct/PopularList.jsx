import React from "react";
import { Carousel, Tabs, Button } from "antd";
import banner from "../../../../public/pplImge.png";
import { popularProducts } from "../../../models/Product";
import Card from "../product/Card";

const { TabPane } = Tabs;

const PopularList = () => {
  const carouselRef = React.useRef();
  const [carouselIndex, setCarouselIndex] = React.useState(0);

  // Responsive: 2 sản phẩm trên 1 slide khi nhỏ hơn md, 4 trên md trở lên
  const [slidesToShow, setSlidesToShow] = React.useState(4);
  const [slidesToScroll, setSlidesToScroll] = React.useState(2);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(3);
        setSlidesToScroll(2);
      } else {
        setSlidesToShow(4);
        setSlidesToScroll(2);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dotCount =
    Math.ceil((popularProducts.length - slidesToShow) / slidesToScroll) + 1;

  const goTo = (idx) => {
    if (carouselRef.current) {
      carouselRef.current.goTo(idx * slidesToScroll, true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full items-start gap-8">
      {/* Banner bên trái */}
      <div className="w-full max-h-fit md:w-1/3 flex justify-center items-center">
        <img
          src={banner}
          alt="Banner"
          className="h-[100px] md:h-min w-full max-w-[180px] md:max-w-[350px] object-cover"
        />
      </div>
      {/* Danh sách sản phẩm bên phải */}
      <div className="w-full md:w-2/3">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4 gap-4">
          <Tabs defaultActiveKey="1" className="flex-1 w-full md:w-auto">
            <TabPane tab="Description" key="1"></TabPane>
            <TabPane tab="Specifications" key="2"></TabPane>
          </Tabs>
          <Button
            type="primary"
            className="rounded-full bg-[#551760] px-6 font-semibold w-full md:w-auto"
          >
            View All
          </Button>
        </div>
        <div className="relative">
          <Carousel
            ref={carouselRef}
            dots={false}
            slidesToShow={slidesToShow}
            slidesToScroll={slidesToScroll}
            className="w-full"
            arrows
            infinite={true}
            beforeChange={(_, next) =>
              setCarouselIndex(Math.floor(next / slidesToScroll))
            }
            responsive={[
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 9999,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                },
              },
            ]}
          >
            {popularProducts.map((product) => (
              <div key={product.id} className="flex justify-center">
                <Card product={product} small />
              </div>
            ))}
          </Carousel>
          {/* Dots bên ngoài */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: dotCount }).map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full mx-1 ${
                  carouselIndex === idx ? "bg-[#551760]" : "bg-gray-300"
                }`}
                onClick={() => goTo(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularList;
