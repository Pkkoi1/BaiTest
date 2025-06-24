import React from "react";
import SearchField from "../../component/search";
import PromoBanner from "../../component/promoBanner";
import PopularProduct from "../../component/product/popularProduct";
import AwardAndRecognition from "../../component/awardAndRegconition";
import TheNuSkin from "../../component/theNuSkin/way";
import NuSkinNew from "../../component/theNuSkin/new";

const Home = () => {
  return (
    <div className="bg-[#fff] px-[30px] flex flex-col flex-1">
      <SearchField />
      <PromoBanner />
      <PopularProduct />
      <AwardAndRecognition></AwardAndRecognition>
      <TheNuSkin></TheNuSkin>
      <NuSkinNew></NuSkinNew>
    </div>
  );
};

export default Home;
