import React from "react";
import Stats from "./Stats";
import ForceForGood from "./ForceForGood";
import NatureScience from "./NatureScience";
import Title from "../../title";
import { Carousel } from "antd";

const TheNuSkin = () => {
  // Responsive: kiểm tra mobile
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="mt-16">
      <Title content="The Nu Skin Way"></Title>
      <Stats />
      {isMobile ? (
        <Carousel dots swipeToSlide draggable>
          <div>
            <ForceForGood />
          </div>
          <div>
            <NatureScience isMobile={isMobile} />
          </div>
        </Carousel>
      ) : (
        <>
          <ForceForGood />
          <NatureScience isMobile={isMobile} />
        </>
      )}
    </div>
  );
};

export default TheNuSkin;
