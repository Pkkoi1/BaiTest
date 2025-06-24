import React from "react";
import Card from "../product/Card";
import PopularList from "./PopularList";
import SkincarePromoCard from "../promoCard";
import Title from "../../title";

const PopularProduct = () => {
  return (
    <div className="items-center justify-center flex flex-col w-full  ">
      <Title content="Most Popular Products"></Title>

      <div className="flex flex-wrap gap-8 justify-center w-full bg-[#f3f7f8] p-8">
        <PopularList></PopularList>
      </div>
      <div className="mt-2 w-full">
        <SkincarePromoCard></SkincarePromoCard>
      </div>
    </div>
  );
};

export default PopularProduct;
