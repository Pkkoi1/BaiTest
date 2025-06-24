import { Carousel } from "antd";
const banners = ["/banner1.webp", "/banner2.png", "/banner3.jpg"];

const MainBanner = () => (
  <div className="w-screen md:w-[75vw] max-w-none h-[40vh] relative md:left-0 md:right-0 md:ml-0 md:mr-0 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] md:static">
    <Carousel arrows infinite={true}>
      {banners.map((src, idx) => (
        <div key={idx} className="h-[40vh] flex">
          <img
            src={src}
            alt={`Banner ${idx + 1}`}
            className="h-full object-position object-cover w-full"
          />
        </div>
      ))}
    </Carousel>
  </div>
);

export default MainBanner;
